import React from 'react';

export default ({}) => {
  return (
    <form action="" className="box">
      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left">
          <input type="email" placeholder="e.g. bobsmith@gmail.com" className="input" required/>
          <span className="icon is-small is-left">
            <i className="fa fa-envelope"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Password</label>
        <div className="control has-icons-left">
          <input type="password" placeholder="*******" className="input" required/>
          <span className="icon is-small is-left">
            <i className="fa fa-lock"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <label className="checkbox">
          <input type="checkbox"/>
         Remember me
        </label>
      </div>
      <div className="field">
        <button className="button is-success">
          Login
        </button>
      </div>
    </form>
  );
}
