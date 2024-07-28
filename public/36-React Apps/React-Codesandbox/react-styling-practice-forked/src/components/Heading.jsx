import React from "react";

let currentHour = new Date(2024, 1, 1, 15).getHours();

let customStyle = {};

let customGreeting = "";

if (currentHour < 12) {
  customGreeting = "Good Morning";
  customStyle.color = "green";
} else if (currentHour < 18) {
  customGreeting = "Good Afternoon";
  customStyle.color = "red";
} else {
  customGreeting = "Good Evening";
  customStyle.color = "blue";
}

function Heading() {
  return (
    <div>
      <h1>Welcome To Dee's Website</h1>
      <h1 className="heading" style={customStyle}>
        {customGreeting}
      </h1>
    </div>
  );
}

export default Heading;
