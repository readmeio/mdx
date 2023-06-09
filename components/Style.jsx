import { node, bool } from 'prop-types';
import React from 'react';

const Style = ({ children, safeMode }) => {
  return safeMode ? (
    <pre>
      <code>{`<style>\n${children}\n</style>`}</code>
    </pre>
  ) : (
    <style>{children}</style>
  );
};

Style.propTypes = {
  children: node,
  safeMode: bool,
};

const CreateStyle =
  ({ safeMode }) =>
  // eslint-disable-next-line react/display-name
  props =>
    <Style {...props} safeMode={safeMode} />;

CreateStyle.sanitize = sanitize => {
  sanitize.tagNames.push('style');

  return sanitize;
};

export default CreateStyle;
