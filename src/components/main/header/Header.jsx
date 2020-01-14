import React from 'react';
import appLogo from '../../../assets/gitdrnk_logo.svg';
import Profile from '../../Profile/Profile.jsx';
import Login from '../../Login/Login.jsx';

const Header = () => (
  <div className="section">
    <div className="container">
      <div className="columns">
        <div className="column has-background-primary">
          <Profile/>
          <Login/>
        </div>
        <div className="column is-three-quarters">
          <div className="columns">
            <div className="column is-two-thirds has-background-danger">
              <div className="level">
                <div className="level-item has-background-primary">
                  <strong>GITDRNK</strong>
                </div>
              </div>
            </div>
            <div className="column has-background-danger">
              <figure className="image is-96x96">
                <img className="is-rounded" src={appLogo} alt="Gitdrnk Logo" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
