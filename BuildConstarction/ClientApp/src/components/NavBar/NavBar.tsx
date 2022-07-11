import React from 'react';
import { Link } from 'react-router-dom';
import { PAGES } from '../../navigation/pages';

import './styles.css';

const NavBar = () => {
  return (
    <div className="navBarContainer">
      <img
        className="navBarLogo"
        src="https://secureservercdn.net/166.62.115.95/vhn.53e.myftpupload.com/wp-content/uploads/2019/06/cropped-New-Logo.jpg"
        alt="logo"
      />

      <div className="navBarLinks">
        {PAGES.map((page) => (
          <Link className="navBarLink" to={page.path}>
            {page.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
