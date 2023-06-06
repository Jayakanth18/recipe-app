import React from "react";
import "./Recipe.css";
function Recipe(props) {
  return (
    <div className="container">
      <h1>{props.label}</h1>
      <p>
        <b>Calories:</b>
        {props.calorie}
      </p>
      <img src={props.img} alt="" />
      <ul className="list">
        <p>
          <b>Ingredients:</b>
          <br />
          <br />
        </p>
        {props.ingredients.map((item) => (
          <li className="list-li">{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recipe;
