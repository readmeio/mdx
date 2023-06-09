import { default as Tooltip } from "@tippyjs/react";
import PropTypes from "prop-types";
import React from "react";

import { default as GlossaryContext } from "../../contexts/GlossaryTerms";

// https://github.com/readmeio/api-explorer/blob/0dedafcf71102feedaa4145040d3f57d79d95752/packages/api-explorer/src/lib/replace-vars.js#L8
export function GlossaryItem({ term, terms }) {
  const foundTerm = terms.find(i => term.toLowerCase() === i.term.toLowerCase());

  if (!foundTerm) return <span>{term}</span>;

  return (
    <Tooltip
      content={
        <div className="GlossaryItem-tooltip-content">
          <strong className="GlossaryItem-term">{foundTerm.term}</strong> - {foundTerm.definition}
        </div>
      }
      offset={[-5, 5]}
      placement="bottom-start"
    >
      <span className="GlossaryItem-trigger">{term}</span>
    </Tooltip>
  );
}

GlossaryItem.propTypes = {
  term: PropTypes.string.isRequired,
  terms: PropTypes.arrayOf(
    PropTypes.shape({
      definition: PropTypes.string.isRequired,
      term: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default props => (
  <GlossaryContext.Consumer>{terms => terms && <GlossaryItem {...props} terms={terms} />}</GlossaryContext.Consumer>
);

export { default as GlossaryContext } from "../../contexts/GlossaryTerms";
