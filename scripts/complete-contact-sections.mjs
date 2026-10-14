import fs from "node:fs";
import path from "node:path";
import ts from "typescript";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const quote = JSON.stringify;
const isCall = (node) =>
  ts.isCallExpression(node) &&
  node.arguments[0] &&
  ts.isStringLiteral(node.arguments[0]) &&
  node.arguments[1] &&
  ts.isObjectLiteralExpression(node.arguments[1]);
const property = (object, name) =>
  object.properties.find(
    (item) => ts.isPropertyAssignment(item) && item.name.getText() === name,
  );
const text = (node) => (node && ts.isStringLiteral(node) ? node.text : "");

for (const file of fs.readdirSync(path.join(root, "src/original"))) {
  if (!file.endsWith(".js") || file.startsWith("vendor-")) continue;
  const filename = path.join(root, "src/original", file);
  let source = fs.readFileSync(filename, "utf8");
  if (file === "chatbotKnowledge-CK2UAvVi.js") {
    source = source.replace(
      /(- (?:\*\*)?Email:(?:\*\*)? \$\{site.emailLabel\})(?!\n- Facebook:)/g,
      "$1\n- Facebook: [Thiều Đức Dũng](${site.social.facebook})",
    );
  }
  const ast = ts.createSourceFile(
    file,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.JS,
  );
  const edits = [];
  const aliases = new Set([
    "site.zaloHref",
    "site.phoneHref",
    "site.emailHref",
  ]);
  let needsLink = false,
    needsIcon = false;
  function visit(node) {
    if (
      file === "index-DAfw2Y79.js" &&
      ts.isVariableDeclaration(node) &&
      node.name.getText(ast) === "$u" &&
      node.initializer && ts.isArrayLiteralExpression(node.initializer)
    ) {
      const members = [
        { name: "Đội ngũ XimiTech", role: "Giám đốc điều hành XimiTech", image: "/media/ximitech/company-profile/v1/tranthanhdo.webp" },
        { name: "Đội ngũ TDDTech", role: "Tech Team & Founder TDDTech", image: "/media/ximitech/company-profile/v1/myavatar.png", short: "Định hướng sản phẩm, chịu trách nhiệm chất lượng bàn giao." },
      ];
      for (const [index, member] of node.initializer.elements.entries()) {
        if (!ts.isObjectLiteralExpression(member)) continue;
        for (const [key, value] of Object.entries(members[index] || {})) {
          const field = property(member, key);
          if (field) edits.push([field.initializer.getStart(ast), field.initializer.end, quote(value)]);
        }
      }
    }
    if (
      ts.isVariableDeclaration(node) &&
      node.initializer &&
      aliases.has(node.initializer.getText(ast))
    )
      aliases.add(node.name.getText(ast));
    if (
      file === "index-DAfw2Y79.js" &&
      ts.isVariableDeclaration(node) &&
      node.name.getText(ast) === "zu" &&
      node.initializer
    ) {
      edits.push([
        node.initializer.getStart(ast),
        node.initializer.end,
        '[{icon:Yc,label:"Pháp nhân",value:Dt.legalName},{icon:va,label:"Liên hệ",value:site.phoneLabel,href:site.phoneHref},{icon:vr,label:"Trụ sở · phục vụ",value:"Hà Nội · phục vụ toàn quốc"}]',
      ]);
      return;
    }
    if (
      file === "index-DAfw2Y79.js" &&
      ts.isPropertyAssignment(node) &&
      node.name.getText(ast) === "children" &&
      ts.isPropertyAccessExpression(node.initializer) &&
      node.initializer.getText(ast) === "e.value" &&
      ts.isCallExpression(node.parent.parent) &&
      text(node.parent.parent.arguments[0]) === "dd"
    ) {
      for (let parent = node.parent; parent; parent = parent.parent) {
        if (
          ts.isCallExpression(parent) &&
          ts.isPropertyAccessExpression(parent.expression) &&
          parent.expression.getText(ast) === "zu.map"
        ) {
          edits.push([
            node.initializer.getStart(ast),
            node.initializer.end,
            'e.href ? t.jsx("a",{href:e.href,className:"hover:text-primary hover:underline",children:e.value}) : e.value',
          ]);
          break;
        }
      }
    }
    if (ts.isArrayLiteralExpression(node) && node.elements.length) {
      const rows = node.elements.filter(ts.isArrayLiteralExpression);
      const rowLabels = rows.map((row) => text(row.elements[1]));
      if (
        file === "CapabilityProfile-DePoOAgZ.js" &&
        ["Zalo", "Hotline", "Email"].every((label) => rowLabels.includes(label))
      ) {
        needsIcon = true;
        if (!rowLabels.includes("Facebook")) {
          const email = rows.find((row) => text(row.elements[1]) === "Email");
          edits.push([
            email.end,
            email.end,
            ',[FacebookIcon,"Facebook","Thiều Đức Dũng",site.social.facebook]',
          ]);
        }
        const call = node.parent.parent;
        const callback = ts.isCallExpression(call)
          ? call.arguments[0]
          : undefined;
        if (
          callback &&
          ts.isArrowFunction(callback) &&
          ts.isArrayBindingPattern(callback.parameters[0].name)
        ) {
          const binding = callback.parameters[0].name;
          const valueName = binding.elements[2].getText(ast);
          if (binding.elements.length === 3)
            edits.push([
              binding.getStart(ast),
              binding.end,
              `[${binding.elements.map((part) => part.getText(ast)).join(",")},contactHref]`,
            ]);
          function linkValue(child) {
            if (
              ts.isPropertyAssignment(child) &&
              child.name.getText(ast) === "children" &&
              ts.isIdentifier(child.initializer) &&
              child.initializer.text === valueName &&
              isCall(child.parent.parent) &&
              text(child.parent.parent.arguments[0]) === "dd"
            ) {
              const factory =
                child.parent.parent.expression.expression.getText(ast);
              edits.push([
                child.initializer.getStart(ast),
                child.initializer.end,
                `contactHref ? ${factory}.jsx("a",{href:contactHref,target:"_blank",rel:"noopener noreferrer",className:"hover:text-primary hover:underline",children:${valueName}}) : ${valueName}`,
              ]);
            }
            ts.forEachChild(child, linkValue);
          }
          linkValue(callback.body);
        }
      }
      const contacts = [],
        paragraphs = [];
      for (const item of node.elements) {
        let anchor = item;
        if (isCall(item) && text(item.arguments[0]) === "li")
          anchor = property(item.arguments[1], "children")?.initializer;
        if (anchor && isCall(anchor) && text(anchor.arguments[0]) === "a") {
          const href = property(anchor.arguments[1], "href")?.initializer;
          if (href && aliases.has(href.getText(ast))) contacts.push(anchor);
        }
        if (isCall(item) && text(item.arguments[0]) === "p") {
          const children = property(item.arguments[1], "children")?.initializer;
          if (children && ts.isArrayLiteralExpression(children))
            paragraphs.push(text(children.elements[0]));
        }
      }
      const props =
        ts.isPropertyAssignment(node.parent) &&
        ts.isObjectLiteralExpression(node.parent.parent)
          ? node.parent.parent
          : null;
      const owner = props?.parent;
      const className = props ? property(props, "className") : null;
      const classText = className ? text(className.initializer) : "";
      const faqContact = classText === "mt-10 text-center md:mt-14";
      const singleActionGroup =
        contacts.length === 1 &&
        owner &&
        isCall(owner) &&
        ["div", "nav"].includes(text(owner.arguments[0])) &&
        (/\bflex\b/.test(classText) || faqContact);
      const policyContact =
        paragraphs.includes("Email: ") &&
        paragraphs.includes("Zalo / Hotline: ");
      if (
        (contacts.length >= 2 || singleActionGroup || policyContact) &&
        !node.elements.some((item) =>
          item.getText(ast).includes("FacebookContactLink"),
        )
      ) {
        const factory =
          contacts[0]?.expression.expression.getText(ast) ||
          node.elements.find(isCall)?.expression.expression.getText(ast);
        if (factory) {
          const list = node.elements.every(
            (item) => isCall(item) && text(item.arguments[0]) === "li",
          );
          const inline =
            (owner && isCall(owner) && text(owner.arguments[0]) === "nav") ||
            list ||
            policyContact ||
            contacts.some(
              (anchor) =>
                property(anchor.arguments[1], "href")?.initializer.getText(
                  ast,
                ) === "site.emailHref",
            );
          let element = `${factory}.jsx(FacebookContactLink,{variant:${quote(faqContact ? "faq" : inline ? "inline" : "button")}})`;
          if (faqContact) {
            const anchorClass = property(contacts[0].arguments[1], "className");
            if (anchorClass && !text(anchorClass.initializer).includes("mx-1"))
              edits.push([
                anchorClass.initializer.getStart(ast),
                anchorClass.initializer.end,
                quote(`mx-1 mt-3 h-12 w-60 max-w-full justify-center ${text(anchorClass.initializer)}`),
              ]);
          }
          if (list || policyContact)
            element = `${factory}.jsx(${quote(list ? "li" : "p")},{children:${element}})`;
          const zaloItem = list || /\bflex-col\b/.test(classText)
            ? node.elements.find((item) => {
                const anchor = list
                  ? property(item.arguments[1], "children")?.initializer
                  : item;
                return (
                  isCall(anchor) &&
                  property(anchor.arguments[1], "href")?.initializer.getText(ast) ===
                    "site.zaloHref"
                );
              })
            : undefined;
          const insertionItem = zaloItem || node.elements[node.elements.length - 1];
          edits.push([insertionItem.end, insertionItem.end, `,${element}`]);
          needsLink = true;
          if (
            className &&
            /\bflex\b/.test(classText) &&
            !/\bflex-wrap\b/.test(classText)
          )
            edits.push([
              className.initializer.getStart(ast),
              className.initializer.end,
              quote(`${classText} flex-wrap`),
            ]);
        }
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(ast);
  for (const [start, end, replacement] of edits.sort((a, b) => b[0] - a[0]))
    source = source.slice(0, start) + replacement + source.slice(end);
  if (file === "index-DAfw2Y79.js")
    source = source.replaceAll(
      "md:mb-16 md:grid-cols-2",
      "md:mb-16 md:grid-cols-3",
    );
  if (needsLink && !source.includes('from "../components/FacebookContactLink"'))
    source =
      'import FacebookContactLink from "../components/FacebookContactLink";\n' +
      source;
  if (needsIcon && !source.includes('from "../components/FacebookIcon"'))
    source =
      'import FacebookIcon from "../components/FacebookIcon";\n' + source;
  fs.writeFileSync(filename, source);
}
console.log(
  "Added Facebook to contact groups and a hotline between company and location details.",
);
await import("./normalize-contact-buttons.mjs");
await import("./fix-route-scroll.mjs");
await import("./apply-dark-banner.mjs");
await import("./remove-careers.mjs");
await import("./replace-labs-with-story.mjs");
