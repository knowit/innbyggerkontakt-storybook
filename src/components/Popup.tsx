import React from 'react';
import { styled } from '@storybook/theming';
import { ReactComponent as ClearComponent }  from '../images/clear.svg';
import { ReactComponent as InfoComponent} from '../images/info.svg';
import { Input } from './';
import { color } from '../common';
import { Button } from '..';
export interface PopupProps {
    type: 'info' | 'test';
    children: string ;
    onClose: () => void;
    onCancel: () => void;
    onSave: () => void;
}

const StyledPopup = styled.div
`   
    display: grid;
    justify-items: center;
    background-color: white;
    padding: 40px;
    gap: 2rem 0rem;
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

const StyledButtonWrapper = styled.div`
    display: flex;
    gap: 1.5rem;
`
export const Popup = ({type, children, onClose, onCancel, onSave}: PopupProps) => {
    return (
        <StyledPopup>
            <ClearComponent className='clearSvg' onClick={onClose}/>
            <InfoComponent className='infoSvg' />
            {type === 'info' ? (
                <span>{children}</span>
            ) : <Input type={'text'} label={'epost'}></Input>}
            <StyledButtonWrapper>
                <Button color='tertiary' onClick={onCancel}>Avbryt</Button>
                <Button onClick={onSave}>Endre likevel</Button>
            </StyledButtonWrapper>
        </StyledPopup>
    )
}

Popup.displayName = 'Popup';
