import * as React from "react";
export default function RedCircle(props) {
  return (
    <svg className="red-circle" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={35.5} cy={35.5} r={35.5}  fill="#E52421" />
    </svg>
  );
}
