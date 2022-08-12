import React, { ReactNode } from 'react';

import { styled } from '@storybook/theming';

import { color, typography } from '../../common';
import { Clear, Info } from '../../images';
import { Button } from '../Button/Button';
export interface PopupProps {
  consent?: true | false;
  childComponent?: ReactNode;
  componentView?: 'vertical' | 'horizontal';
  infoText: string;
  onClose: () => void;
  onCancel: () => void;
  onSave: () => void;
}

interface StylingProps {
  componentView: string;
}

const StyledPopup = styled.div`
  display: grid;
  justify-items: center;
  background-color: white;
  padding: 40px;
  gap: 2rem 0rem;
  max-width: 62rem;
  box-shadow: 0px 2px 5px 0px ${color.borderShadow};
  .clearSvg {
    justify-self: end;
    cursor: pointer;
    height: 0.875rem;
  }
  .infoSvg {
    height: 2.5rem;
    width: 2.5rem;
    path {
      fill: ${color.brightBlue};
    }
  }
`;
const StyledInfoText = styled.span`
  font-family: ${typography.type.primary};
  font-size: ${typography.size.px18}px;
`;

const StyledComponentWrapper = styled.div<Pick<StylingProps, 'componentView'>>`
  width: 100%;
  ${(props) =>
    props.componentView === 'vertical' &&
    `
        > * {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            column-gap: 2rem;
            > * {
                width: 40%;
                min-width: 18rem;
                flex-grow: 1;
            } 
        }     
    `}
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
`;
export const Popup: React.FC<PopupProps> = ({
  consent = false,
  infoText,
  childComponent,
  componentView = 'horizontal',
  onClose,
  onCancel,
  onSave,
}) => {
  return (
    <StyledPopup>
      <Clear className="clearSvg" onClick={onClose} aria-label="Close sign" title="close" />
      <Info className="infoSvg" aria-label="Information sign" title="information" />
      <StyledInfoText>{infoText}</StyledInfoText>
      {childComponent && (
        <StyledComponentWrapper componentView={componentView}>{childComponent}</StyledComponentWrapper>
      )}
      <StyledButtonWrapper>
        <Button color="tertiary" onClick={onCancel}>
          {consent ? 'Avslå' : 'Avbryt'}
        </Button>
        <Button onClick={onSave}>{consent ? 'Gi tilgang' : 'Endre likevel'}</Button>
      </StyledButtonWrapper>
    </StyledPopup>
  );
};

Popup.displayName = 'Popup';
