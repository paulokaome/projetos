import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
       <div className="uk-container"> 
          <div className="uk-navbar">
              <div className="uk-navbar-left">
                  <Link to="/" className="uk-navbar-item uk-logo">My Todo</Link>
              </div>

              <div className="uk-navbar-right">
                  <ul className="uk-navbar-nav">
                      <Link to="/create">
                        <span uk-icon="icon:plus ; ratio:1.2"></span>
                      </Link>
                  </ul>
              </div>
          </div>
       </div> 
    )
};

export default Navbar;