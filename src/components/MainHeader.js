import { NavLink } from 'react-router-dom';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeclassname={classes.active} to='/'>
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname={classes.active} to='/contact-us'>
              ContactUs
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
