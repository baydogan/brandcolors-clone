import React from "react";


const Notification = ({ props }) => {
 

  return (
    <div className="notification">
      <p>Copied <strong>{props.value}</strong> to clipboard</p>
    </div>
  );
};

export default Notification;
