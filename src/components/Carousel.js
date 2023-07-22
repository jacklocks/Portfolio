import { useState } from "react";
import CarouselItem1 from "./CarouselItem1";
import CarouselItem2 from "./CarouselItem2";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const length = 2;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };
  return (
    <div className="carousel-container">
      <IconChevronLeft
        className="arrow"
        size={96}
        stroke={1.5}
        onClick={handlePrevious}
      />
      {index === 0 && <CarouselItem1 />}
      {index === 1 && <CarouselItem2 />}
      <IconChevronRight
        className="arrow"
        size={96}
        stroke={1.5}
        onClick={handleNext}
      />
    </div>
  );
};

export default Carousel;
