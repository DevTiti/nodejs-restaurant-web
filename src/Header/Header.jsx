import React, { useState } from "react";
import "./Header.scss";
import Logo from "../../assets/images/Interstellar.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import blackLogo from "../../assets/images/blackLogo.webp";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <nav>
        <span>Get the App</span>
        <div className="right">
          <span>Investor Relations</span>
          <span>Add restaurant</span>
          <span>Log in</span>
          <span>Sign up</span>
        </div>
      </nav>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <CloseIcon style={{ color: "black" }} /> : <MenuIcon />}
      </div>
      {open && (
        <div className="sideMenu">
          <img src={blackLogo} alt="logo" />
          <div className="innerMenu">
            <span>Investor Relations</span>
            <span>Add restaurants</span>
            <span>Log In</span>
            <span>Sign Up</span>
          </div>
        </div>
      )}
      <div className="headerContent">
        <img src={Logo} alt="logo" />
        <h3>Discover the best food & drinks in Istanbul</h3>
        <div className="input">
          <select name="" id="">
            <option value="Etiler">Etiler</option>
            <option value="Kadiköy">Kadiköy</option>
            <option value="Eminönü">Eminönü</option>
            <option value="Üsküdar">Üsküdar</option>
            <option value="Karaköy">Karaköy</option>
          </select>
          |
          <input
            type="text"
            placeholder="Search for restaurant, cuisine or a dish"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
