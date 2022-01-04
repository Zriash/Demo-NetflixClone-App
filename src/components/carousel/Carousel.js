import React, { useRef, useState } from 'react';
import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from '@mui/icons-material';
import classes from './Carousel.module.scss';
import CarouselItem from './carouselItem/CarouselItem';

const Carousel = (props) => {
  let content = [];
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef('');

  for (let i = 0; i < 14; i++) {
    content.push(
      <CarouselItem key={i} index={i} className={classes.carouselItem} />
    );
  }

  const hoverHandler = () => {
    setIsHovered((currIsHovered) => !currIsHovered);
  };

  const clickHandler = (direction) => {
    let distance = carouselRef.current.getBoundingClientRect().x;
    if (direction === 'back' && distance < 0) {
      carouselRef.current.style.transform = `translateX(${
        230 * 5 + distance
      }px)`;
    }
    if (direction === 'back' && distance >= -1086 && distance !== 32) {
      carouselRef.current.style.transform = `translateX(0px)`;
    }
    if (direction === 'forward' && distance > -2204) {
      carouselRef.current.style.transform = `translateX(${
        -230 * 5 + distance
      }px)`;
    }
  };

  return (
    <div className={classes.main}>
      <div className={classes.titleDiv}>
        <h2
          className={classes.title}
          onMouseEnter={hoverHandler}
          onMouseLeave={hoverHandler}
        >
          {props.title}
        </h2>
        <span
          className={`${classes.explore} ${isHovered ? '' : classes.hideSpan}`}
        >
          Explore All
        </span>
        <ArrowForwardIosOutlined className={classes.titleIcon} />
      </div>
      <div className={classes.wrapper}>
        <ArrowBackIosNewOutlined
          onClick={() => clickHandler('back')}
          className={`${classes.carouselArrow} ${classes.back}`}
        />
        <div className={classes.container} ref={carouselRef}>
          {content.map((item) => item)}
        </div>
        <ArrowForwardIosOutlined
          onClick={() => clickHandler('forward')}
          className={`${classes.carouselArrow} ${classes.forward}`}
        />
      </div>
    </div>
  );
};

export default Carousel;
