import React from 'react';
import './Loading.scss';

export const Loading: React.FC<React.InputHTMLAttributes<HTMLDivElement>> = (props) => (
  <div {...props}>
    <svg className="spinner">
      <circle
        className="path"
        fill="none"
        strokeWidth={6}
        strokeLinecap="round"
        r={30}
        cx={33}
        cy={33}
      />
    </svg>
  </div>
);

export default Loading;
