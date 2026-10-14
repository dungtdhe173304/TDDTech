import fs from "node:fs";
import ts from "typescript";
import { fileURLToPath } from "node:url";
const filename = fileURLToPath(new URL("../src/original/Careers-B2s3_nRn.js", import.meta.url));
if (fs.existsSync(filename)) {
let source = fs.readFileSync(filename, "utf8");
if (!source.includes('from "../components/Dark3DBanner"'))
  source = 'import Dark3DBanner from "../components/Dark3DBanner";\n' + source;
if (!source.includes("e.jsx(Dark3DBanner,"))
  source = source.replace(/e\.jsx\(b,\s*\{\}\)/, "e.jsx(Dark3DBanner, {})");
fs.writeFileSync(filename, source);
}

// All remaining instances of the archived wave canvas share this renderer.
const mainFile = fileURLToPath(new URL("../src/original/index-DAfw2Y79.js", import.meta.url));
let main = fs.readFileSync(mainFile, "utf8");
const ast = ts.createSourceFile(mainFile, main, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
let replacement;
function visit(node) {
  if (ts.isVariableDeclaration(node) && node.name.getText(ast) === "bo" && node.initializer)
    replacement = [node.initializer.getStart(ast), node.initializer.end];
  ts.forEachChild(node, visit);
}
visit(ast);
if (!replacement) throw new Error("Cannot find the shared banner canvas renderer");
main = main.slice(0, replacement[0]) + "Dark3DBanner" + main.slice(replacement[1]);
if (!main.includes('from "../components/Dark3DBanner"'))
  main = 'import Dark3DBanner from "../components/Dark3DBanner";\n' + main;
fs.writeFileSync(mainFile, main);
