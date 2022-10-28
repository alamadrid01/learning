import React from 'react';
import './footer.scss';
import zuri from './zuri.svg';
import ingressive from './ingressive.svg';


function Footer() {
  return (
    <div>
      <footer>
        <div className="text">
            <img src={zuri} alt="zuri-image" />
        </div>
        <div className="text">
            <span>HNG internship 9 Frontend Task </span>
        </div>
        <div className="text">
        <img src={ingressive} alt="zuri-image" />
        </div>
      </footer>
    </div>
  )
}

export default Footer
