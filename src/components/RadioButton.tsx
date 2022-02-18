import React from 'react';
import { styled } from '@storybook/theming';
import { typography } from '../common';

export interface RadioButtonProps {
  id?: string;
  value: string;
  label: string;
  className?: string;
}

export const Label = styled.label`
  cursor: pointer;
  font-family: ${typography.type.primary};
  font-size: ${typography.size.px18}px;
  font-weight: ${typography.weight.regular};
  position: relative;
  display: flex;
  align-items: center;
`;

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Input = styled.input<RadioButtonProps>`
  margin: 0 10px 0 0;
  transform: scale(1.3);
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  value = 'value',
  label = 'label',
  className,
  ...props
}) => {
  return (
    <RadioWrapper>
      <Input label={label} type="radio" id={id} className={className} value={value} {...props} />
      <Label htmlFor={id}>{label}</Label>
    </RadioWrapper>
  );
};

RadioButton.displayName = 'RadioButton';
