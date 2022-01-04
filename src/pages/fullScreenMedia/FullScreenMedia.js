import React from 'react';
import classes from './FullScreenMedia.module.scss';
import { ArrowBackOutlined } from '@mui/icons-material';
import media from '../../assets/trailer.mp4';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const FullScreenMedia = () => {
  const history = useHistory();

  const LinkHandler = () => {
    history.replace('/');
  };

  return (
    <div className={classes.main}>
      <ArrowBackOutlined className={classes.backIcon} onClick={LinkHandler} />
      <video
        className={classes.media}
        src={media}
        autoPlay={true}
        progress={true}
        controls
      />
    </div>
  );
};

export default FullScreenMedia;
