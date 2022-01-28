import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const CustomBtn = ({
  className,
  btnName,
  onClick,
  disabled,
  size,
  btnType,
}) => {
  return (
    <>
      <Button
        type={btnType}
        className={`btn ${className}`}
        size={size}
        onClick={onClick}
        disabled={disabled}
      >
        {btnName}
      </Button>
    </>
  );
};

export default CustomBtn;
