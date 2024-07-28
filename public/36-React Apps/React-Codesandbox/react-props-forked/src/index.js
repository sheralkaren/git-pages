import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.imgUrl} alt="image-renderer" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
      <p>{props.demo}</p>
    </div>
  );
}
ReactDOM.render(
  <div>
    <h1>My Contacts Bank</h1>
    <Card
      name="Beyonce"
      imgUrl="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+1786798318"
      email="b@beyone.com"
      demo="I fuck her!"
    />
    <Card
      name="Jack Bauer"
      imgUrl="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel="+987 654 321"
      email="jack@nowhere.com"
    />

    <Card
      name="Chuck Norris"
      imgUrl="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      tel="+918 372 574"
      email="gmail@chucknorris.com"
    />
  </div>,
  document.getElementById("root")
);
