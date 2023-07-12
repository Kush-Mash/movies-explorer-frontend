import React from 'react';
// import { Link } from 'react-router-dom';

function NavTab() {
  return (
    <nav className='nav'>
      <ul className='nav__links'>
      <li><p className='nav__link'>Студент</p></li>
      <li><p className='nav__link'>Студент</p></li>
      <li><p className='nav__link'>Студент</p></li>
        {/* <li><Link to='#' className='nav__link'>О&nbsp;проекте</Link></li>
        <li><Link to='#' className='nav__link'>Технологии</Link></li>
        <li><Link to='#' className='nav__link'>Студент</Link></li> */}
      </ul>
    </nav>
  );
}

export default NavTab;
