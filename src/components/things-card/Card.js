import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes["card-wrapper"]}>
      <img
        className={classes["card-image"]}
        src={props.imageSrc}
        alt={props.imageAlt}
      />
      <h3 className={classes["card-heading"]}>{props.cardHeading}</h3>
      <p className={classes["card-para"]}>{props.cardPara}</p>
    </div>
  );
};

export default Card;
