import React from "react";
import img from "../../assets/img/img.jsx";
import "./card2.scss";

const Card2 = (props) => {
  return (
    <div className="card2_container">
      <div className="card2_imgcontainer">
        <img src={props.img} alt="cabaña con nieve" className="card2_img" />
      </div>

      <div className="card2_cont">
        <h2>{props.title}</h2>
        <p>{props.text}</p>

        <span>Leer más</span>
      </div>
    </div>
  );
};

export default Card2;
