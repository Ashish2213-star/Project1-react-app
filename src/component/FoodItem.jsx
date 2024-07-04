import { useState } from "react";
import Item from "./Item";

const FoodItem = ({ Arr }) => {
  let [ActiveItem,setActiveItem]=useState([]);
  let onBuyButton=(event,item)=>{
    let newActive=[...ActiveItem,item]
    setActiveItem(newActive);
  }

  return (
    <>
      <ul className={`list-group `}>
        {Arr.map((Arr) => (
          <Item 
          key={Arr} 
          foodItem={Arr} 
          onActive={ActiveItem.includes(Arr)}
          onclick={(event)=>onBuyButton(event,Arr)}
          ></Item>
        ))}
      </ul>
    </>
  );
};
export default FoodItem;
