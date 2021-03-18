import React from 'react';
import styled, { css } from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 16,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  }
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = STYLES[size];
  /* TODO: validate size */

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper size={styles.iconSize}>
        <Icon id={icon} stoke={1} size={styles.iconSize} />
      </IconWrapper>
      <TextInput size={size} width={width} height={styles.height} borderThickness={styles.borderThickness} fontSize={styles.fontSize} type='text' {...delegated}/>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper  = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  height: ${({ size }) => size}px;
  margin: auto 0;
`;

const TextInput = styled.input`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border: none;
  border-bottom: ${({ borderThickness }) => borderThickness}px solid ${COLORS.black};
  padding-left: ${({ height }) => height}px;
  color: inherit;
  font-family: Roboto;
  font-weight: 700;
  font-size: ${({ fontSize }) => fontSize}px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline-offset: 2px;
  }
`;

export default IconInput;
