import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      {/* <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} /> */}

      {/* Used for AuthContext.Provider(it's a listener for the component) */}
      <Navigation />
    </header>
  );
};

export default MainHeader;
