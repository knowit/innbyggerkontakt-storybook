import React, { DetailedHTMLProps } from 'react';
import { styled } from '@storybook/theming';

import { color, typography } from '../common/index';

export interface TextAreaProps
  extends DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  id: string;
  className?: string;
  ariaLabel: string;
}

const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const TextAreaLabel = styled.label`
  font-family: ${typography.type.primary};
  font-size: ${typography.size.px18}px;
  font-weight: ${typography.weight.regular};
`;

const TextAreaStyled = styled.textarea`
  font-family: ${typography.type.primary};
  font-size: ${typography.size.px14}px;
  font-weight: ${typography.weight.regular};

  width: inherit;
  height: 100px;

  padding: 0.25rem;

  border-color: ${color.evenDarkerGreen};
  &:focus-visible {
    outline-color: ${color.evenDarkerGreen};
  }
`;

export const TextArea = ({ id, className, ariaLabel, children = null, ...props }: TextAreaProps) => {
  return (
    <TextAreaWrapper>
      <TextAreaLabel htmlFor={id} className={className}>
        {children}
      </TextAreaLabel>
      <TextAreaStyled {...props} id={id} aria-label={ariaLabel} />
    </TextAreaWrapper>
  );
};

TextArea.displayName = 'TextArea';
