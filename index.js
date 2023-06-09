import './styles/main.scss';

import debug from "debug";
import * as MDX from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime.js";
import { remark } from "remark";
import remarkMdx from "remark-mdx";
import { VFile } from "vfile";
import * as BaseUrlContext from './contexts/BaseUrl.js';
import * as CustomParsers from "./processor/parse/index.js";

import * as Variable from '@readme/variable';
import { GlossaryContext } from './components/GlossaryItem/index.jsx';
import { getHref } from './components/Anchor.jsx';
import { icons as calloutIcons } from './processor/parse/callouts.js';

const unimplemented = debug("rdmdx:unimplemented");

export const utils = {
  get options() {
    return { ...options };
  },

  BaseUrlContext,
  getHref,
  GlossaryContext,
  VariablesContext: Variable.VariablesContext,
  calloutIcons,
};

export const processor = (opts = {}) => {
  return MDX.createProcessor(opts).use(CustomParsers);
};

export const reactProcessor = (opts = {}) => {
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

export const reactTOC = (text, opts = {}) => {
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
