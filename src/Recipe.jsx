import React from "react";
import "./Recipe.css";

function Recipe(props) {
  return (
    <div className="container">
      <h3>{props.title}</h3>
      <p>
        <b>Calories: </b>
        {props.calorie}
      </p>
      <img src={props.img} alt={props.title} />
      <ul className="list">
        <b>Ingredients:</b>
        <br />
        {props.ingredients.map((item, index) => (
          <li key={index} className="list-li">
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recipe;
