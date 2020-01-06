import React from 'react';
import appLogo from '../../../assets/gitdrnk_logo.svg';
import my311Logo from '../../../assets/myla_311logo.jpg';

const Header = () => (
    <div className="container hero-body">
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <div className="tile is-child is-3">
            <img src={my311Logo} alt="User Component" />
          </div>
          <div className="tile is-child is-8">
            <p className="title has-text-centered">
              GITDRNK
            </p>
          </div>
          <div className="tile is-child is-1">
            <img src={appLogo} alt="Gitdrnk Logo" />
          </div>
        </div>
      </div>
    </div>
);

export default Header;
