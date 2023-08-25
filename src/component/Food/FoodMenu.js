import React, { Fragment } from "react";
import FoodCard from "./FoodCard";
import food1 from "../../assests/food1.jpg";
import food2 from "../../assests/food2.jpg";
import food3 from "../../assests/food3.jpg";
import food4 from "../../assests/food4.jpg";

const FoodMenu = () => {
const menu =[
  // const [menu ,setMenu]=useState([
  {
    food:food1,
    text: 'Food One'
  },
  {
    food:food2,
    text: 'Food Two'
  },
  {
    food:food3,
    text: 'Food Three'
  },
  {
    food:food4,
    text: 'Food Four'
  }
]
// )


  return (
    <Fragment>
      <div className="container-fluid mt-3">
        <div className="row">
          {
            menu.map((item,index)=>{
                  return(
                    <div className="col-3" key={index}>
                    <FoodCard image = {item.food} text={item.text}/>
                    </div>
                  );
            })
          }
         
          
        </div>
      </div>
    </Fragment>
  );
};

export default FoodMenu;
