import React, { ComponentPropsWithoutRef } from 'react';

import { styled } from '@storybook/theming';

import { color, typography } from '../common';
import CheckSvg from '../images/Check';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  colorHex: string;
  checked: boolean;
  onClick?: () => void;
}
export interface ColorSwatchProps {
  colorHex: string;
  checked: boolean;
}

const checkIfHex = (hex: string): boolean => {
  if (hex.indexOf('#') !== 0) {
    return false;
  } else {
    hex = hex.slice(1);
  }
  if (hex.length !== 3 && hex.length !== 6) {
    console.error(`Hex length invalid, current length is ${hex.length}. Should be 3 og 6`);
    return false;
  }
  return true;
};

const hexToRGB = (hex: string): number[] => {
  if (checkIfHex(hex)) {
    hex = hex.slice(1);
  } else {
    throw new Error('Hex must start with #');
  }
  if (hex.length === 6) {
    hex.slice(1);
  } else if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  } else {
    throw new Error('Hex must be either 6 or 3 digits long');
  }
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return [r, g, b];
};

// based on contrast return either white or black
const checkContrast = (hex: string): string => {
  const rgb = hexToRGB(hex);
  return rgb[0] * 0.299 + rgb[1] * 0.587 + rgb[2] * 0.114 > 186 ? '#000000' : '#FFFFFF';
};

// returns darker or lighter
const changeTint = (hex: string) => {
  const rgb = hexToRGB(hex);
  return checkContrast(hex) === '#FFFFFF'
    ? `rgb(${rgb[0] + 0.5 * (255 - rgb[0])}, ${rgb[1] + 0.5 * (255 - rgb[1])}, ${rgb[2] + 0.5 * (255 - rgb[2])})`
    : `rgb(${rgb[0] * 0.75}, ${rgb[1] * 0.75}, ${rgb[2] * 0.75})`;
};

const StyledColorSwatchWrapper = styled.div<Pick<ColorSwatchProps, 'colorHex'>>`
  width: fit-content;
  min-width: 5rem;
  height: calc(2rem + 1.5rem - 0.25rem);
  margin: 0;

  border-radius: 3px;

  ${(props) =>
    props.colorHex &&
    `border: 1px solid ${checkContrast(props.colorHex) === '#000000' ? changeTint(props.colorHex) : props.colorHex};`}
`;

const StyledButton = styled.button<Pick<ColorSwatchProps, 'colorHex' | 'checked'>>`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 5rem;
  height: 2rem;

  border-radius: 2px;
  border-style: none;

  position: relative;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }

  .checkSvg {
    height: calc(100% - 1rem);
    width: inherit;
    path {
      ${(props) => props.colorHex && `fill: ${checkContrast(props.colorHex)}`}
    }
  }

  ${(props) => props.colorHex && `background-color: ${checkIfHex(props.colorHex) ? props.colorHex : color.error};`}
  ${(props) => props.checked && `box-shadow: 0px 0px 10px ${changeTint(props.colorHex)};`}
`;

const StyledText = styled.p<Pick<ColorSwatchProps, 'colorHex'>>`
  font-family: ${typography.type.primary};
  font-size: ${typography.size.px14}px;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  background-color: white;
  color: black;

  margin: -0.25rem 0px;

  border-radius: 2px;

  height: 1.5rem;
`;

export const ColorSwatch: React.FC<ButtonProps> = ({ colorHex = '#1dd19d', checked = false, onClick }, ...props) => {
  return (
    <StyledColorSwatchWrapper colorHex={colorHex}>
      <StyledButton
        aria-label={`color: ${colorHex}`}
        colorHex={colorHex}
        checked={checked}
        onClick={onClick}
        {...props}
      >
        {checked && checkIfHex(colorHex) && <CheckSvg aria-label="checked" className="checkSvg" />}
      </StyledButton>
      {checkIfHex(colorHex) && (
        <StyledText colorHex={colorHex}>{checkIfHex(colorHex) ? colorHex : 'error with hex, check console'}</StyledText>
      )}
    </StyledColorSwatchWrapper>
  );
};
