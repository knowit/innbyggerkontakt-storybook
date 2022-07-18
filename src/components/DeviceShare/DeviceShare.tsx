import React from 'react';

import { Computer, Smartphone } from '@mui/icons-material';

import './DeviceShare.scss';

export type Props = {
  mobileShare: number;
  showValue?: boolean;
};

export const DeviceShare: React.FC<Props> = (props) => {
  let mobileShare = props.mobileShare;
  if (mobileShare < 0) mobileShare = 0;
  if (mobileShare > 100) mobileShare = 100;

  return (
    <div className="deviceShareContainer" {...props}>
      <div
        className="deviceShareElement deviceShareElement--mobile"
        style={{
          width: `${mobileShare}%`,
          minWidth: mobileShare < 10 ? '2%' : '120px',
        }}
      >
        {mobileShare > 9 ? (
          <>
            <DeviceShareText icon={<Smartphone />} share={mobileShare} showValue={props.showValue} />
            {mobileShare >= 91 ? (
              <DeviceShareText
                style={{ position: 'absolute', right: '0.5rem' }}
                icon={<Computer />}
                share={100 - mobileShare}
                showValue={props.showValue}
              />
            ) : null}
          </>
        ) : null}
      </div>
      <div
        className="deviceShareElement deviceShareElement--desktop"
        style={{
          width: `${100 - mobileShare}%`,
          minWidth: mobileShare >= 91 ? '2%' : '120px',
        }}
      >
        {mobileShare < 91 ? (
          <>
            <DeviceShareText icon={<Computer />} share={100 - mobileShare} showValue={props.showValue} />
            {mobileShare < 10 ? (
              <DeviceShareText
                style={{ position: 'absolute', left: '0.5rem' }}
                icon={<Smartphone />}
                share={mobileShare}
                showValue={props.showValue}
              />
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  );
};

const DeviceShareText: React.FC<
  { icon: JSX.Element; share: number; showValue?: boolean; className?: string } & JSX.IntrinsicElements['div']
> = (props) => {
  return (
    <div {...props} className={`deviceShareText ${props.className}`}>
      {props.icon}
      {props.showValue ? `${props.share}%` : null}
      {props.children}
    </div>
  );
};
