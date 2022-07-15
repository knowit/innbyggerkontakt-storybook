import React from 'react';

import './CarouselItem.scss';

interface CarouselItemProps {
  item: string;
  onClick?: () => void;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({ item, onClick }) => {
  return (
    <div className="carouselItem" onClick={onClick}>
      {item}
    </div>
  );
};

export default CarouselItem;
