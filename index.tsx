import React from 'react';
// @ts-ignore
import debug from 'debug';
import remark from 'remark';
// @ts-ignore
import remarkMdx, { Root } from 'remark-mdx';
import remarkParse from 'remark-parse';
import rehypeSlug from 'rehype-slug';
import remarkRehype from 'remark-rehype';

import ErrorBoundary from './lib/ErrorBoundary';

require('./styles/main.scss');

// @ts-ignore
import MDX from '@mdx-js/mdx';
// @ts-ignore
import * as MDXRuntime from '@mdx-js/runtime';

import unified from 'unified';
// @ts-ignore
import Variable from '@readme/variable';
import * as Components from './components';
import { getHref } from './components/Anchor';
import BaseUrlContext from './contexts/BaseUrl';
import { options } from './options';
const calloutTransformer = require('./processor/transform/callouts').default;

const unimplemented = debug('mdx:unimplemented');

const { GlossaryItem } = Components;

export { Components };

export const utils = {
  get options() {
    return { ...options };
  },

  BaseUrlContext,
  getHref,
  GlossaryContext: GlossaryItem.GlossaryContext,
  VariablesContext: Variable.VariablesContext,
  calloutIcons: {},
};

export const reactProcessor = (opts = {}) => {
  return MDX.createCompiler(opts);
};

export const processor = (opts = {}) => {
  return unified().use(remarkParse).use(calloutTransformer);
};

export const react = (text: string, opts = {}) => {
  const Mdx = (
    <MDXRuntime components={{ 'rdme-callout': Components.Callout }} remarkPlugins={[calloutTransformer]}>
      {text}
    </MDXRuntime>
  );
  return <ErrorBoundary key={text}>{Mdx}</ErrorBoundary>;
};

export const reactTOC = (text: string, opts = {}) => {
  unimplemented('reactTOC export');
};

export const mdx = (tree: Root, opts = {}) => {
  return remark().use(remarkMdx).stringify(tree, opts);
};

export const html = (text: string, opts = {}) => {
  unimplemented('html export');
};

export const mdast = (text: string, opts = {}) => {
  const proc = processor(opts);

  try {
    const tree = proc.parse(text);
    return proc.runSync(tree);
  } catch (e) {
    return { type: 'root', children: [] };
  }
};

export const hast = (text: string, opts = {}) => {
  const proc = processor(opts).use(remarkRehype).use(rehypeSlug);

  try {
    const tree = proc.parse(text);
    return proc.runSync(tree);
  } catch (e) {
    return { type: 'root', children: [] };
  }
};

export const esast = (text: string, opts = {}) => {
  unimplemented('esast export');
};

export const plain = (text: string, opts = {}) => {
  unimplemented('plain export');
};

const ReadMeMarkdown = (text: string, opts = {}) => react(text, opts);

export default ReadMeMarkdown;
