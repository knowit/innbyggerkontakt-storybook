import React, { ReactNode } from 'react';
import { styled } from '@storybook/theming';
import { ReactComponent as ClearComponent }  from '../images/clear.svg';
import { ReactComponent as InfoComponent} from '../images/info.svg';
import { Button, Checkbox } from './';
import { color, typography } from '../common';

export interface ConsentProps {
    consentComponent: ReactNode;
    infoText: string ;
    headerText: string;
    onClose: () => void;
    onSave: () => void;
}

const StyledPopup = styled.div
`   
    display: grid;
    justify-items: start;
    background-color: white;
    padding: 40px;
    max-width: 62rem;
    box-shadow: 0px 2px 5px 0px ${color.borderShadow};
    .clearSvg{
        justify-self: end;
        cursor: pointer;
    }
    .infoSvg {
        height: 2.5rem;
        width: 2.5rem;
        path{
            fill: ${color.brightBlue};
        }
    }
`
const StyledHeader = styled.span`
    margin: 2rem 0rem 2rem 0rem;
    font-weight: ${typography.weight.extrabold};
    font-size: ${typography.size.px24}px;
`
const StyledInfoText = styled.span`
    font-family: ${typography.type.primary};
    font-size: ${typography.size.px14}px;
`

const ConsentBox = styled.div`
    display: grid;
    row-gap: 1rem;
    border: dashed ${color.brightBlue} 1px;
    border-radius: 2px;
    padding: 1.75rem;
    width: calc(100% - 60px);
    margin: 2rem 0rem;
`

const StyledButtonWrapper = styled.div`
    justify-self: end;
`
export const ConsentModal: React.FC<ConsentProps> = ({ consentComponent, headerText, infoText, onClose, onSave}) => {
    return (
        <StyledPopup>
            <ClearComponent className='clearSvg' onClick={onClose} aria-label="Close sign" title='close'/>
            <InfoComponent className='infoSvg' aria-label="Information sign" title="information"/>
            <StyledHeader>{headerText}</StyledHeader>
            <StyledInfoText>{infoText}</StyledInfoText>
            <ConsentBox>
                {consentComponent}
            </ConsentBox>
            <StyledButtonWrapper>
                <Button onClick={onSave}>Lagre</Button>
            </StyledButtonWrapper>
        </StyledPopup>
    )
}

ConsentModal.displayName = 'ConsentModal';
