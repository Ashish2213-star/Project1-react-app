import React from "react";

const ErrorMessage = ({Arr}) => {
  return <>{Arr.length == 0 && <h3>I am hungry</h3>}</>;
};

export default ErrorMessage;
