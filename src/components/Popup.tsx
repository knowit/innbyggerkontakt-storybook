import React, { ReactNode } from 'react';
import { styled } from '@storybook/theming';
import { ReactComponent as ClearComponent }  from '../images/clear.svg';
import { ReactComponent as InfoComponent} from '../images/info.svg';
import { Button } from './';
import { color, typography } from '../common';
export interface PopupProps {
    childComponent?: ReactNode;
    componentView?: 'vertical' | 'horizontal';
    infoText: string ;
    onClose: () => void;
    onCancel: () => void;
    onSave: () => void;
}

interface StylingProps {
    componentView: string;
}

const StyledPopup = styled.div
`   
    display: grid;
    justify-items: center;
    background-color: white;
    padding: 40px;
    gap: 2rem 0rem;
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
const StyledInfoText = styled.span`
    font-family: ${typography.type.primary};
    font-size: ${typography.size.px18}px;
`

const StyledComponentWrapper = styled.div<Pick<StylingProps, 'componentView'>>`
    width: 100%;
    ${(props) => 
        props.componentView === 'vertical' && `
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
    ` }
`

const StyledButtonWrapper = styled.div`
    display: flex;
    gap: 1.5rem;
`
export const Popup: React.FC<PopupProps> = ({infoText, childComponent, componentView="horizontal", onClose, onCancel, onSave}) => {
    return (
        <StyledPopup>
            <ClearComponent className='clearSvg' onClick={onClose}/>
            <InfoComponent className='infoSvg' />
            <StyledInfoText>{infoText}</StyledInfoText>
            <StyledComponentWrapper componentView={componentView} >
                {childComponent}
            </StyledComponentWrapper>
            <StyledButtonWrapper>
                <Button color='tertiary' onClick={onCancel}>Avbryt</Button>
                <Button onClick={onSave}>Endre likevel</Button>
            </StyledButtonWrapper>
        </StyledPopup>
    )
}

Popup.displayName = 'Popup';
