import React, { useEffect, useState } from 'react';

import { styled } from '@storybook/theming';

import { color, typography } from '../common';
import CheckSvg from '../images/Check';

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
const invertColor = (hex: string): string => {
  if (checkIfHex(hex)) {
    hex = hex.slice(1);

    if (hex.length === 6) {
      hex.slice(1);
    } else if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#FFFFFF';
  } else {
    return color.brightGreen;
  }
};

const StyledColorSwatcher = styled.div<Pick<ColorSwatchProps, 'colorHex' | 'checked'>>`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 5rem;
  height: 2rem;
  margin: 0;
  border-radius: 2px;
  &:hover {
    cursor: pointer;
  }

  .checkSvg {
    height: calc(100% - 1rem);
    width: inherit;
    path {
      ${(props) => props.colorHex && `fill: ${invertColor(props.colorHex)}`}
    }
  }

  ${(props) => props.colorHex && `background-color: ${checkIfHex(props.colorHex) ? props.colorHex : color.error};`}
  ${(props) => props.checked && `box-shadow: 0px 0px 10px ${props.colorHex}`}
`;

const StyledText = styled.span<Pick<ColorSwatchProps, 'colorHex'>>`
  font-family: ${typography.type.primary};
  font-size: ${typography.size.px14}px;

  ${(props) => props.colorHex && `background-color: transparent; color: ${invertColor(props.colorHex)}`}
`;

export const ColorSwatch: React.FC<ColorSwatchProps> = ({ colorHex = '#1dd19d', checked = false }) => {
  const [internalChecked, setChecked] = useState<boolean>(checked);

  return (
    <StyledColorSwatcher
      colorHex={colorHex}
      checked={internalChecked}
      onClick={() => setChecked((internalChecked) => !internalChecked)}
    >
      {internalChecked && checkIfHex(colorHex) ? (
        <CheckSvg className="checkSvg" />
      ) : (
        <StyledText colorHex={colorHex}>{checkIfHex(colorHex) ? colorHex : 'error with hex, check console'}</StyledText>
      )}
    </StyledColorSwatcher>
  );
};
