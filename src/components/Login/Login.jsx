import React from 'react';

export default ({}) => {
  return (
    <form action="" class="box">
      <div class="field">
        <label for="" class="label">Email</label>
        <div class="control has-icons-left">
          <input type="email" placeholder="e.g. bobsmith@gmail.com" class="input" required/>
          <span class="icon is-small is-left">
            <i class="fa fa-envelope"></i>
          </span>
        </div>
      </div>
      <div class="field">
        <label for="" class="label">Password</label>
        <div class="control has-icons-left">
          <input type="password" placeholder="*******" class="input" required/>
          <span class="icon is-small is-left">
            <i class="fa fa-lock"></i>
          </span>
        </div>
      </div>
      <div class="field">
        <label for="" class="checkbox">
          <input type="checkbox"/>
         Remember me
        </label>
      </div>
      <div class="field">
        <button class="button is-success">
          Login
        </button>
      </div>
    </form>
  );
}
