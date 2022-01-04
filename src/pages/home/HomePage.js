import React from 'react';
import Carousel from '../../components/carousel/Carousel';
import Features from '../../components/features/Features';
import Navbar from '../../components/navbar/Navbar';
import classes from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={classes.main}>
      <Navbar className={classes.navbar} />
      <Features />
      <Carousel title='Popular on Netflix' />
      <Carousel title='Continue to Watch' />
    </div>
  );
};

export default HomePage;
