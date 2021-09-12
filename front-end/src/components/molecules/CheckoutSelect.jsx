import React, { useEffect } from 'react';
import styled from 'styled-components';
import useDataSellers from '../../hooks/useDataSellers';
import generateKey from '../../utils/uniqueKeyGenerator';
import { productCardPropTypes } from '../../utils/propTypes';
import { Option, Select } from '../atoms';
import { useUserDataContext } from '../../context/contexts';
import getTestIds from '../../utils/getTestIds';

const CheckoutSelect = ({ className, onChange, value }) => {
  const sellers = useDataSellers();
  const { role } = useUserDataContext();
  const testIds = getTestIds(role, 'checkout');

  // Set a safe fallback value for unchanging event
  useEffect(() => {
    const isValueEmptyAndSellersLoaded = value === '' && sellers.length > 0;
    if (isValueEmptyAndSellersLoaded) {
      // Mock event and set first seller as default value
      onChange({ target: { name: 'sellerId', value: sellers[0].id } });
    }
  }, [sellers]);

  return (
    <Select
      className={ className }
      name="sellerId"
      value={ value }
      onChange={ onChange }
      data-testid={ testIds.formSelectSeller }
    >
      { sellers.map((seller) => (
        <Option value={ seller.id } name="sellerId" key={ generateKey() }>
          { seller.name }
        </Option>
      )) }
    </Select>
  );
};

export default styled(CheckoutSelect)``;

CheckoutSelect.propTypes = productCardPropTypes;
