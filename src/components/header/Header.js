import React,{useState,useEffect} from 'react';
import './header.scss';
import arrow from './arrow.svg';
import dot from './dot.svg';

function Header() {
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 500px)").matches)

  useEffect(() => {
    window
    .matchMedia("(max-width: 500px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, [])
  return (
    <div>
      <header>
        <div className="arrow">
          {
            matches ? <img src={dot} alt="arrow" /> : <img src={arrow} alt="arrow" />
          }
            
        </div>
      </header>
    </div>
  )
}

export default Header
