import React from 'react';
import './Tag.scss';

export type TagProps = {
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  text?: string;
};

const Tag: React.FC<TagProps> = (props) => (
  <div className="tagContainer" {...props}>
    {props.leftIcon}
    {props.text}
    {props.children}
    {props.rightIcon}
  </div>
);

export default Tag;
