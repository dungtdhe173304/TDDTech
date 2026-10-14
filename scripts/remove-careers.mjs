import fs from "node:fs";
import path from "node:path";
import ts from "typescript";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const folder = path.join(root, "src/original");
const prop = (node, name) => node && ts.isObjectLiteralExpression(node)
  ? node.properties.find(p => ts.isPropertyAssignment(p) && p.name.getText() === name)?.initializer : undefined;
for (const file of ["index-DAfw2Y79.js", "SearchPage-CSDOjFZF.js", "chatbotKnowledge-CK2UAvVi.js"]) {
  const filename = path.join(folder, file);
  let source = fs.readFileSync(filename, "utf8");
  if (file.startsWith("chatbotKnowledge"))
    source = source
      .replace(/ · Tuyển dụng: \$\{siteOrigin\}\/tuyen-dung/g, "")
      .replace(/TUYỂN DỤNG \([^\n]*\n[\s\S]*?(?=NGƯỜI SÁNG LẬP)/g, "");
  const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
  const edits = [];
  const removedItem = node => {
    if (ts.isStringLiteral(node)) return node.text === "/tuyen-dung";
    const props = ts.isCallExpression(node) ? node.arguments[1] : node;
    if (["href", "url", "path"].some(key => prop(props, key)?.text === "/tuyen-dung")) return true;
    return ts.isObjectLiteralExpression(node) && prop(node, "answer")?.getText(ast).includes("/tuyen-dung");
  };
  function visit(node) {
    if (ts.isArrayLiteralExpression(node)) {
      const elements = node.elements.filter(item => !removedItem(item));
      if (elements.length !== node.elements.length) {
        edits.push([node.getStart(ast), node.end, `[${elements.map(item => item.getText(ast)).join(",\n")}]`]);
        return;
      }
    }
    if (ts.isObjectLiteralExpression(node) && node.properties.some(p => p.name?.getText(ast) === "Careers")) {
      edits.push([node.getStart(ast), node.end, `{${node.properties.filter(p => p.name?.getText(ast) !== "Careers").map(p => p.getText(ast)).join(",\n")}}`]);
      return;
    }
    if (ts.isConditionalExpression(node) && node.whenTrue.getText(ast) === "At.Careers") {
      edits.push([node.getStart(ast), node.end, node.whenFalse.getText(ast)]);
      return;
    }
    if (ts.isVariableDeclarationList(node)) {
      const target = node.declarations.find(d => d.name.getText(ast) === "J0");
      if (target) {
        const next = node.declarations[node.declarations.indexOf(target) + 1];
        if (!next) throw new Error("Unexpected position of Careers lazy import");
        edits.push([target.getStart(ast), next.getStart(ast), ""]);
      }
    }
    if (ts.isStringLiteral(node) && node.text === "assets/Careers-B2s3_nRn.js")
      edits.push([node.getStart(ast), node.end, '""']);
    ts.forEachChild(node, visit);
  }
  visit(ast);
  for (const [start, end, replacement] of edits.sort((a,b) => b[0]-a[0]))
    source = source.slice(0,start) + replacement + source.slice(end);
  fs.writeFileSync(filename, source);
}
for (const file of ["src/original/Careers-B2s3_nRn.js", "src/content/tuyen-dung.html"])
  fs.rmSync(path.join(root, file), { force: true });
console.log("Removed Careers page, route, navigation, search entry and chatbot job listings.");
