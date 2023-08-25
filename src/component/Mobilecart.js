import React, { Fragment, useState } from 'react';

function Mobilecart(props) {

    const [mobile , setMobile]= useState({
        brand : "Lenovo",
       color : 'Black',
       price : 25000
    })


    const HendleClick=(value)=>{
        setMobile((prevState)=>{
            return{
                ...prevState,
                price:value
            }
        })
    }
    return (
        <Fragment>
             <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                          <ul className='list-group'>
                            <li className='list-group-item list-group-item-action'>
                             Brand :  {mobile.brand}
                            </li>
                            <li className='list-group-item list-group-item-action'>
                             Color :  {mobile.color}
                            </li>
                            <li className='list-group-item list-group-item-action'>
                             Price :  {mobile.price}
                            </li>
                          </ul>
                          <button className='btn btn-info mx-2 mt-2' onClick={()=>HendleClick(10000)}>Incre</button>
                          <button className='btn btn-warning mx-2 mt-2'onClick={()=>HendleClick(5000)} >Decre</button>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </Fragment>
    );
}

export default Mobilecart;