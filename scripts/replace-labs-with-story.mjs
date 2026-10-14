import fs from "node:fs";
import ts from "typescript";
import { fileURLToPath } from "node:url";
const file = fileURLToPath(new URL("../src/original/CapabilityProfile-DePoOAgZ.js", import.meta.url));
let source = fs.readFileSync(file, "utf8");
const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
const edits = [];
function visit(node) {
  if (ts.isCallExpression(node) && node.arguments[0]?.text === "section" && node.getText(ast).includes("/lab/lab-hero.webp")) {
    edits.push([node.getStart(ast), node.end, "e.jsx(CompanyStory, {})"]);
    return;
  }
  if (ts.isVariableDeclarationList(node)) {
    const start = node.declarations.find(d => d.name.getText(ast) === "C" && d.initializer?.getText(ast).includes("#lab"));
    const end = node.declarations.find(d => d.name.getText(ast) === "L");
    if (start && end) edits.push([start.getStart(ast), end.getStart(ast), ""]);
  }
  ts.forEachChild(node, visit);
}
visit(ast);
for (const [start, end, replacement] of edits.sort((a,b) => b[0]-a[0])) source = source.slice(0,start)+replacement+source.slice(end);
if (!source.includes('from "../components/CompanyStory"')) source = 'import CompanyStory from "../components/CompanyStory";\n'+source;
fs.writeFileSync(file, source);

const chatbotFile = fileURLToPath(new URL("../src/original/chatbotKnowledge-CK2UAvVi.js", import.meta.url));
let chatbot = fs.readFileSync(chatbotFile, "utf8")
  .replace(/TDDTech LAB — DEMO[\s\S]*?(?=CÁC TRANG TRÊN WEBSITE)/g, "")
  .replace(/ Với trải nghiệm 3D, có thể xem \[TDDTech Lab 01\]\(\$\{l.lab1\}\) và \[Lab 02\]\(\$\{l.lab2\}\)\./g, "");
const tree = ts.createSourceFile(chatbotFile, chatbot, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
const removals = [];
function clean(node) {
  if (ts.isArrayLiteralExpression(node)) {
    const items = node.elements.filter(item => !(ts.isObjectLiteralExpression(item) && item.properties.some(p => ts.isPropertyAssignment(p) && p.name.getText(tree) === "id" && p.initializer.text === "lab")));
    if (items.length !== node.elements.length) {
      removals.push([node.getStart(tree), node.end, `[${items.map(item=>item.getText(tree)).join(",\n")}]`]);
      return;
    }
  }
  if (ts.isVariableDeclarationList(node)) {
    const index = node.declarations.findIndex(d => d.name.getText(tree) === "l" && d.initializer?.getText(tree).includes("lab1:"));
    if (index >= 0 && node.declarations[index + 1]) removals.push([node.declarations[index].getStart(tree),node.declarations[index + 1].getStart(tree),""]);
  }
  ts.forEachChild(node, clean);
}
clean(tree);
for (const [start,end,replacement] of removals.sort((a,b)=>b[0]-a[0])) chatbot=chatbot.slice(0,start)+replacement+chatbot.slice(end);
fs.writeFileSync(chatbotFile,chatbot);
