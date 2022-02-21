import { styled } from '@storybook/theming';
import React from 'react'; 
import { Label, RadioButtonProps } from './RadioButton';

const StyledCheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
`

const StyledCheckbox = styled.input`
    margin-right: 20px;
    transform: scale(1.3);
`
export const Checkbox: React.FC<RadioButtonProps> = ({ 
    id,
    value = 'value',
    label = 'label',
    className,
    ...props}) => {

    return (
        <StyledCheckboxWrapper>
            <StyledCheckbox type="checkbox" id={id} className={className} value={value} {...props}/>
            <Label htmlFor={id}>{label}</Label>
        </StyledCheckboxWrapper>

    )
}

Checkbox.displayName = 'Checkbox';