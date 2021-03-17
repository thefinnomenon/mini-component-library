import React from 'react';
import styled, { css } from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const WIDTH  = 370;
const SIZES = {
  small: css`
    height: 8px;
  `,
  medium: css`
    height: 12px;
  `,
  large: css`
    height: 24px;
    padding: 4px;
  `,
};

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper size={size} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
      <Bar value={value}/>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ size }) => SIZES[size]};
  width: ${WIDTH}px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const Bar = styled.div`
  height: 100%;
  width: ${({ value }) => value}%;
  background-color: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
  border-top-right-radius: ${({ value }) => (value - 99) * 4}px;
  border-bottom-right-radius: ${({ value }) => (value - 99) * 4}px;
`;

export default ProgressBar;
