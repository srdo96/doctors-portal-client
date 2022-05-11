import React from "react";

const Button = ({ text = "Get Started", isDisabled = false }) => {
  return (
    <button
      disabled={isDisabled}
      className="btn btn-secondary uppercase  text-white bg-gradient-to-r from-secondary to-primary"
    >
      {text}
    </button>
  );
};

export default Button;
