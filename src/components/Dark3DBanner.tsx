"use client";

import { useEffect, useRef } from "react";
import styles from "./Dark3DBanner.module.css";

type Point = [number, number, number];
const vertices: Point[] = [
  [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
  [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1],
];
const faces = [[0, 1, 2, 3], [4, 7, 6, 5], [0, 4, 5, 1], [3, 2, 6, 7], [1, 5, 6, 2], [0, 3, 7, 4]];

export default function Dark3DBanner({ className = "", fade = 1, shift = 0 }: { className?: string; fade?: number; shift?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const shiftRef = useRef(shift);
  shiftRef.current = shift;
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const section = canvas.closest("section");
    let width = 1, height = 1, frame = 0, visible = true, last = 0, elapsed = 0;
    let pointerX = 0, pointerY = 0, tiltX = 0, tiltY = 0;
    const rotate = ([x, y, z]: Point, yaw: number, pitch: number): Point => {
      const a = x * Math.cos(yaw) + z * Math.sin(yaw);
      const b = z * Math.cos(yaw) - x * Math.sin(yaw);
      return [a, y * Math.cos(pitch) - b * Math.sin(pitch), y * Math.sin(pitch) + b * Math.cos(pitch)];
    };
    const draw = (time: number) => {
      const t = (reduced.matches ? 0.8 : time) + shiftRef.current;
      tiltX += (pointerX - tiltX) * 0.035;
      tiltY += (pointerY - tiltY) * 0.035;
      const scale = Math.min(width * 0.38, height * 0.53);
      const cx = width * (width < 700 ? 0.64 : 0.74), cy = height * 0.5;
      const project = (point: Point) => {
        const [x, y, z] = rotate(point, 0.35 + Math.sin(t * 0.12) * 0.18 + tiltX * 0.12, -0.25 + tiltY * 0.08);
        const perspective = 4.8 / (z + 5.8);
        return { x: cx + x * scale * perspective, y: cy + y * scale * perspective, z };
      };
      ctx.fillStyle = "#05080f";
      ctx.fillRect(0, 0, width, height);
      const halo = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(width * 0.62, height));
      halo.addColorStop(0, "#0a293c");
      halo.addColorStop(0.45, "#081425");
      halo.addColorStop(1, "#05080f");
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, width, height);

      // A perspective floor anchors the floating architecture in depth.
      ctx.lineWidth = 0.7;
      for (let i = -9; i <= 9; i++) {
        const a = project([i * 0.38, 1.35, -1.6]);
        const b = project([i * 0.38, 1.35, 4.5]);
        ctx.strokeStyle = "rgba(66, 166, 202, 0.11)";
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      }
      for (let i = 0; i < 14; i++) {
        const z = -1.6 + i * 0.45;
        const a = project([-3.5, 1.35, z]), b = project([3.5, 1.35, z]);
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      }

      // Independently rotating solid blocks, sorted back to front.
      const blocks = [
        { center: [0, 0.15, 0] as Point, size: 0.6, phase: 0 },
        { center: [1.25, -0.78, 0.4] as Point, size: 0.3, phase: 1.8 },
        { center: [-1.2, -0.7, 0.9] as Point, size: 0.23, phase: 3.2 },
        { center: [0.8, 0.92, 1] as Point, size: 0.2, phase: 4.6 },
        { center: [-0.5, -1.2, -0.4] as Point, size: 0.15, phase: 2.6 },
      ];
      const polygons: { points: ReturnType<typeof project>[]; depth: number; light: number }[] = [];
      const centers = blocks.map(block => project(block.center));
      blocks.forEach(block => {
        const points = vertices.map(vertex => {
          const rotated = rotate(vertex.map(v => v * block.size) as Point, t * 0.16 + block.phase, 0.35 + Math.sin(t * 0.2 + block.phase) * 0.15);
          return project([
            rotated[0] + block.center[0],
            rotated[1] + block.center[1] + Math.sin(t * 0.45 + block.phase) * 0.08,
            rotated[2] + block.center[2],
          ]);
        });
        faces.forEach((face, i) => {
          const p = face.map(index => points[index]);
          polygons.push({ points: p, depth: p.reduce((sum, point) => sum + point.z, 0) / 4, light: [0.11, 0.26, 0.18, 0.4, 0.2, 0.12][i] });
        });
      });
      ctx.strokeStyle = "rgba(74, 184, 220, 0.2)";
      ctx.setLineDash([3, 8]);
      centers.slice(1).forEach(center => {
        ctx.beginPath(); ctx.moveTo(centers[0].x, centers[0].y); ctx.lineTo(center.x, center.y); ctx.stroke();
      });
      ctx.setLineDash([]);
      polygons.sort((a, b) => b.depth - a.depth).forEach(({ points, light }) => {
        ctx.beginPath();
        points.forEach((p, i) => i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y));
        ctx.closePath();
        const gradient = ctx.createLinearGradient(points[0].x, points[0].y, points[2].x, points[2].y);
        gradient.addColorStop(0, `rgb(${12 + light * 30}, ${28 + light * 95}, ${44 + light * 130})`);
        gradient.addColorStop(1, "#081321");
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.strokeStyle = `rgba(99, 215, 242, ${light + 0.13})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });
      // Sparse stars and travelling data points keep the motion quiet.
      for (let i = 0; i < 40; i++) {
        const x = ((i * 0.6180339) % 1) * width;
        const y = ((i * 0.381966 + t * 0.003) % 1) * height;
        ctx.fillStyle = `rgba(125, 211, 252, ${0.12 + (Math.sin(i + t * 0.5) + 1) * 0.09})`;
        ctx.fillRect(x, y, i % 4 === 0 ? 2 : 1, i % 4 === 0 ? 2 : 1);
      }
      const veil = ctx.createLinearGradient(0, 0, width, 0);
      veil.addColorStop(0, "rgba(5,8,15,0.96)");
      veil.addColorStop(0.42, "rgba(5,8,15,0.72)");
      veil.addColorStop(0.8, "rgba(5,8,15,0.15)");
      veil.addColorStop(1, "rgba(5,8,15,0.3)");
      ctx.fillStyle = veil;
      ctx.fillRect(0, 0, width, height);
    };
    const tick = (now: number) => {
      frame = 0;
      if (!visible || document.hidden || reduced.matches) return;
      if (now - last >= 1000 / 30) {
        elapsed += Math.min((now - last) / 1000, 0.05);
        last = now;
        draw(elapsed);
      }
      frame = requestAnimationFrame(tick);
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      last = performance.now();
      draw(elapsed);
      if (visible && !document.hidden && !reduced.matches) frame = requestAnimationFrame(tick);
    };
    const resize = () => {
      width = Math.max(1, canvas.clientWidth);
      height = Math.max(1, canvas.clientHeight);
      const ratio = Math.min(devicePixelRatio || 1, width < 700 ? 1.25 : 1.5);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      schedule();
    };
    const pointer = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || reduced.matches) return;
      const bounds = canvas.getBoundingClientRect();
      pointerX = ((event.clientX - bounds.left) / width - 0.5) * 2;
      pointerY = ((event.clientY - bounds.top) / height - 0.5) * 2;
    };
    const leave = () => { pointerX = 0; pointerY = 0; };
    const observer = new ResizeObserver(resize);
    const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; schedule(); });
    observer.observe(canvas);
    intersection.observe(canvas);
    document.addEventListener("visibilitychange", schedule);
    reduced.addEventListener("change", schedule);
    section?.addEventListener("pointermove", pointer, { passive: true });
    section?.addEventListener("pointerleave", leave);
    resize();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      intersection.disconnect();
      document.removeEventListener("visibilitychange", schedule);
      reduced.removeEventListener("change", schedule);
      section?.removeEventListener("pointermove", pointer);
      section?.removeEventListener("pointerleave", leave);
    };
  }, []);
  return <canvas ref={ref} aria-hidden="true" className={`${styles.canvas} ${className}`} style={{ opacity: fade }} data-dark-3d-banner />;
}
