// ////////////////////////
// MODULE / LIBRARY IMPORT
// ////////////////////////

import React from 'react';

// ////////////////////////
// MEMBERS
// ////////////////////////

// Component. - Prompt to the user on the login/signup page.
const Alert = (props) => {
  const {
    message = 'This is a notification',
    alert = 'alert-primary',
    visible = false,
  } = props;

  // Set up the styling.
  let className = 'alert';
  className += ` ${alert}`;
  className += ` ${(visible) ? 'd-block' : 'd-none'}`;

  return (
    <div className={className} role="alert">
      {message}
    </div>
  );
};

export default Alert;
