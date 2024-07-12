import React from "react";

function Button({ name, styles = "" }) {
  return <button className={styles}>{name}</button>;
}

export default Button;
