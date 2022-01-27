import React from "react";
import { Button } from "react-bootstrap";

const ButtonComponent = ({
  className,
  btnName,
  onClick,
  disabled,
  size,
  btnType,
}) => {
  return <>
  <Button type={btnType} className={`btn ${className}`} size={size} onClick={onClick} disabled={disabled}>
           {btnName}
           </Button>
  </>;
};

export default ButtonComponent;
