import React from 'react';
import PropTypes from 'prop-types';

function DropDownList({ name, options, dataTestId, onChange, classStyle, labelText }) {
  return (
    <label className={ classStyle } htmlFor={ name }>
      { labelText }
      <select
        name={ name }
        id={ name }
        data-testid={ dataTestId }
        onChange={ onChange }
      >
        <option hidden value="">
          Escolha uma opção
        </option>
        {options.map((option, key) => (
          <option key={ key } value={ option }>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

DropDownList.propTypes = {
  name: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  classStyle: PropTypes.string,
  labelText: PropTypes.string,
};

DropDownList.defaultProps = {
  labelText: '',
  classStyle: '',
};

export default DropDownList;
