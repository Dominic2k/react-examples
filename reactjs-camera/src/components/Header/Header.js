import React from 'react';

const Header = () => {
    return (
        <div id="header">
        <div id="header-logo">
            <a href="http://www.nationallobsterhatchery.co.uk" className="h-logo">
            <img src="images/lobster.png" />
            </a>
            <h1 className="h-logo">This is header</h1>
            <div style={{clear: 'both'}} />
        </div>
        <div id="header-menu">
            <div id="h-menu">
              <ul className="h-ul-menu">
                  <li><a href="index.html#">Home</a></li>
                  <li><a href="#">About Us</a></li>
                  <li>
                    <a href="#">News</a>
                    <ul>
                        <li><a href="#">Sub menu</a></li>
                        <li><a href="#">Sub menu</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Site Map</a></li>
                  <li><a href="#">Contact</a></li>
              </ul>
              <div style={{clear: 'both'}} />
            </div>
        </div>
        <div style={{clear: 'both'}} />
      </div>
    );
};

export default Header;
