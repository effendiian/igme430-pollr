// ////////////////////////
// MODULE / LIBRARY IMPORT
// ////////////////////////

import React, { Component } from 'react';

// ////////////////////////
// MEMBERS
// ////////////////////////

// Returns element for the login prompt.
const renderSignupPrompt = () => (<span>
    Not registered? <a href="/signup">Create an account.</a>
</span>);

// Returns element for the login prompt.
const renderLoginPrompt = () => (<span>
    Already have an account? <a href="/login">Login here.</a>
</span>);

// Component. - Prompt to the user on the login/signup page.
export default class UserPrompt extends Component {
  render() {
    const { isLogin = false } = this.props;
    const renderFunc = (isLogin) ? renderSignupPrompt : renderLoginPrompt;
    return (
      <>
        {renderFunc()}
      </>
    );
  }
}
