import React from 'react';
import PropTypes from 'prop-types';

const LabelText = ({ classStyle, textLabel, dataTestId, textSpan }) => (
  <p
    className={ classStyle }

  >
    {textLabel}
    <span data-testid={ dataTestId }>
      {textSpan}
    </span>
  </p>
);

LabelText.propTypes = {
  classStyle: PropTypes.string,
  textLabel: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  textSpan: PropTypes.string.isRequired,
};

LabelText.defaultProps = {
  classStyle: '',
};

export default LabelText;
