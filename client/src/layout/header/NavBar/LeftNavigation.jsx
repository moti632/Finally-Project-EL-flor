import React from "react";
import NavRouteLink from "../../common/Navigation/NavRouteLink";
import { ROUTES } from "../../../model/routes";

const LeftNavigation = ({ user }) => {
  return (
    <ul className="navbar-nav d-flex flex-row">
      <div className="ms-3">
        <NavRouteLink route={ROUTES.ABOUT} />
      </div>
      <div className="ms-3">
        <NavRouteLink route={ROUTES.GALLERY} />
      </div>
      <div className="ms-3">
        {user && user.biz && <NavRouteLink route={ROUTES.MY_CARDS} />}
      </div>
      <div className="ms-3">
        {user && <NavRouteLink route={ROUTES.MY_FAV_CARDS} />}
      </div>
    </ul>
  );
};

export default LeftNavigation;
