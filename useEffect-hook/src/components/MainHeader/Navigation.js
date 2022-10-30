import React, { useContext } from 'react';
import AuthContext from '../../store/auth-Context';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  // Using useContext for tapping contenxt or listening and to forward the data between components instead of props
  const ctx = useContext(AuthContext)
  
  return(
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  )
  // return (
  //   <AuthContext.Consumer>
  //     {(ctx) => {
  //       return (
  //         <nav className={classes.nav}>
  //           <ul>
  //             {ctx.isLoggedIn && (
  //               <li>
  //                 <a href="/">Users</a>
  //               </li>
  //             )}
  //             {ctx.isLoggedIn && (
  //               <li>
  //                 <a href="/">Admin</a>
  //               </li>
  //             )}
  //             {ctx.isLoggedIn && (
  //               <li>
  //                 <button onClick={props.onLogout}>Logout</button>
  //               </li>
  //             )}
  //           </ul>
  //         </nav>
  //       )
  //     }}
  //   </AuthContext.Consumer>
  // );
  
};

export default Navigation;
