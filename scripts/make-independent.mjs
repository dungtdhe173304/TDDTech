import fs from "node:fs";
import path from "node:path";
import ts from "typescript";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const quote = JSON.stringify;
const branding = (text) =>
  text
    .replace(/XimiTech|XIMITECH/g, "TDDTech")
    .replace(/ximitech-ui-theme/g, "tddtech-ui-theme")
    .replace(/088 888 9805|0888889805|\+84888889805/g, "{{phone}}")
    .replace(/ximitech1309@gmail\.com/g, "{{email}}")
    .replace(/4101691382|130988888/g, "Chưa cập nhật")
    .replace(
      /Công ty TNHH Giải pháp số TDDTech|TDDTech DIGITAL SOLUTIONS CO\., LTD|TDDTech CO\., LTD/g,
      "TDDTech",
    )
    .replace(
      /Tổ 2, Khu phố 12, Phường Quy Nhơn Bắc, Tỉnh Gia Lai, Việt Nam/g,
      "{{address}}",
    )
    .replace(/Trần Thanh Độ|Nguyễn Văn Minh/g, "Đội ngũ TDDTech");

for (const file of fs.readdirSync(path.join(root, "src/original"))) {
  if (!file.endsWith(".js") || file.startsWith("vendor-")) continue;
  const filename = path.join(root, "src/original", file);
  let source = fs.readFileSync(filename, "utf8");
  const alreadyIndependent = source.includes('from "../config/site.js"');
  const ast = ts.createSourceFile(
    file,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.JS,
  );
  const edits = [];
  function visit(node) {
    if (
      file === "index-DAfw2Y79.js" &&
      ts.isVariableDeclaration(node) &&
      node.name.getText(ast) === "Ir" &&
      node.initializer &&
      ts.isArrayLiteralExpression(node.initializer)
    ) {
      const hasFacebook = node.initializer.elements.some(
        (item) =>
          ts.isObjectLiteralExpression(item) &&
          item.properties.some(
            (property) =>
              ts.isPropertyAssignment(property) &&
              property.name.getText(ast) === "label" &&
              ts.isStringLiteral(property.initializer) &&
              property.initializer.text === "Facebook",
          ),
      );
      if (!hasFacebook && node.initializer.elements.length) {
        const position = node.initializer.elements[0].end;
        edits.push([
          position,
          position,
          ',{label:"Facebook",href:site.social.facebook,icon:(className)=>t.jsx(FacebookIcon,{className})}',
        ]);
      }
    }
    if (
      file === "CompanyPage-BQ4Zl90y.js" &&
      ts.isArrayLiteralExpression(node)
    ) {
      const titles = node.elements.map((item) => {
        if (
          !ts.isCallExpression(item) ||
          !item.arguments[1] ||
          !ts.isObjectLiteralExpression(item.arguments[1])
        )
          return "";
        const title = item.arguments[1].properties.find(
          (property) =>
            ts.isPropertyAssignment(property) &&
            property.name.getText(ast) === "title",
        );
        return title && ts.isStringLiteral(title.initializer)
          ? title.initializer.text
          : "";
      });
      if (
        ["Zalo", "Hotline", "Email"].every((title) => titles.includes(title))
      ) {
        if (!titles.includes("Facebook")) {
          const position = node.elements[node.elements.length - 1].end;
          edits.push([
            position,
            position,
            ',t.jsx(c,{icon:FacebookIcon,title:"Facebook",value:"Thiều Đức Dũng",href:site.social.facebook})',
          ]);
        }
        const props = node.parent.parent;
        if (ts.isObjectLiteralExpression(props)) {
          const className = props.properties.find(
            (property) =>
              ts.isPropertyAssignment(property) &&
              property.name.getText(ast) === "className",
          );
          if (className)
            edits.push([
              className.initializer.getStart(ast),
              className.initializer.end,
              quote("grid gap-4 sm:grid-cols-2 lg:grid-cols-4"),
            ]);
        }
      }
    }
    if (
      file === "index-DAfw2Y79.js" &&
      ts.isCallExpression(node) &&
      ts.isPropertyAccessExpression(node.expression) &&
      ["jsx", "jsxs"].includes(node.expression.name.text) &&
      ts.isStringLiteral(node.arguments[0]) &&
      node.arguments[0].text === "p" &&
      node.arguments[1] &&
      ts.isObjectLiteralExpression(node.arguments[1])
    ) {
      const children = node.arguments[1].properties.find(
        (property) =>
          ts.isPropertyAssignment(property) &&
          property.name.getText(ast) === "children",
      );
      const value = children?.initializer;
      const copyright =
        value &&
        ((ts.isStringLiteral(value) &&
          value.text === "© 2026 TDDTech · Thiều Đức Dũng") ||
          (ts.isArrayLiteralExpression(value) &&
            ts.isStringLiteral(value.elements[0]) &&
            value.elements[0].text === "© 2026 " &&
            value.elements.some(
              (element) =>
                ts.isStringLiteral(element) && element.text === " · MST ",
            )));
      if (copyright) {
        edits.push([
          node.getStart(ast),
          node.end,
          `${node.expression.expression.getText(ast)}.jsx(Copyright, {})`,
        ]);
        return;
      }
    }
    if (
      file === "index-DAfw2Y79.js" &&
      ts.isVariableDeclaration(node) &&
      node.name.getText(ast) === "Fr" &&
      node.initializer
    ) {
      const start = node.initializer.getStart(ast);
      const component = node.initializer.getText(ast);
      const guard = /if\s*\(c\)\s*return;/.exec(component);
      if (guard)
        edits.push([
          start + guard.index,
          start + guard.index + guard[0].length,
          "if(c || !site.logoModelUrl) return;",
        ]);
      if (!component.includes("const modelData")) {
        const body = /try\s*\{\s*(?=const\s*\[\s*u,)/.exec(component);
        if (body) {
          const insertion = start + body.index + body[0].indexOf("{") + 1;
          edits.push([
            insertion,
            insertion,
            "const modelData = await loadLogoModel(site.logoModelUrl); if(!m) return;",
          ]);
        }
      }
      const load =
        /new x\(\)\.loadAsync\(["']\/models\/ximitech-logo-3d\.glb["']\)/.exec(
          component,
        );
      if (load)
        edits.push([
          start + load.index,
          start + load.index + load[0].length,
          'new x().parseAsync(modelData, new URL(".", new URL(site.logoModelUrl, window.location.href)).href)',
        ]);
    }
    if (
      file === "index-DAfw2Y79.js" &&
      ts.isArrayLiteralExpression(node) &&
      node.elements.length === 4 &&
      ts.isStringLiteral(node.elements[0]) &&
      node.elements[0].text === "© 2026 " &&
      ts.isStringLiteral(node.elements[2]) &&
      node.elements[2].text === " · MST "
    ) {
      edits.push([
        node.getStart(ast),
        node.end,
        `[${quote("© 2026 TDDTech · Thiều Đức Dũng")}]`,
      ]);
      return;
    }
    if (
      file === "index-DAfw2Y79.js" &&
      ts.isVariableDeclaration(node) &&
      node.name.getText(ast) === "zu" &&
      node.initializer &&
      ts.isArrayLiteralExpression(node.initializer)
    ) {
      const items = [];
      for (const item of node.initializer.elements) {
        if (!ts.isObjectLiteralExpression(item)) {
          items.push(item.getText(ast));
          continue;
        }
        const label = item.properties.find(
          (property) =>
            ts.isPropertyAssignment(property) &&
            property.name.getText(ast) === "label",
        );
        const text =
          label && ts.isStringLiteral(label.initializer)
            ? label.initializer.text
            : "";
        if (text === "Mã số thuế") continue;
        let content = item.getText(ast);
        if (text === "Trụ sở · phục vụ") {
          const value = item.properties.find(
            (property) =>
              ts.isPropertyAssignment(property) &&
              property.name.getText(ast) === "value",
          );
          if (value) {
            const start = item.getStart(ast);
            content =
              content.slice(0, value.initializer.getStart(ast) - start) +
              quote("Hà Nội · toàn quốc") +
              content.slice(value.initializer.end - start);
          }
        }
        items.push(content);
      }
      edits.push([
        node.initializer.getStart(ast),
        node.initializer.end,
        `[${items.join(",")}]`,
      ]);
      return;
    }
    // Team display names can coincide after rebranding; identity must remain stable.
    if (
      file === "index-DAfw2Y79.js" &&
      ts.isVariableDeclaration(node) &&
      node.name.getText(ast) === "$u" &&
      node.initializer &&
      ts.isArrayLiteralExpression(node.initializer)
    ) {
      const ids = ["product-lead", "solution-architect"];
      for (const [index, member] of node.initializer.elements.entries()) {
        if (
          ts.isObjectLiteralExpression(member) &&
          !member.properties.some(
            (property) => property.name?.getText(ast) === "id",
          )
        ) {
          edits.push([
            member.getStart(ast) + 1,
            member.getStart(ast) + 1,
            `id: ${quote(ids[index] || `team-member-${index + 1}`)},`,
          ]);
        }
      }
    }
    if (
      ts.isCallExpression(node) &&
      node.arguments.length === 3 &&
      ts.isPropertyAccessExpression(node.expression) &&
      ["jsx", "jsxs"].includes(node.expression.name.text)
    ) {
      const key = node.arguments[2];
      if (ts.isPropertyAccessExpression(key) && key.name.text === "name") {
        for (let parent = node.parent; parent; parent = parent.parent) {
          if (
            ts.isCallExpression(parent) &&
            ts.isPropertyAccessExpression(parent.expression) &&
            parent.expression.name.text === "map"
          ) {
            const list = parent.expression.expression.getText(ast);
            if (
              (file === "index-DAfw2Y79.js" && list === "$u") ||
              (file === "CapabilityProfile-DePoOAgZ.js" && list === "I")
            ) {
              edits.push([
                key.getStart(ast),
                key.end,
                `${key.expression.getText(ast)}.id`,
              ]);
            }
            break;
          }
        }
      }
    }
    if (
      ts.isTemplateHead(node) ||
      ts.isTemplateMiddle(node) ||
      ts.isTemplateTail(node)
    ) {
      const raw = source.slice(node.getStart(ast), node.end);
      let updated = raw
        .replace(/https:\/\/zalo\.me\/0888889805/g, "${site.zaloHref}")
        .replace(/https?:\/\/(?:www\.)?ximitech\.vn/g, "${siteOrigin}");
      updated = branding(updated)
        .replaceAll("{{phone}}", "${site.phoneLabel}")
        .replaceAll("{{email}}", "${site.emailLabel}")
        .replaceAll("{{address}}", "${site.company.address}")
        .replace(/(?:lab[12]\.)?ximitech\.vn/g, "TDDTech");
      if (updated !== raw) edits.push([node.getStart(ast), node.end, updated]);
      return;
    }
    // Replace the original company's legal, banking and contact record as a unit.
    if (
      file === "index-DAfw2Y79.js" &&
      ts.isVariableDeclaration(node) &&
      node.name.getText(ast) === "Dt" &&
      node.initializer
    ) {
      edits.push([
        node.initializer.getStart(ast),
        node.initializer.end,
        "site.company",
      ]);
      return;
    }
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      const text = node.text;
      let replacement;
      if (/^https?:\/\/(?:www\.)?ximitech\.vn(?:[/?#]|$)/.test(text)) {
        replacement = `siteUrl(${quote(text.replace(/^https?:\/\/(?:www\.)?ximitech\.vn/, ""))})`;
      } else if (/^https?:\/\/lab[12]\.ximitech\.vn/.test(text))
        replacement = quote("/ho-so-nang-luc#lab");
      else if (text.startsWith("https://zalo.me/0888889805"))
        replacement = "site.zaloHref";
      else if (text === "tel:+84888889805") replacement = "site.phoneHref";
      else if (text === "mailto:ximitech1309@gmail.com")
        replacement = "site.emailHref";
      else if (
        /^https?:\/\/(?:www\.)?(tiktok|youtube|instagram|threads)\.(?:com|net)\//.test(
          text,
        ) &&
        /ximitech/i.test(text)
      ) {
        const network = text.match(/(tiktok|youtube|instagram|threads)\./)[1];
        replacement = `site.social.${network}`;
      } else if (text.includes("masothue.com/4101691382"))
        replacement = "site.contactPath";
      else if (text === "/OG.png") replacement = quote("/brand/og.png");
      else if (text === "/ximitech-logo-light.webp")
        replacement = quote("/brand/logo-light.png");
      else if (text === "/ximitech-logo.webp")
        replacement = quote("/brand/logo-dark.png");
      else if (text === "/loader-logo.png" || text === "loader-logo.png")
        replacement = quote("/loader-logo.png");
      else if (text === "/ximitech-mark.webp")
        replacement = quote("/brand/mark.png");
      else if (/tranthanhdo\.webp$|nguyen-van-minh\.png$/.test(text))
        replacement = quote("/brand/team.svg");
      else if (!text.startsWith("/media/")) {
        const updated = branding(text)
          .replace(/https?:\/\/(?:www\.)?ximitech\.vn/g, "")
          .replace(/(?:lab[12]\.)?ximitech\.vn/g, "TDDTech");
        if (updated !== text)
          replacement = updated.includes("{{")
            ? `siteText(${quote(updated)})`
            : quote(updated);
      }
      if (replacement) edits.push([node.getStart(ast), node.end, replacement]);
      return;
    }
    ts.forEachChild(node, visit);
  }
  visit(ast);
  for (const [start, end, text] of edits.sort((a, b) => b[0] - a[0]))
    source = source.slice(0, start) + text + source.slice(end);
  source = source
    .replace(/`tel:\$\{(?:Dt|c)\.phoneHref\}`/g, "site.phoneHref")
    .replace(/`mailto:\$\{Dt\.email\}`/g, "site.emailHref")
    .replaceAll("https://ximitech.vn", "${siteOrigin}")
    .replaceAll("https://lab1.ximitech.vn", "/ho-so-nang-luc#lab")
    .replaceAll("https://lab2.ximitech.vn", "/ho-so-nang-luc#lab");
  source = source.replaceAll('vd("/brand/team.svg")', '"/brand/team.svg"');
  source = source
    .replaceAll("XimiTech", "TDDTech")
    .replaceAll("https://zalo.me/{{phone}}", "{{zalo}}");
  source = source.replaceAll(
    "md:mb-16 md:grid-cols-2",
    "md:mb-16 md:grid-cols-3",
  );
  if (!alreadyIndependent)
    source =
      'import { site, siteOrigin, siteUrl, siteText } from "../config/site.js";\n' +
      source;
  if (file === "index-DAfw2Y79.js") {
    if (!source.includes('import Copyright from "../components/Copyright"'))
      source = 'import Copyright from "../components/Copyright";\n' + source;
    if (!source.includes('from "../lib/load-logo-model.mjs"'))
      source =
        'import { loadLogoModel } from "../lib/load-logo-model.mjs";\n' +
        source;
  }
  if (
    ["index-DAfw2Y79.js", "CompanyPage-BQ4Zl90y.js"].includes(file) &&
    !source.includes('import FacebookIcon from "../components/FacebookIcon"')
  ) {
    source =
      'import FacebookIcon from "../components/FacebookIcon";\n' + source;
  }
  fs.writeFileSync(filename, source);
}

function cleanContent(directory) {
  for (const item of fs.readdirSync(directory, { withFileTypes: true })) {
    const filename = path.join(directory, item.name);
    if (item.isDirectory()) cleanContent(filename);
    else if (item.name.endsWith(".html") || item.name === "sitemap.xml") {
      let data = fs.readFileSync(filename, "utf8");
      // Keep only content consumed by Next; remove archived third-party head scripts.
      if (item.name.endsWith(".html")) {
        const title = data.match(/<title>[\s\S]*?<\/title>/)?.[0] || "";
        const description =
          data.match(
            /<meta\s+name="description"\s+content="[^"]*"\s*\/?\s*>/,
          )?.[0] || "";
        const shell =
          data.match(/<div id="root">([\s\S]*?)<\/div>\s*<noscript>/)?.[1] ||
          "";
        data = `<html><head>${title}${description}</head><body><div id="root">${shell}</div><noscript></noscript></body></html>`;
      }
      data = data
        .replace(
          /https?:\/\/zalo\.me\/0888889805|tel:\+84888889805|mailto:ximitech1309@gmail\.com/g,
          "/lien-he",
        )
        .replace(/https?:\/\/(?:www\.)?ximitech\.vn/g, "");
      data = branding(data)
        .replaceAll("{{phone}}", "Liên hệ tư vấn")
        .replaceAll("{{email}}", "Liên hệ qua website")
        .replaceAll("{{address}}", "Liên hệ để biết thêm thông tin");
      fs.writeFileSync(filename, data);
    }
  }
}
cleanContent(path.join(root, "src/content"));
console.log(
  "Removed original provider navigation/contact/SEO and applied TDDTech configuration.",
);
await import("./update-company-details.mjs");
await import("./complete-contact-sections.mjs");
