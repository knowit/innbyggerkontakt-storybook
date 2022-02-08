import React from 'react';

export interface PopupProps {
    type: 'info' | 'test';

}


export const Popup = ({type}: PopupProps) => {
    return (
        <div>
            {type === 'info' ? (
                <div> </div>
            ) : <div> </div>}
        </div>
    )
}

Popup.displayName = 'Popup';
