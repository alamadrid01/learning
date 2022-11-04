import React from 'react';
import './footer.scss';
import zuri from './zuri.svg';
import ingressive from './ingressive.svg';


function Footer() {
  return (
    <div>
      <hr />
      <footer>
        <div className="text">
            <img src={zuri} alt="zuri" />
        </div>
        <div className="text">
            <span>HNG internship 9 Frontend Task </span>
        </div>
        <div className="text">
        <img src={ingressive} alt="ingressive" />
        </div>
      </footer>
    </div>
  )
}

export default Footer
