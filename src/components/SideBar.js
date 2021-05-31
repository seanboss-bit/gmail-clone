import React from "react";
import { Link } from "react-router-dom";
import { sidebarlinks } from "./LinkComponent";
const SideBar = () => {
  return (
    <div className="sidebarwrapper">
      <div className="sidebar">
        <button className="btn">
          <i class="fas fa-plus fa-2x"></i>
          <h4>Compose</h4>
        </button>
      </div>
      <div className="line">
        <div className="links">
          {sidebarlinks.map((item) => (
            <div className="link">
              {item.icon} <span> {item.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="meet">
        <h5>Meet</h5>
        <div className="gmeet">
          <i class="fas fa-video"></i>
          <h5>New Meeting</h5>
        </div>
        <div className="gmeet">
          <i class="fas fa-keyboard"></i>
          <h5>Join A Meeting</h5>
        </div>
      </div>
      <div className="meet">
        <h5>Hangout</h5>
        <div className="gmeet">
          <i class="fas fa-user-circle"></i>
          <h5>Sean</h5>
        </div>
      </div>
      <div className="bottom">
      <i class="fas fa-user-circle"></i>
      <i class="fab fa-github"></i>
      <i class="fas fa-phone-alt"></i>
      </div>
    </div>
  );
};

export default SideBar;
