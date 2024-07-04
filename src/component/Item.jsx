import React from "react";
import css from "./Item.module.css";
const Item = ({foodItem,onActive,onclick}) => {
  return (
    <>
      <li className={`list-group-item ${onActive&&`active`}`}>
        {foodItem}
        <span>
          <button className={`${css.button} btn btn-success`}
         onClick={onclick}>buy</button>
        </span>
      </li>
    </>
  );
};

export default Item;
