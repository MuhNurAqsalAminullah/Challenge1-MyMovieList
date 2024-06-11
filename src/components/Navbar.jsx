/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import * as IoIcons from "react-icons/io";

const Navbar = ({ settingToggle }) => {
  return (
    <div className="container-navbar">
      <div className="box-content">
        <div className="box-nav-title">
          <a className="nav-title" href="#">
            my movie list
          </a>
        </div>

        <ul className="box-nav-item">
          <li className="nav-item">
            <Link to={"/beranda"}>Beranda</Link>
          </li>
          <li>
            <IoIcons.IoMdSettings
              onClick={settingToggle}
              className="nav-item nav-item-setting"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
