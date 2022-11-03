import React from "react";
import {Navigate, useNavigate} from 'react-router-dom'
import './link.scss';
import slack from './slack.svg';
import git from './git.svg';

function Link() {
  let navigate = useNavigate();

  const nav = () =>{

    navigate('/contact');

  }
  return (
    <div>
      <div className="linkTree">
      <div className="tree">
          <a id="btn__zuri" href="https://twitter.com/adebayoAlameen">
            Twitter Link
          </a>
        </div>
        <div className="tree">
          <a id="btn__zuri" href="https://training.zuri.team/">
            Zuri Team
          </a>
        </div>
        <div className="tree">
          <a id="books" href="http://books.zuri.team/">
            Zuri Books
          </a>
        </div>
        <div className="tree">
          <a id="book__python" href="https://books.zuri.team/python-for-beginners?ref_id=<alamadrid>">
            Python Books
          </a>
        </div>
        <div className="tree">
          <a id="pitch" href="https://background.zuri.team/">
            Background Check for coders
          </a>
        </div>
        <div className="tree">
          <a id="book_design" href="https://books.zuri.team/design-rules">
             Design Books
          </a>
        </div>
        <div className="tree" onClick={nav}>
          <a id="book_design" href="">
             Contact
          </a>
        </div>
        <div className="logo">
          <div className="slack"><img src={slack} alt="slack-logo" /></div>
          <div className="git"><img src={git} alt="git logo" /></div>
        </div>
      </div>
    </div>
  );
}

export default Link;
