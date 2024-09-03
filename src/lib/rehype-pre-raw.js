import { visit } from 'unist-util-visit';

export const preProcess = () => (tree) => {
  visit(tree, (node) => {
    if (node?.type === 'element' && node?.tagName === 'pre') {
      const [codeEl] = node.children;

      if (codeEl.tagName !== 'code') return;
      node.properties.raw = codeEl.children?.[0].value;
      // console.log('🚨 preProcess ~', node);
    }
  });
};

export const postProcess = () => (tree) => {
  visit(tree, 'element', (node) => {
    if (node?.type === 'element' && node?.tagName === 'pre') {
      node.properties['raw'] = node.raw;
      // console.log('🚨 postProcess ~', node);
    }
  });
};
