import React from "react";
import './link.scss'

function Link() {
  return (
    <div>
      <div className="linkTree">
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
            Zuri Python Book
          </a>
        </div>
        <div className="tree">
          <a id="pitch" href="https://background.zuri.team/">
            Background Check for coders
          </a>
        </div>
        <div className="tree">
          <a id="book_design" href="https://books.zuri.team/design-rules">
            Zuri Book Design
          </a>
        </div>
      </div>
    </div>
  );
}

export default Link;
