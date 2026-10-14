import fs from "node:fs";
import path from "node:path";
import ts from "typescript";
import { fileURLToPath } from "node:url";

const folder = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../src/original");
const prop = (node, name) => node && ts.isObjectLiteralExpression(node)
  ? node.properties.find(p => ts.isPropertyAssignment(p) && p.name.getText() === name)?.initializer
  : undefined;
const call = node => node && ts.isCallExpression(node);
let pairs = 0, reordered = 0;
for (const file of fs.readdirSync(folder).filter(f => f.endsWith(".js") && !f.startsWith("vendor-"))) {
  const filename = path.join(folder, file);
  let source = fs.readFileSync(filename, "utf8");
  const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
  const zaloAliases = new Set(["site.zaloHref"]);
  function aliases(node) {
    if (ts.isVariableDeclaration(node) && node.initializer && zaloAliases.has(node.initializer.getText(ast)))
      zaloAliases.add(node.name.getText(ast));
    ts.forEachChild(node, aliases);
  }
  aliases(ast);
  const edits = [];
  let needsPair = false;
  function visit(node) {
    if (file === "SeoLayout-CuGaHTIj.js" && ts.isObjectBindingPattern(node) &&
        node.elements.some(item => item.propertyName?.getText(ast) === "highlights") &&
        !node.elements.some(item => item.name.getText(ast) === "showFacebook"))
      edits.push([node.getStart(ast) + 1, node.getStart(ast) + 1, "showFacebook = true,"]);
    if (file === "CapabilityProfile-DePoOAgZ.js" && ts.isObjectLiteralExpression(node) &&
        prop(node, "eyebrow")?.text === "Hồ sơ năng lực" && prop(node, "intro") &&
        !prop(node, "showFacebook"))
      edits.push([node.getStart(ast) + 1, node.getStart(ast) + 1, "showFacebook:false,"]);
    if (ts.isArrayLiteralExpression(node)) {
      const elements = node.elements.filter(item => !(
        call(item) &&
        prop(item.arguments[1], "href")?.getText(ast) === "site.phoneHref" &&
        [
          "text-sm font-semibold text-slate-500 transition-colors hover:text-primary dark:text-white/50",
          "inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 px-6 py-3.5 font-bold text-white transition-colors hover:bg-white/10",
        ].includes(prop(item.arguments[1], "className")?.text)
      ));
      const unwrap = item => call(item) && ["li", "p"].includes(item.arguments[0]?.text)
        ? prop(item.arguments[1], "children") : item;
      const zalo = elements.find(item => {
        const anchor = unwrap(item);
        return call(anchor) && zaloAliases.has(prop(anchor.arguments[1], "href")?.getText(ast));
      });
      const facebook = elements.find(item => {
        const anchor = unwrap(item);
        return call(anchor) && (
          anchor.arguments[0]?.getText(ast) === "FacebookContactLink" ||
          prop(anchor.arguments[1], "href")?.getText(ast) === "site.social.facebook"
        );
      });
      if (zalo && facebook) {
        const fb = unwrap(facebook), za = unwrap(zalo);
        const inline = prop(fb.arguments[1], "variant")?.text === "inline" ||
          fb.arguments[0]?.getText(ast) !== "FacebookContactLink";
        const items = elements.filter(item => item !== facebook);
        if (inline) {
          items.splice(items.indexOf(zalo) + 1, 0, facebook);
          const replacement = `[${items.map(item => item.getText(ast)).join(",\n")}]`;
          edits.push([node.getStart(ast), node.end, replacement]);
          reordered++;
        } else {
          const factory = fb.expression.expression.getText(ast);
          const buttonClass = prop(za.arguments[1], "className")?.getText(ast) || '"inline-flex rounded-full"';
          const variant = prop(fb.arguments[1], "variant")?.getText(ast) || '"button"';
          const label = prop(fb.arguments[1], "label")?.getText(ast) ||
            (buttonClass.includes("h-14") && buttonClass.includes("shadow-primary/30") ? JSON.stringify("Trao đổi qua Facebook") :
              buttonClass.includes("text-[0.95rem]") ? JSON.stringify("Tư vấn thiết kế dự án") :
              file === "CapabilityProfile-DePoOAgZ.js" && buttonClass.includes("hover:bg-cyan-400")
                ? JSON.stringify("Trao đổi và thiết kế") :
                buttonClass === JSON.stringify("inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-3.5 font-bold text-white shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5")
                  ? JSON.stringify("Trao đổi thiết kế Web") : undefined);
          const facebookCode = `${factory}.jsx(FacebookContactLink,{variant:${variant},className:${buttonClass}${label ? `,label:${label}` : ""}})`;
          const pair = `${factory}.jsxs(ContactChannelPair,{${file === "SeoLayout-CuGaHTIj.js" ? "showFacebook," : ""}children:[${zalo.getText(ast)},${facebookCode}]})`;
          const replacement = `[${items.map(item => item === zalo ? pair : item.getText(ast)).join(",\n")}]`;
          edits.push([node.getStart(ast), node.end, replacement]);
          needsPair = true;
          pairs++;
        }
        return;
      }
      if (elements.length !== node.elements.length) {
        edits.push([node.getStart(ast), node.end, `[${elements.map(item => item.getText(ast)).join(",\n")}]`]);
        return;
      }
    }
    // Already normalized pairs must remain stable when the import script is rerun.
    if (call(node) && node.arguments[0]?.getText(ast) === "ContactChannelPair") {
      if (file === "SeoLayout-CuGaHTIj.js" && !node.arguments[1].properties.some(item => item.name?.getText(ast) === "showFacebook"))
        edits.push([node.arguments[1].getStart(ast) + 1, node.arguments[1].getStart(ast) + 1, "showFacebook,"]);
      if (ts.isPropertyAccessExpression(node.expression) && node.expression.name.text === "jsx")
        edits.push([node.expression.name.getStart(ast), node.expression.name.end, "jsxs"]);
      return;
    }
    ts.forEachChild(node, visit);
  }
  visit(ast);
  for (const [start, end, replacement] of edits.sort((a,b) => b[0]-a[0]))
    source = source.slice(0,start) + replacement + source.slice(end);
  if (needsPair && !source.includes('from "../components/ContactChannelPair"'))
    source = 'import ContactChannelPair from "../components/ContactChannelPair";\n' + source;
  if (source !== fs.readFileSync(filename, "utf8")) fs.writeFileSync(filename, source);
}
console.log(`Normalized ${pairs} button pairs and ${reordered} inline contact groups.`);
