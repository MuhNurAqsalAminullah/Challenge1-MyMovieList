/* eslint-disable react/prop-types */
import React from "react";
import * as IoIcons from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Setting = ({ setting }) => {
  const navigate = useNavigate();

  // ----- handle logout function
  const handleLogout = () => {
    localStorage.removeItem("email");
    navigate("/");
  };

  return (
    <div className={setting ? "box-setting" : "box-setting-hidden"}>
      <div className="image-profile">
        <p>i</p>
      </div>

      <p>Aqsal</p>

      <div className="box-button-logout" onClick={handleLogout}>
        <IoIcons.IoIosLogOut size={25} />
        <p>Logout</p>
      </div>
    </div>
  );
};

export default Setting;
