import React from 'react';
import './header.scss';
import arrow from './arrow.svg';

function Header() {
  return (
    <div>
      <header>
        <div className="arrow">
            <img src={arrow} alt="arrow" />
        </div>
      </header>
    </div>
  )
}

export default Header
