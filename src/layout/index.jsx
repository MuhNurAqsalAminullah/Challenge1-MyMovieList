import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Setting from "../components/Setting";

const Layout = () => {
  const [setting, setSetting] = useState(false);

  // ----- handle setting Toggle funtion
  const settingToggle = () => {
    setSetting(!setting);
  };
  return (
    <div>
      <Navbar settingToggle={settingToggle} />
      <Outlet />
      <Setting setting={setting} />
    </div>
  );
};

export default Layout;
