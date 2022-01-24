import React from 'react';
import { styled } from '@storybook/theming';
import { typography } from '../../common';

export interface RadioButtonProps {
  id?: string;
  value?: string;
  label?: string;
  className?: string;
}

const Label = styled.label`
  cursor: pointer;
  font-family: ${typography.type.primary};
  font-size: ${typography.size.px18};
  font-weight: ${typography.weight.bold};
  position: relative;
  display: flex;
  align-items: center;
`;

const RadioWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const Input = styled.input<RadioButtonProps>`
  margin-right: 10px;
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
      <Input type="radio" id={id} className={className} value={value} {...props} />
      <Label>{label}</Label>
    </RadioWrapper>
  );
};

RadioButton.displayName = 'RadioButton';
