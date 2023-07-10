import React from "react";
//import { IoNotificationsOutline } from "react-icons/io5";
import {
//   MdOutlineFavoriteBorder,
  MdLogout,
  MdOutlineGridView,
  MdOutlineViewList,
  MdManageAccounts,
} from "react-icons/md";

const Dropdown = (props) => {
  return (
    <nav className="dropdown-nav">
      <ul>
        {/* <li>
          <span className="icon-menu">
            <IoNotificationsOutline />
          </span>
        </li>
        <li>
          <span className="icon-menu">
            <MdOutlineFavoriteBorder />
          </span>
        </li> */}
        <li className="li-username">           
            {props.username}          
        </li>

        <li>          
          <div className="avatar">
            <div className="circle">{props.initials}</div>
          </div>
          <ul className="sub-menu">
            <li className="sub-items">
              <span className="icon-menu">
                <MdOutlineGridView />
              </span>
              <p>Dashboard</p>
            </li>
            <li className="sub-items">
              <span className="icon-menu">
                <MdOutlineViewList />
              </span>
              <p>My Order</p>
            </li>
            <li className="sub-items">
              <span className="icon-menu">
                <MdManageAccounts />
              </span>
              <p>Update Profile</p>
            </li>
            <li className="sub-items" onClick={props.logout}>
              <span className="icon-menu">
                <MdLogout />
              </span>
              <p>Logout</p>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Dropdown;
