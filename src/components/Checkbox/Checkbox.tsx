import React from 'react';

import { styled } from '@storybook/theming';

import { Label, RadioButtonProps } from '../RadioButton/RadioButton';

interface CheckboxProps extends RadioButtonProps {
  checked?: boolean;
}
const StyledCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCheckbox = styled.input`
  margin-right: 20px;
  transform: scale(1.3);
`;
export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  value = 'value',
  label = 'label',
  className,
  checked,
  ...props
}) => {
  return (
    <StyledCheckboxWrapper>
      <Label htmlFor={id}>
        <StyledCheckbox type="checkbox" id={id} checked={checked} className={className} value={value} {...props} />
        {label}
      </Label>
    </StyledCheckboxWrapper>
  );
};

Checkbox.displayName = 'Checkbox';
