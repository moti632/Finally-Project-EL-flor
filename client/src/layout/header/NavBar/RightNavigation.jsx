import React from "react";
import { ROUTES } from "../../../model/routes";
import NavRouteLink from "../../common/Navigation/NavRouteLink";

const RightNavigation = ({ user }) => {
  return (
    <ul className="navbar-nav d-flex flex-row">
      {!user && (
        <>
          <div className="ms-3">
            <NavRouteLink route={ROUTES.LOGIN} />
          </div>
          <div className="ms-3">
            <NavRouteLink route={ROUTES.SIGNUP} />
          </div>
          <div className="ms-3">
            <NavRouteLink route={ROUTES.BIZ_SIGNUP} />
          </div>
        </>
      )}
      {user && <NavRouteLink route={ROUTES.LOGOUT} />}
    </ul>
  );
};

export default RightNavigation;
