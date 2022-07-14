import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowNarrowRight } from 'tabler-icons-react';
import { v4 } from 'uuid';

import { APP_PAGES } from '../../../../constants/appPages';
import './styles.css';

const GreetingBlock = () => {
  return (
    <div className="mainHomeBlock">
      <div className="innerBlock">
        <p className="mainText">WE WILL BE HAPPY TO TAKE CARE OF YOUR WORK</p>
        <div className="buttons">
          <button className="buttonLinkContact button">
            <Link className="link" key={v4()} to={APP_PAGES.CONTACT.path}>
              <div className="linkText">Contact</div>
              <ArrowNarrowRight size={16} />
            </Link>
          </button>

          <button className="buttonLinkProject button">
            <Link className="link" key={v4()} to={APP_PAGES.PORTFOLIO.path}>
              <div className="linkText">Our projects</div>
              <ArrowNarrowRight color="#ffffff" size={16} />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GreetingBlock;
