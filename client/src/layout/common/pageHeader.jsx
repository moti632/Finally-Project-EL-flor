import React from "react";
import PropTypes from "prop-types";

const PageHeader = ({ title, subTitle }) => {
  return (
    <div className="mt-5">
      <div className="center p-2 view">
        <div className="col-12 col-md-8 mt-3">
          <h1 className="title text-center display-4 text-light">{title}</h1>
          <h2 className="subtitle fs-2 text-center text-dark">{subTitle}</h2>
          <hr />
        </div>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default PageHeader;
