import React from "react";

const EmailNavbar = () => {
  return (
    <div>
      <div className="navbar2">
      <div className='active'>
        <i class="fas fa-inbox "></i>
        <h5>Primary</h5>
      </div>
      <div>
        <i class="fas fa-user-friends"></i>
        <h5>Social</h5>
      </div>
      <div>
        <i class="fas fa-tag"></i>
        <h5>Promotion</h5>
      </div>
    </div>
    </div>
  );
};

export default EmailNavbar;
