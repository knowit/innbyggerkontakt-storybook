import React, { useState } from 'react';

import { styled } from '@storybook/theming';

import { ColorSwatch } from '../ColorSwatch/ColorSwatch';

export interface ColorPickerProps {
  colors: Array<string>;
}

const StyledColorPicker = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1rem;
`;
export const ColorPicker: React.FC<ColorPickerProps> = ({
  colors = [
    '#B03A2E',
    '#76448A',
    '#1F618D',
    '#1E8449',
    '#B7950B',
    '#E6B0AA',
    '#D7BDE2',
    '#A9CCE3',
    '#A9DFBF',
    '#F9E79F',
  ],
}) => {
  const [pickedColor, setPickedColor] = useState<string>('');

  return (
    <StyledColorPicker>
      {colors.map((hex, index) => (
        <ColorSwatch colorHex={hex} key={index} checked={hex === pickedColor} onClick={() => setPickedColor(hex)} />
      ))}
    </StyledColorPicker>
  );
};
