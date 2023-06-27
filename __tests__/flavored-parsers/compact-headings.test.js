import { mdast } from '../../index';

describe('Compact headings', () => {
  it.only('can parse compact headings', () => {
    const heading = '#Compact Heading';
    const tree = mdast(heading);

    expect(tree.children[0].type).toBe('heading');
    expect(tree.children[0].depth).toBe(1);
  });

  it('can parse headings that are not compact', () => {
    const heading = '# Non-compact Heading';
    const tree = mdast(heading);

    expect(tree.children[0].type).toBe('heading');
    expect(tree.children[0].depth).toBe(1);
  });
});
