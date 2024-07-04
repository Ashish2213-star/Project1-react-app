import "bootstrap/dist/css/bootstrap.min.css";
import FoodItem from "./component/FoodItem";
import AppName from "./component/AppName";
import Foodinput from "./component/Foodinput";
import ErrorMessage from "./component/ErrorMessage";
import Container from "./component/Container";
import { useState } from "react";
function App() {
  let [arr,setarr]=useState([]);
  const [textToShow,setext] = useState();
  const onKeyDown = (event) => {
    if(event.key==="Enter"){
      let item=event.target.value;
      event.target.value="";
     let arr2=  [...arr,item];
     setarr(arr2);

    }
  };
  return (
    <>
      <Container>
        <AppName></AppName>
        <Foodinput handleKeyDowm={onKeyDown}></Foodinput>
        <ErrorMessage Arr={arr}></ErrorMessage>
        <FoodItem Arr={arr}></FoodItem>
      </Container>
    </>
  );
}
export default App;
