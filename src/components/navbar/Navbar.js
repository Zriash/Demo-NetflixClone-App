import logo from '../../assets/netflixLogo.png';
import usrImg from '../../assets/userImg.jpg';
import {
  ArrowDropDown,
  ArrowDropUp,
  Notifications,
  Search,
} from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import classes from './Navbar.module.scss';

const Navbar = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
    };
    return () => {
      window.onscroll = null;
    };
  }, [window.onscroll, window.pageYOffset]);

  return (
    <div
      className={`${classes.navbar} ${props.className} ${
        isScrolled ? classes.blackNavbar : ''
      }`}
    >
      <div className={classes.left}>
        <img className={classes.logo} alt='Netflix logo' src={logo} />
        <span className={`${classes.active}`}>Home</span>
        <span className={classes.link}>TV Shows</span>
        <span className={classes.link}>Movies</span>
        <span className={classes.link}>New & Popular</span>
        <span className={classes.link}>My List</span>
      </div>
      <div className={classes.right}>
        <Search className={classes.icon} />
        <Notifications className={classes.icon} />
        <div className={classes.imgDiv}>
          <div className={classes.imgInner}>
            <img className={classes.img} alt='Profile picture' src={usrImg} />
            <div className={classes.upIcon}>
              <ArrowDropUp />
            </div>
            <div className={classes.options}>
              <span>Account</span>
              <span>Help Center</span>
              <span>Sign out of Netflix</span>
            </div>
          </div>
          <ArrowDropDown className={classes.iconSmall} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
