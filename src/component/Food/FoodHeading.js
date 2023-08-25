import React, { Fragment } from 'react';

function FoodHeading(props) {
    return (
        <Fragment>
             <p className="h3 p-2">{props.text}</p>
        </Fragment>
    );
}

export default FoodHeading;