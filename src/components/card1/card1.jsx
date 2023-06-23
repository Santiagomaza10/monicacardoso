import React from "react";
import "./card1.scss";
import img from "../../assets/img/img.jsx";

const Card1 = (props) => {
  return (
    <div className="card1_container">

      <h2 className="title">{props.title}</h2>
      <h3>
        {props.subtitle}
      </h3>

      <div className="cont_container">

        <div className="img_container">
          <img src={props.img} alt="Foto de emprendimiento" />
        </div>

        <div className="text_container">
          <p>
            {props.text}
          </p>
          <button className="btn btn-primary">Conocer Más</button>
        </div>

      </div>
    </div>
  );
};

export default Card1;
