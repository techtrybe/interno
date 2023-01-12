import React from "react";

const Button = ({ type, children, ariaLabel }) => {
  type == "large" ? (
    <button aria-label={ariaLabel}>{children}</button>
  ) : type == "color" ? (
    <button aria-label={ariaLabel}>{children}</button>
  ) : (
    <button aria-label={ariaLabel}>{children}</button>
  );
};

export default Button;
