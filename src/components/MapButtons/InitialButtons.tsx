import * as React from 'react';
import { styled } from '@storybook/theming';
import { color, typography } from '../../common';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  text?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  color?: 'primary' | 'secondary' | 'tertiary' | 'mint';
}
interface StylingProps {
  disabled?: boolean;
  color: string;
}

const StyledButton = styled.button<Pick<StylingProps, 'disabled' | 'color'>>`
  font-family: ${typography.type.primary};
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.px18}px;

  cursor: pointer;
  border-radius: 90px;
  border-style: solid;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  span,
  svg {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    white-space: nowrap;
  }
  padding: 1rem 1.5rem;

  &:disabled {
    background-color: ${color.grayBorder};
    color: ${color.white};
    border-color: ${color.grayBorder};
    box-shadow: none;
    cursor: not-allowed !important;
    &:hover {
      background-color: ${color.grayBorder};
      color: ${color.white};
      border-color: ${color.grayBorder};
      border-width: 2px;
      transform: none;
    }

  ${(props) =>
    props.color === 'primary' &&
    `
      background-color: ${color.darkerGreen};
      color: ${color.white};
      border-color: ${color.darkerGreen};

      &:active, &:hover {
        background-color: ${color.evenDarkerGreen};
        color: ${color.white};
        border-color: ${color.evenDarkerGreen};
      }
      &:focus {
        background-color: ${color.brightGreen};
        color: ${color.white};
        border-color: ${color.black};
        outline: none;
      }
     `}

  ${(props) =>
    props.color === 'secondary' &&
    `
      background-color: ${color.brightBlue};
      color: ${color.white};
      border-color: ${color.brightBlue};

      &:hover {
        background-color: ${color.darkBrightBlue};
        border-color: ${color.darkBrightBlue};
      }

      &:focus {
        background-color: ${color.lightBrightBlue};
        color: ${color.white};
        border-color: ${color.black};
        outline: none;
  }
      &:active {
        background-color: ${color.lightBrightBlue};
        color: ${color.white};
        border-color: ${color.lightBrightBlue};
      }
  `}

  ${(props) =>
    props.color === 'tertiary' &&
    `
    background-color: transparent;
    color: ${color.brightBlue};
    border-color: ${color.brightBlue};
    margin: 1px;
    
    &:hover {
        border-width: 3px;
        margin: 0px;
    }

    &:focus, &:active {
      margin: 0px;
      border-color: ${color.darkBrightBlue};
      border-width: 3px;
      background-color: transparent;
    }

    &:focus{
        color: ${color.brightBlue};
        outline: none;
    }
    &:active{
        color: ${color.darkBrightBlue};
    }
  `}

  ${(props) =>
    props.color === 'mint' &&
    `
      background-color: ${color.brightBrightGreen};
      color: ${color.black};
      border-color: ${color.brightBrightGreen};

      &:hover {
        border-color: ${color.brightGreen};
      }
      &:focus {
        background-color: ${color.white};
        color: ${color.black};
        border-color: ${color.brightGreen};
        outline: none;
  }
      &:active {
        background-color: ${color.brightGreen};
        color: ${color.black};
        border-color: ${color.brightGreen};
        font-weight: ${typography.weight.extrabold};
      }`}
`;

export const InitialButtons: React.FC = ({ value, children = null, color = 'primary', ...props }: ButtonProps) => {
  return (
    <>
      <StyledButton color={color} {...props}>
        <span>{value || children}</span>
      </StyledButton>
    </>
  );
};
