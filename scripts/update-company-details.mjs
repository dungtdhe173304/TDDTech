import fs from "node:fs";
import path from "node:path";
import ts from "typescript";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const quote = JSON.stringify;
for (const file of fs.readdirSync(path.join(root, "src/original"))) {
  if (!file.endsWith(".js") || file.startsWith("vendor-")) continue;
  const filename = path.join(root, "src/original", file);
  let source = fs
    .readFileSync(filename, "utf8")
    .replace(/ · MST \$\{h\.taxCode\}/g, "")
    .replace(/^.*(?:Mã số thuế|MST):[^\n]*\$\{h\.taxCode\}[^\n]*\r?\n/gm, "")
    .replace(/, mã số thuế/gi, "")
    .replaceAll("Hà Nội · toàn quốc", "Hà Nội · phục vụ toàn quốc")
    .replaceAll(
      "Tổ 2, Khu phố 12, Phường Quy Nhơn Bắc, Tỉnh Gia Lai. Phục vụ toàn quốc.",
      "Hà Nội · phục vụ toàn quốc",
    );
  const ast = ts.createSourceFile(
    file,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.JS,
  );
  const edits = [];
  const label = (node) => (ts.isStringLiteral(node) ? node.text : "");
  function removeElement(node) {
    const comma = source.slice(node.end).match(/^\s*,/);
    edits.push([node.getStart(ast), node.end + (comma?.[0].length || 0), ""]);
  }
  function visit(node) {
    if (
      ts.isVariableDeclaration(node) &&
      node.name.getText(ast) === "jg" &&
      node.initializer
    ) {
      edits.push([
        node.initializer.getStart(ast),
        node.initializer.end,
        "`${Dt.legalName}, trụ sở tại ${Dt.address}. Phục vụ khách hàng toàn quốc.`",
      ]);
      return;
    }
    if (ts.isArrayLiteralExpression(node)) {
      for (const element of node.elements) {
        let remove =
          ts.isPropertyAccessExpression(element) &&
          element.name.text === "taxCode";
        remove ||=
          ts.isStringLiteral(element) &&
          /^(mã số thuế|ma so thue)$/i.test(element.text);
        remove ||=
          ts.isArrayLiteralExpression(element) &&
          element.elements.some((item) => /^mã số thuế/i.test(label(item)));
        if (
          ts.isCallExpression(element) &&
          element.arguments[1] &&
          ts.isObjectLiteralExpression(element.arguments[1])
        ) {
          const children = element.arguments[1].properties.find(
            (property) =>
              ts.isPropertyAssignment(property) &&
              property.name.getText(ast) === "children",
          );
          remove ||=
            !!children &&
            ts.isArrayLiteralExpression(children.initializer) &&
            /^mã số thuế/i.test(label(children.initializer.elements[0]));
        }
        if (ts.isObjectLiteralExpression(element)) {
          const question = element.properties.find(
            (property) =>
              ts.isPropertyAssignment(property) &&
              property.name.getText(ast) === "question",
          );
          remove ||=
            !!question &&
            /mã số (doanh nghiệp|thuế)/i.test(label(question.initializer));
        }
        if (remove) removeElement(element);
        else visit(element);
      }
      return;
    }
    ts.forEachChild(node, visit);
  }
  visit(ast);
  for (const [start, end, replacement] of edits.sort((a, b) => b[0] - a[0]))
    source = source.slice(0, start) + replacement + source.slice(end);
  fs.writeFileSync(filename, source);
}

function updateFallbacks(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) updateFallbacks(filename);
    else if (entry.name.endsWith(".html")) {
      const content = fs
        .readFileSync(filename, "utf8")
        .replace(/, mã số thuế/gi, "")
        .replace(/\s*·\s*MST\s+Chưa cập nhật/gi, "")
        .replaceAll("Liên hệ để biết thêm thông tin", "Hà Nội")
        .replaceAll(
          "Chưa cập nhật · phục vụ toàn quốc",
          "Hà Nội · phục vụ toàn quốc",
        );
      fs.writeFileSync(filename, content);
    }
  }
}
updateFallbacks(path.join(root, "src/content"));
console.log(
  "Removed tax information and updated the address to Hanoi across the website.",
);
