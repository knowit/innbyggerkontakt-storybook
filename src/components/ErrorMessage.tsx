import React from 'react';

import { styled } from '@storybook/theming';

import { color, typography } from '../common';
import { Clear } from '../images';

export interface ErrorMessageProps {
  color: 'warning' | 'error' | 'success';
  errorTitle: string;
  errorMessage: string;
  onClose: () => void;
}

const StyledMessage = styled.div<Pick<ErrorMessageProps, 'color'>>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${typography.type.primary};
  font-size: ${typography.size.px18}px;
  svg {
    height: 0.875rem;
    min-width: 0.875rem;
  }
  max-height: 6.4rem;
  padding: 1.5rem;
  ${(props) =>
    props.color === 'error' &&
    `
      background-color: ${color.lightError};
      &:hover{
        background-color: ${color.error};
      }
    `}
  ${(props) =>
    props.color === 'warning' &&
    `
    background-color: ${color.brightYellow};
    &:hover{
      background-color: ${color.darkerYellow};
    }
  `}
  ${(props) =>
    props.color === 'success' &&
    `
    background-color: ${color.brightGreen};
    &:hover{
      background-color: ${color.darkerGreen};
    }
  `}
`;
const ErrorWrapper = styled.div`
  margin-right: 1rem;
`;
const ErrorTitleStyled = styled.p`
  font-weight: ${typography.weight.extrabold};
  margin: 0 0 0.5rem 0;
`;

const ErrorMessageStyled = styled.p`
  margin: 0;
`;

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ color = 'error', errorTitle, errorMessage, onClose }) => {
  return (
    <StyledMessage color={color}>
      <ErrorWrapper>
        <ErrorTitleStyled>{errorTitle}</ErrorTitleStyled>
        <ErrorMessageStyled>{errorMessage}</ErrorMessageStyled>
      </ErrorWrapper>
      <Clear onClick={onClose} title="Close button" />
    </StyledMessage>
  );
};
