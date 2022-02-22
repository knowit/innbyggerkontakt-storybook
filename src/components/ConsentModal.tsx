import React, { ReactNode } from 'react';
import { styled } from '@storybook/theming';
import { Clear, Info } from '../images';
import { Button} from './';
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
    font-family: ${typography.type.primary};
    display: grid;
    justify-items: start;
    background-color: white;
    padding: 2.5rem;
    max-width: 62rem;
    border-radius: 2px;
    box-shadow: 0px 4px 4px ${color.borderShadow};
    .clearSvg{
        justify-self: end;
        cursor: pointer;
        height: 0.875rem;
    }
    .infoSvg {
        margin-bottom: 2rem;
        height: 2.5rem;
        width: 2.5rem;
        path{
            fill: ${color.brightBlue};
        }
    }
`
const Wrapper = styled.div`
    padding: 0.5rem;
`

const StyledHeader = styled.h1`
    font-weight: ${typography.weight.extrabold};
    font-size: ${typography.size.px24}px;
`
const StyledInfoText = styled.p`
    font-family: ${typography.type.primary};
    font-size: ${typography.size.px14}px;
`

const ConsentBox = styled.div`
    font-size: ${typography.size.px14}px;
    display: grid;
    row-gap: 1rem;
    border: dashed ${color.brightBlue} 1px;
    border-radius: 2px;
    padding: 2rem 1.75rem;
    width: calc(100% - 60px);
    margin: 2rem 0rem;
`

const StyledButtonWrapper = styled.div`
    justify-self: end;
    margin-right: 0.5rem;
`
export const ConsentModal: React.FC<ConsentProps> = ({ consentComponent, headerText, infoText, onClose, onSave}) => {
    return (
        <StyledPopup>
            <Clear className='clearSvg' onClick={onClose} aria-label="Close sign" title='close'/>
            <Wrapper>
                <Info className='infoSvg' aria-label="Information sign" title="information"/>
                <StyledHeader>{headerText}</StyledHeader>
                <StyledInfoText>{infoText}</StyledInfoText>
                <ConsentBox>
                    {consentComponent}
                </ConsentBox>
            </Wrapper>
                <StyledButtonWrapper>
                    <Button onClick={onSave}>Lagre</Button>
                </StyledButtonWrapper>
        </StyledPopup>
    )
}

ConsentModal.displayName = 'ConsentModal';
