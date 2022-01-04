import featuredPhoto from '../../assets/featuredPhoto.jpg';
import featuredTitle from '../../assets/featuredTitle.webp';

import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import React from 'react';
import classes from './Features.module.scss';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Features = () => {
  const history = useHistory();

  const LinkHandler = () => {
    history.push('play/Anxious-People');
  };
  return (
    <div className={classes.main}>
      <img src={featuredPhoto} />
      <div className={classes.info}>
        <img src={featuredTitle} />
        <div className={classes.text}>
          <div className={classes.title}>
            <span>Watch the Limited Series Now</span>
          </div>
          <div className={classes.description}>
            <span>
              A bank robber holds the visitors of an open house hostage and then
              promptly vanishes, leaving the police baffled — and suspicious of
              everyone.
            </span>
          </div>
          <div className={classes.btns}>
            <div className={classes.playDiv}>
              <button className={classes.playbtn} onClick={LinkHandler}>
                <PlayArrow className={classes.iconPlay} />
                <span> Play</span>
              </button>
            </div>
            <div className={classes.infoDiv}>
              <button className={classes.infoBtn}>
                <InfoOutlined className={classes.iconInfo} />
                <span> More Info</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
