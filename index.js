import debug from "debug";
import * as MDX from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import { remark } from "remark";
import remarkMdx from "remark-mdx";
import { VFile } from "vfile";
import * as CustomParsers from "./processor/parse/index";

/* eslint-disable no-param-reassign */
//require("./styles/main.scss");

const unimplemented = debug("rdmdx:unimplemented");

export const processor = (opts = {}) => {
  return MDX.createProcessor(opts).use(CustomParsers);
};

export const react = (text, opts = {}) => {
  const code = compile(text, opts);
  const Tree = run(code, opts);

  return Tree;
};

export const compile = (text, opts = {}) => {
  try {
    const code = MDX.compileSync(text, {
      outputFormat: "function-body",
      development: false,
    });

    return code;
  } catch (e) {
    return new VFile();
  }
};

export const run = (code, opts = {}) => {
  try {
    const { default: Tree } = MDX.runSync(code, { ...runtime });
    return Tree;
  } catch (e) {
    return null;
  }
};

export const reactToc = (text, opts = {}) => {
  unimplemented("reactToc export");
};

export const mdx = (tree, opts = {}) => {
  return remark().use(remarkMdx).stringify(tree, opts);
};

export const html = (text, opts = {}) => {
  unimplemented("html export");
};

export const mdast = (text, opts = {}) => {
  try {
    return remark().use(remarkMdx).parse(text);
  } catch (e) {
    return { type: "root", children: [] };
  }
};

export const hast = (text, opts = {}) => {
  unimplemented("hast export");
};

export const esast = (text, opts = {}) => {
  unimplemented("esast export");
};

export const plain = (text, opts = {}) => {
  unimplemented("plain export");
};

export default react;
