import React from 'react';
import styled from 'styled-components';
import { Button, Wrapper } from '../atoms';
import { getThemeColor } from '../../styles/utils';
import { onlyClassNamePropTypes } from '../../utils/propTypes';
import getPageItemsByRole from '../../utils/getPageItemsByRole';
import { useUserDataContext } from '../../context/contexts';
import generateKey from '../../utils/uniqueKeyGenerator';

const OrderButtonGroup = ({ className, status, onClick }) => {
  const { role } = useUserDataContext();
  const buttons = getPageItemsByRole(role).orderButtonGroup;

  return (
    <Wrapper className={ className }>
      { buttons.map((button) => (
        <Button
          primary
          data-testid={ button.testId }
          disabled={ status !== button.enableWith }
          onClick={ onClick(button.stateToSet) }
          key={ generateKey() }
        >
          { button.text }
        </Button>
      )) }
    </Wrapper>
  );
};

export default styled(OrderButtonGroup)`
  color: ${getThemeColor('light')};
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

OrderButtonGroup.propTypes = onlyClassNamePropTypes;
