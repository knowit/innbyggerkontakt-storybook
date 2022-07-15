import React, { Children } from 'react';
import { useState } from 'react';

import { Next, Previous } from '../../images';
import { Button } from '../Button';
import { CarouselItem } from '../Carousel/CarouselItem/CarouselItem';
import '../Carousel/CarouselItem/CarouselItem.scss';

interface CarouselProps {
  listItems: string[];
}

export const Carousel: React.FC<CarouselProps> = ({ listItems }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(listItems) - 1;
    } else if (newIndex >= React.Children.count(listItems) / newIndex + 2) {
      //endre "newIndex+2"
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };
  console.log();

  return (
    //endre 18%
    <div className="carousel">
      <div
        className="carousel__inner"
        style={{ transform: `translateX(-${activeIndex * React.Children.count(listItems)}%)` }}
      >
        {listItems.map((items) => {
          return <CarouselItem item={items}></CarouselItem>;
        })}
      </div>

      <Button
        className="button buttonLeft"
        onClick={() => {
          updateIndex(activeIndex - 1);
        }}
      >
        <Previous aria-label="previusPage" />
      </Button>
      <Button
        className="button buttonRight"
        onClick={() => {
          updateIndex(activeIndex + 1);
        }}
      >
        <Next aria-label="nextPage" />
      </Button>
    </div>
  );
};

export default Carousel;
