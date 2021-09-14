import React from 'react';
import PropTypes from 'prop-types';

function CardTotal({ totalCart, dataTestId }) {
  return (
    <section className="total-value">
      <p data-testid={ dataTestId } className="total-value-p">
        {'Total: R$ '}
        { totalCart }
      </p>
    </section>
  );
}

CardTotal.propTypes = {
  totalCart: PropTypes.number.isRequired,
  dataTestId: PropTypes.string,
};

CardTotal.defaultProps = {
  dataTestId: '',
};

export default CardTotal;
