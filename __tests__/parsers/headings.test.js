import { hast } from '../../index';

describe('headings parser', () => {
  it('should add a slug id to the hast', () => {
    const md = '# Sluggable Header';

    const tree = hast(md);

    expect(tree.children[0].tagName).toBe('h1');
    expect(tree.children[0].properties.id).toBe('sluggable-header');
  });
});
