import React, { ComponentPropsWithoutRef } from 'react';

import { styled } from '@storybook/theming';

import { color, typography } from '../common';

export interface RadioButtonProps extends ComponentPropsWithoutRef<'input'> {
  id?: string;
  value?: string;
  label: string;
  className?: string;
}

export const Label = styled.label<Pick<RadioButtonProps, 'disabled'>>`
  cursor: pointer;
  font-family: ${typography.type.primary};
  font-size: ${typography.size.px18}px;
  font-weight: ${typography.weight.regular};
  position: relative;
  display: flex;
  gap: 0.75rem;
  align-items: center;
  ${(props) =>
    props.disabled &&
    `
    cursor: not-allowed; 
    color: ${color.grayInactive}`}
`;

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Input = styled.input<RadioButtonProps>`
  margin: 0;
  cursor: pointer;
  transform: scale(1.3);
  ${(props) => props.disabled && 'cursor: not-allowed'}
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
      <Label htmlFor={id} disabled={props.disabled}>
        <Input label={label} type="radio" id={id} className={className} value={value} {...props} />
        {label}
      </Label>
    </RadioWrapper>
  );
};

RadioButton.displayName = 'RadioButton';
