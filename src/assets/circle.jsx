import React from "react";

const Circle = ({ className}) => (
    <svg viewBox="0 0 71 71">
    <circle cx="35.5" cy="35.5" r="35.5" className={className}/>
    </svg>   
);

export default React.memo(Circle);
