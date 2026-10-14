import test from "node:test";
import assert from "node:assert/strict";
import { loadLogoModel } from "../src/lib/load-logo-model.mjs";

async function withResponse(response, action) {
  const previous = globalThis.fetch;
  globalThis.fetch = async () => response;
  try {
    await action();
  } finally {
    globalThis.fetch = previous;
  }
}
test("rejects an HTML fallback before the GLTF parser sees it", async () => {
  await withResponse(
    new Response("<!DOCTYPE html><html></html>", {
      headers: { "content-type": "text/html" },
    }),
    async () => {
      await assert.rejects(loadLogoModel("/models/missing.glb"), /HTML/);
    },
  );
});
test("rejects a missing model with an HTTP error", async () => {
  await withResponse(new Response("Not found", { status: 404 }), async () => {
    await assert.rejects(loadLogoModel("/models/missing.glb"), /404/);
  });
});
test("rejects HTML mislabeled as binary", async () => {
  await withResponse(
    new Response("<!DOCTYPE html><html></html>", {
      headers: { "content-type": "application/octet-stream" },
    }),
    async () => {
      await assert.rejects(loadLogoModel("/models/missing.glb"), /GLB 2.0/);
    },
  );
});
test("accepts a self-contained GLB 2.0 document", async () => {
  const json = JSON.stringify({
    asset: { version: "2.0" },
    scene: 0,
    scenes: [{ nodes: [] }],
    nodes: [],
  });
  const chunk = Buffer.from(json.padEnd(Math.ceil(json.length / 4) * 4, " "));
  const buffer = Buffer.alloc(20 + chunk.length);
  buffer.writeUInt32LE(0x46546c67, 0);
  buffer.writeUInt32LE(2, 4);
  buffer.writeUInt32LE(buffer.length, 8);
  buffer.writeUInt32LE(chunk.length, 12);
  buffer.writeUInt32LE(0x4e4f534a, 16);
  chunk.copy(buffer, 20);
  await withResponse(
    new Response(buffer, { headers: { "content-type": "model/gltf-binary" } }),
    async () => {
      assert.deepEqual(
        Buffer.from(await loadLogoModel("/models/logo.glb")),
        buffer,
      );
    },
  );
});
