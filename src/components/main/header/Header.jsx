import React from 'react';
import appLogo from '../../../assets/gitdrnk_logo.svg';
import my311Logo from '../../../assets/myla_311logo.jpg';
const defaultPhoto = 'https://avatars3.githubusercontent.com/u/3691245?v=4';
const Header = () => (
    <div className="container hero-body">
      <div className="columns">
        <div className="column has-background-primary">
          <div className="level">
            <figure className="image is-96x96">
              <img className="is-rounded" src={defaultPhoto} alt="User Component" />
            </figure>
          </div>
        </div>
        <div className="column is-three-quarters has-background-danger">
          <div className="level">
            <div className="level-left">
              <strong>GITDRNK</strong>
            </div>
            <figure className="image is-96x96">
              <img className="is-rounded" src={appLogo} alt="Gitdrnk Logo" />
            </figure>
          </div>
        </div>
      </div>
    </div>
);

export default Header;
