import React from 'react';

import styled from '@storybook/theming/node_modules/@emotion/styled';

const Circle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const TimePicker: React.FC = () => {
  return (
    <>
      <Circle></Circle>
    </>
  );
};
