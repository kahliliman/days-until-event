import React from "react";
import classNames from "classnames";

const Alert = ({ label, type, className }) => {
  return (
    <div
      className={classNames(
        "alert alert mt-4",
        { [`alert-${type}`]: type },
        className
      )}
      role="alert">
      {label && label}
    </div>
  );
};

export default Alert;
