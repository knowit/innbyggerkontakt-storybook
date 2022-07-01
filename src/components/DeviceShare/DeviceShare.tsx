import React from 'react';

import { Computer, Smartphone } from '@mui/icons-material';

import './DeviceShare.scss';

export type Props = {
  mobileShare: number;
  showValue?: boolean;
};

const DeviceShare: React.FC<Props> = (props) => {
  let mobileShare = props.mobileShare;
  if (mobileShare < 0) mobileShare = 0;
  if (mobileShare > 100) mobileShare = 100;

  return (
    <div className="deviceShareContainer" {...props}>
      <div
        className="deviceShareElement --mobile"
        style={{
          width: `${mobileShare}%`,
        }}
      >
        <Smartphone />
        {props.showValue ? `${mobileShare} %` : null}
      </div>
      <div
        className="deviceShareElement --desktop"
        style={{
          width: `${100 - mobileShare}%`,
        }}
      >
        <Computer />
        {props.showValue ? `${100 - mobileShare} %` : null}
      </div>
    </div>
  );
};

export default DeviceShare;
