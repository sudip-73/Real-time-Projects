import React, { Fragment } from "react";
import FoodImage from "./FoodImage";
import FoodHeading from "./FoodHeading";


function FoodCard(props) {
  return (
    <Fragment>
      <div className="card shadow-lg">
       <FoodImage image={props.image}/>
        <FoodHeading text={props.text}/>
        <p className="p-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et modi
          dolorum ut. Cumque reprehenderit inventore nam, dignissimos amet
          blanditiis cum eaque ipsum at placeat impedit.
        </p>
      </div>
      
    </Fragment>
  );
}

export default FoodCard;
