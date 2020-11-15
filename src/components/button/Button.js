import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  let variantStyle = styles[props.variant];

  return (
    <div>
      <button variant={props.variant} className={variantStyle}>
        Default
      </button>
    </div>
  );
};

export default Button;
