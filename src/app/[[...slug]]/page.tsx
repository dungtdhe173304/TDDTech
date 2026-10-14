import OriginalWebsite from "@/components/OriginalWebsite";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { site } from "@/config/site";

type Props = { params: Promise<{ slug?: string[] }> };

async function originalContent(slug: string[] = []) {
  if (slug[0] === "tuyen-dung") notFound();
  if (slug.some((segment) => !/^[a-zA-Z0-9_-]+$/.test(segment))) return null;
  const filename = slug.length ? `${slug.join("/")}.html` : "index.html";
  try {
    const originalHtml = await readFile(
      path.join(process.cwd(), "src/content", filename),
      "utf8",
    );
    const html = originalHtml
      .replaceAll("Liên hệ tư vấn", site.phoneLabel)
      .replaceAll("Liên hệ qua website", site.emailLabel);
    return {
      title: html.match(/<title>([\s\S]*?)<\/title>/)?.[1],
      description: html.match(
        /<meta\s+name="description"\s+content="([^"]*)"/,
      )?.[1],
      shell: html.match(/<div id="root">([\s\S]*?)<\/div>\s*<noscript>/)?.[1],
    };
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const content = await originalContent((await params).slug);
  return content
    ? { title: content.title, description: content.description }
    : {};
}

export default async function Page({ params }: Props) {
  const content = await originalContent((await params).slug);
  return (
    <>
      <div id="root">
        <OriginalWebsite />
      </div>
      {content?.shell && (
        <noscript dangerouslySetInnerHTML={{ __html: content.shell }} />
      )}
    </>
  );
}
