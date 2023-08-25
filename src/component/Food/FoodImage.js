import React, { Fragment } from 'react';

function FoodImage(props) {
    return (
        <Fragment>
             <img src={props.image} alt="/" height="220" />
        </Fragment>
    );
}

export default FoodImage;