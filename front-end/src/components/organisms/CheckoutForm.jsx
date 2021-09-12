import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Button, Input, Wrapper } from '../atoms';
import { productCardPropTypes } from '../../utils/propTypes';
import CheckoutSelect from '../molecules/CheckoutSelect';
import useAuthFormInfo from '../../hooks/useAuthFormInfo';
import {
  useCustomRoleActionContext,
  useCustomRoleDataContext,
  useUserDataContext,
} from '../../context/contexts';
import requestApi from '../../services/api';
import getTestIds from '../../utils/getTestIds';

const InputAddress = styled(Input)``;

const InputNumber = styled(Input)``;

const FieldsWrapper = styled(Wrapper)``;

const CheckoutForm = ({ className }) => {
  const fields = { fields: ['sellerId', 'deliveryAddress', 'deliveryNumber'] };
  const { cart, total: totalPrice } = useCustomRoleDataContext();
  const { clearCart } = useCustomRoleActionContext();
  const { token, role } = useUserDataContext();
  const { authInfo, handleFieldsChange } = useAuthFormInfo(fields, true);
  const { sellerId, deliveryAddress, deliveryNumber } = authInfo;
  const history = useHistory();
  const testIds = getTestIds(role, 'checkout');

  const submitOrder = async () => {
    const data = {
      sellerId: Number(sellerId),
      deliveryAddress,
      deliveryNumber,
      totalPrice,
      cart: Object.values(cart),
    };
    const requestData = { method: 'post', data, endpoint: 'customer/checkout', token };
    const { data: { order: { id } } } = await requestApi(requestData);
    clearCart();
    history.push(`/customer/orders/${id}`);
  };

  return (
    <Wrapper className={ className }>
      <FieldsWrapper>
        <CheckoutSelect
          value={ sellerId }
          onChange={ handleFieldsChange }
        />
        <InputAddress
          name="deliveryAddress"
          value={ deliveryAddress }
          onChange={ handleFieldsChange }
          data-testid={ testIds.formAddress }
        />
        <InputNumber
          name="deliveryNumber"
          value={ deliveryNumber }
          onChange={ handleFieldsChange }
          data-testid={ testIds.formAddressNumber }
        />
      </FieldsWrapper>
      <Button onClick={ submitOrder } data-testid={ testIds.formSubmitOrder } primary>
        Finalizar pedido
      </Button>
    </Wrapper>
  );
};

export default styled(CheckoutForm)`
  ${Button} {
    text-transform: uppercase;
  }
`;

CheckoutForm.propTypes = productCardPropTypes;
