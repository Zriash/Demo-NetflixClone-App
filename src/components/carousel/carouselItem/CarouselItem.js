import hoverPhoto from '../../../assets/hoverPhoto.jpg';
import trailer from '../../../assets/trailer.mp4';
import {
  AddCircleOutline,
  ExpandCircleDownOutlined,
  PlayCircle,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from '@mui/icons-material';
import React, { useState } from 'react';
import classes from './CarouselItem.module.scss';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const CarouselItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const history = useHistory();

  const LinkHandler = () => {
    history.push('play/Anxious-People');
  };

  return (
    <div
      className={classes.main}
      style={{ left: isHovered && props.index * 228 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={classes.content}>
        {!isHovered && <img src={hoverPhoto} />}
        {isHovered && (
          <video
            className={classes.trailer}
            src={trailer}
            autoPlay={true}
            onClick={LinkHandler}
          />
        )}
      </div>
      <div className={classes.info}>
        <div className={classes.icons}>
          <div className={classes.left}>
            <PlayCircle className={classes.icon} onClick={LinkHandler} />
            <AddCircleOutline className={classes.icon} />
            <ThumbUpOutlined className={classes.icon} />
            <ThumbDownOutlined className={classes.icon} />
          </div>
          <div className={classes.right}>
            <ExpandCircleDownOutlined className={classes.icon} />
          </div>
        </div>
        <div className={classes.details}>
          <span className={classes.match}>83% match</span>
          <span className={classes.age}>13+</span>
          <span className={classes.duration}>1h 56m</span>
          <span className={classes.quality}>HD</span>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
