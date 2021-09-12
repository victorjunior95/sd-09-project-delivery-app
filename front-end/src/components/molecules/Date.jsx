import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Label } from '../atoms';
import { getThemeColor } from '../../styles/utils';
import { productNamePropTypes } from '../../utils/propTypes';

const Date = ({ className, date, testid }) => {
  const displayedDate = moment(date).locale('pt-br').format('DD/MM/YYYY');

  return (
    <Label className={ className } data-testid={ testid }>
      { displayedDate }
    </Label>
  );
};

export default styled(Date)`
  color: ${getThemeColor('dark')};
`;

Date.propTypes = productNamePropTypes;
