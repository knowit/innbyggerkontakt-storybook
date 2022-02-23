import React, { ReactNode } from 'react';
import { styled } from '@storybook/theming';
import { Clear, Info } from '../images';
import { Button} from './';
import { color, typography } from '../common';

export interface ConsentProps {
    className?: string;
    consentComponent: ReactNode;
    infoText: string ;
    headerText: string;
    onClose: () => void;
    onSave: () => void;
}

const StyledPopup = styled.div
`   
    font-family: ${typography.type.primary};
    display: grid;
    justify-items: start;
    background-color: white;
    padding: 2.5rem;
    max-width: 62rem;
    border-radius: 2px;
    box-shadow: 0px 4px 4px ${color.borderShadow};
    .infoSvg {
        height: 2.5rem;
        width: 2.5rem;
        path{
            fill: ${color.brightBlue};
        }
    }
`
const Wrapper = styled.div`
    padding: 0.5rem;
    width: calc(100% - 1rem);
`

const StyledHeader = styled.h1`
    font-weight: ${typography.weight.extrabold};
    font-size: ${typography.size.px24}px;
`

const ConsentBox = styled.div`
    font-size: ${typography.size.px14}px;
    display: grid;
    row-gap: 1rem;
    border: dashed ${color.brightBlue} 1px;
    border-radius: 2px;
    padding: 2rem 1.75rem;
    margin-bottom: 1rem;
    width: calc(100% - 58px);
`

const StyledButtonWrapper = styled.div`
    justify-self: end;
    display: flex;
    column-gap: 1rem;
`
export const ConsentModal: React.FC<ConsentProps> = ({ className, headerText, infoText, onClose, onSave}) => {
    return (
        <StyledPopup className={className}>
                <Info className='infoSvg' aria-label="Information sign" title="information"/>
                <StyledHeader>{headerText}</StyledHeader>
                <ConsentBox>
                    {infoText}
                </ConsentBox>
                <StyledButtonWrapper>
                    <Button color="tertiary" onClick={onClose}>Kun nødvendige</Button>
                    <Button onClick={onSave}>Aksepter alle</Button>
                </StyledButtonWrapper>
        </StyledPopup>
    )
}

ConsentModal.displayName = 'ConsentModal';
