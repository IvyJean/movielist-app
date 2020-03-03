import React from "react";
import { Link } from "react-router-dom";
import "./style/header.css";

const Header = props => {
  // const [authenticated] = useAuth(auth);
  return (
    <div>
      <nav id="navbar" className="">
        <div className="nav-wrapper">
          <div className="logo">
            <i className="fas fa-chess-knight"></i> Chronos | Movies
          </div>
          <ul id="menu">
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Movie">Browse</Link>
            </li>

            {/* <li>
              {authenticated !== null && (
                <button
                  onClick={() => authenticated ? auth.logout() : auth.login()}
                  className="App-link"
                >
                  Log {authenticated ? 'out' : 'in'}
                </button>
              )}
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
