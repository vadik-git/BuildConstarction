import React from 'react';
import { BrandInstagram, BrandFacebook } from 'tabler-icons-react';
import { SimpleButton } from '../Buttons';

import NavBar from '../NavBar/NavBar';

import './styles.css';

const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <div className="leftSide">0832-323234-34</div>
        <div className="rightSide">
          <SimpleButton onClick={() => null} className="socialButton">
            <BrandInstagram color="white" />
          </SimpleButton>

          <SimpleButton onClick={() => null} className="socialButton">
            <BrandFacebook color="white" />
          </SimpleButton>
        </div>
      </div>

      <NavBar />
    </>
  );
};

export default Header;
