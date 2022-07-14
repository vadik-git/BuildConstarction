import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { v4 } from 'uuid';

import { PAGES } from '../../navigation/pages';
import './styles.css';

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <div className="navBarContainer">
      <img
        className="navBarLogo"
        src="https://secureservercdn.net/166.62.115.95/vhn.53e.myftpupload.com/wp-content/uploads/2019/06/cropped-New-Logo.jpg"
        alt="logo"
      />

      <div className="navBarLinks">
        {PAGES.map(page => (
          <Link
            key={v4()}
            className={`navBarLink ${pathname === page.path && 'active'}`}
            to={page.path}
          >
            <p className="navBarLinkText">{page.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
