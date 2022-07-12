import React from "react";
import LeftNavigation from "./LeftNavigation";
import RightNavigation from "./RightNavigation";

const Navigation = ({ user }) => (
  <div
    className="collapse navbar-collapse justify-content-between"
    id="navbarSupportedContent"
  >
    <div className="btn btn-warning m-1">
      <LeftNavigation user={user} />
    </div>
    <div className="btn btn-warning m-1">
      <RightNavigation user={user} />
    </div>
  </div>
);

export default Navigation;
