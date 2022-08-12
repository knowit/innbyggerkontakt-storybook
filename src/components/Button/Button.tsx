import React, { ComponentPropsWithoutRef } from 'react';

import { styled } from '@storybook/theming';

import { color, typography } from '../../common/index';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  text?: React.ReactNode;
  size?: 'big' | 'small';
  svg?: 'left' | 'right';
  variant?: 'rounded' | 'square';
  type?: 'button' | 'submit' | 'reset';
  fontWeight?: 'regular' | 'bold' | 'extrabold';
  color?: 'primary' | 'secondary' | 'tertiary' | 'mint';
  fontSize?: 'px11' | 'px14' | 'px18' | 'px24' | 'px48';
  boxShadow?: true | false;
}
interface StylingProps {
  disabled?: boolean;
  fontSize: number;
  fontWeight: string;
  size: string;
  svg?: string;
  variant: string;
  color: string;
  boxShadow: boolean;
}

//text inside button
const StyledSpan = styled.span<Pick<StylingProps, 'fontSize' | 'fontWeight'>>`
  font-family: ${typography.type.primary};
  ${(props) =>
    props.fontSize &&
    `
    font-size: ${props.fontSize}px;
  `}

  ${(props) =>
    props.fontWeight === 'regular' &&
    `
    font-weight: ${typography.weight.regular};
  `}

  ${(props) =>
    props.fontWeight === 'bold' &&
    `
    font-weight: ${typography.weight.bold};
  `}
  ${(props) =>
    props.fontWeight === 'extrabold' &&
    `
    font-weight: ${typography.weight.extrabold};
  `}
`;

const StyledButton = styled.button<Pick<StylingProps, 'disabled' | 'size' | 'svg' | 'variant' | 'color' | 'boxShadow'>>`
  cursor: pointer;
  span,
  svg {
    display: flex;
    align-items: center;
    justify-content: center;
  }
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
  }

  ${(props) =>
    props.variant === 'square' &&
    `
      border-style: solid;
      border-width: 2px;
      border-radius: 3px;
      width: fit-content;
      height: fit-content;
      }`}

  ${(props) =>
    props.variant === 'rounded' &&
    `
      border-radius: 90px;
      border-style: solid;
      }
  `}

  ${(props) =>
    props.size === 'big' &&
    `
      padding: 0.75rem 1.5rem;
      &:hover {
        padding: 0.75rem 1.5rem;
      }
   
  `}

  ${(props) =>
    props.size === 'small' &&
    `
      padding: 0.625rem 1.5rem;
  `}

${(props) =>
    props.svg === 'left' &&
    `
      padding: 6px 25px 6px 15px;
      span > svg {
        margin-right: 0.2rem
      }
  `}

${(props) =>
    props.svg === 'right' &&
    `
      padding: 6px 15px 6px 25px;
      > svg {
        margin-left: 0.2rem
      }
  `}

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
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

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

  ${(props) =>
    props.boxShadow === true &&
    `
    padding: 11px 21px;
    border-radius: 100px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`}
`;
/**
 * Primary UI component for user interaction
 */

export const Button = ({
  value,
  children = null,
  color = 'primary',
  variant = 'square',
  boxShadow = false,
  fontSize = 'px14',
  fontWeight = 'bold',
  size = 'small',
  type = 'button',
  disabled = false,
  svg,
  ...props
}: ButtonProps) => {
  let mainFontSize: number;
  switch (fontSize) {
    case 'px11': {
      mainFontSize = typography.size.px11;
      break;
    }
    case 'px14': {
      mainFontSize = typography.size.px14;
      break;
    }
    case 'px18': {
      mainFontSize = typography.size.px18;
      break;
    }
    case 'px24': {
      mainFontSize = typography.size.px24;
      break;
    }
    case 'px48': {
      mainFontSize = typography.size.px48;
      break;
    }
  }

  return (
    <StyledButton
      disabled={disabled}
      color={color}
      variant={variant}
      size={size}
      svg={svg}
      type={type}
      boxShadow={boxShadow}
      {...props}
    >
      <StyledSpan fontSize={mainFontSize} fontWeight={fontWeight}>
        {value || children}
      </StyledSpan>
    </StyledButton>
  );
};

Button.displayName = 'Button';
