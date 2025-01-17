import { Root } from 'remark-mdx';
import { VFile } from 'vfile';
export declare const react: (text: string, opts?: {}) => any;
export declare const compile: (text: string, opts?: {}) => VFile;
export declare const run: (code: VFile | string, opts?: {}) => any;
export declare const reactToc: (text: string, opts?: {}) => void;
export declare const mdx: (tree: Root, opts?: {}) => string;
export declare const html: (text: string, opts?: {}) => void;
export declare const mdast: (text: string, opts?: {}) => import("mdast").Root | {
    type: string;
    children: never[];
};
export declare const hast: (text: string, opts?: {}) => void;
export declare const esast: (text: string, opts?: {}) => void;
export declare const plain: (text: string, opts?: {}) => void;
export default react;
