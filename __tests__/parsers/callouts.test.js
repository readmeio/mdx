import { mdast } from "../../index";

describe("Parse RDMD Callouts", () => {
  it.only("renders an info callout", () => {
    const text = `
> ℹ️ Info Callout
>
> Lorem ipsum dolor  sit amet consectetur adipisicing elit.`;

    expect(mdast(text)).toMatchSnapshot();
  });
});
