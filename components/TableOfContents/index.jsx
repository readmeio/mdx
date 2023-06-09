import PropTypes from "prop-types";
import React from "react";

function TableOfContents({ children }) {
  return (
    <nav>
      <ul className="toc-list">
        <li>
          <a className="tocHeader" href="#">
            <i className="icon icon-text-align-left"></i>
            Table of Contents
          </a>
        </li>
        <li className="toc-children">{children}</li>
      </ul>
    </nav>
  );
}

TableOfContents.propTypes = {
  children: PropTypes.element,
};

export default TableOfContents;
