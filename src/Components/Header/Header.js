//import useState hook to create menu collapse state
import React, { useState, useEffect } from "react";
import { Link, Route, BrowserRouter, useHistory } from "react-router-dom";
import { Home } from "../../Pages/Home/index";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";

const Header = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(0);
  const history = useHistory();

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const handleClickMenu = (id, pathname) => {
    // setSelectedMenu(id);
    history.push(pathname);
  };

  useEffect(() => {
    console.log(selectedMenu);
  }, [selectedMenu]);

  return (
    <>
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <BrowserRouter>
              <Menu iconShape="square">
                <MenuItem
                  onClick={() => handleClickMenu(1, "/")}
                  active={selectedMenu === 1 ? true : false}
                  icon={<FiHome />}
                >
                  {/* <Link to={{ pathname: "/" }} /> */}
                  Home
                </MenuItem>
                <MenuItem
                  onClick={() => handleClickMenu(2, "/category")}
                  active={selectedMenu === 2 ? true : false}
                  icon={<FaList />}
                >
                  {/* <Link to={{ pathname: "/category" }} /> */}
                  Category
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClickMenu(3, "/favourite");
                  }}
                  active={selectedMenu === 3 ? true : false}
                  icon={<FaRegHeart />}
                >
                  {/* <Link to={{ pathname: "/favourite" }} />  */}
                  Favourite
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClickMenu(4, "/overview");
                  }}
                  active={selectedMenu === 4 ? true : false}
                  icon={<RiPencilLine />}
                >
                  {/* <Link to={{ pathname: "/overview" }} />  */}
                  Overview
                </MenuItem>
                <MenuItem
                  active={selectedMenu === 5 ? true : false}
                  icon={<BiCog />}
                >
                  Settings
                </MenuItem>
              </Menu>
            </BrowserRouter>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem
                onClick={() => setSelectedMenu(6)}
                active={selectedMenu === 6 ? true : false}
                icon={<FiLogOut />}
              >
                Logout
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;
