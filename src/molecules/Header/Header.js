import React from "react";
// Style
import './style.css';

// constants
import { LOGO, PROFILE_IMAGE } from "../../constants";

const Header = React.memo(() => {
  return(
    <header>
      <div className="header-wrapper">
        <img className="logo-image" src = {LOGO} alt="whizco logo"/>
        <div className="hearder-items">
          <ul>
            <li>
              Home
            </li>
            <li className="active-subtab">
              Creators
            </li>
            <li>
              My Campaign
            </li>
          </ul>
          <img className="profile-image" src = {PROFILE_IMAGE} alt="profile" />
        </div>
      </div>
    </header>
  )
})

export default Header