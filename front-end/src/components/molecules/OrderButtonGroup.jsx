import React from 'react';
import styled from 'styled-components';
import { Button, Wrapper } from '../atoms';
import { getThemeColor } from '../../styles/utils';
import { onlyClassNamePropTypes } from '../../utils/propTypes';

const OrderButtonGroup = ({ className }) => (
  <Wrapper className={ className }>
    <Button primary>
      Marcar como entregue
    </Button>
  </Wrapper>
);

export default styled(OrderButtonGroup)`
  color: ${getThemeColor('light')};
  display: grid;
`;

OrderButtonGroup.propTypes = onlyClassNamePropTypes;
