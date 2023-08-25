import React, { Fragment, useState } from 'react';

const Prac=()=> {
const [watches , setWatches]=useState([
    {
        id: "F653R",
        name: " Oris Watch",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQmYAO01EYGK8_4pl0Tw3qOg31YBz1m8bqIw&usqp=CAU",
        price: 18000,
        qty: 2,
      },
      {
        id: "WTR4D",
        name: "APPLLP Watch",
        image:
          "https://w0.peakpx.com/wallpaper/421/374/HD-wallpaper-3d-clock-golden-latest-watch-zash.jpg",
        price: 70000,
        qty: 1,
      },
      {
        id: "BA352",
        name: "Unsplash Watch",
        image:
          "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        price: 11000,
        qty: 4,
      },
      {
        id: "DF4K3",
        name: "Boat Watch",
        image:
          "https://www.boat-lifestyle.com/cdn/shop/products/LunarConnect-FI_Black03_1500x.png?v=1678115037",
        price: 25000,
        qty: 7,
      }
])

 const inceQty=(watchId)=>{
     setWatches((prevState)=>{
        return prevState.map((watch,index)=>{
            if (watch.id===watchId){
                return{
                    ...watch,
                    qty : watch.qty + 1
                }
                
            }
            else{
                return watch
            }
        })
     })
 }
 const decreQty=(watchId)=>{
   setWatches((prevState)=>{
     return prevState.map((watch,index)=>{
        if(watch.id===watchId){
    return {
        ...watch,
        qty: watch.qty - 1 >0 ?   watch.qty - 1 : 1
    }
        } else{
            return watch
        }
     })
   })
 }

 const deletWatch=(watchId)=>{
    setWatches((prevState)=>{
     return prevState.filter((watch,index)=>watch.id!==watchId)
    })
 }

const Totalfunc =()=>{
 let total =0;
 for(let watch of watches){
    total +=  (Number(watch.qty)* Number(watch.price))
 }
 return total.toFixed(2)
}
    return (
        <Fragment>
             <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success p-2">Watch Cart</p>
                        <p className="lead p-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, rem quidem. Aliquam incidunt doloremque, quis veniam nihil aut debitis ad beatae commodi assumenda, doloribus aliquid perspiciatis est illum! Possimus, accusantium?</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                               
                        <table className='table table-hover table-striped table-primary mt-3 text-center'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    watches.map((watch,index)=>{
                                      return( <tr>
                                        <td>{watch.name}</td>
                                        <td>
                                            <img src={watch.image} alt="/" height={70} width={80} />
                                        </td>
                                        <td>
                                            <i className='bi bi-plus-circle mx-2' onClick={()=>inceQty(watch.id)}/>
                                            {watch.qty}
                                            <i className='bi bi-dash-circle mx-2' onClick={()=>decreQty(watch.id)}/>
                                            </td>
                                        <td>{watch.price}</td>
                                        <td>{watch.price*watch.qty}</td>
                                        <td>
                                            <button className='btn btn-danger btn-sm' onClick={()=>deletWatch(watch.id)}><i className='bi bi-trash' /></button>
                                        </td>
                                       </tr>
                                       )
                                    })
                                }
                                <tr>
                                    <td>Grand Total</td>
                                    <td>{Totalfunc()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
             </div>
        </Fragment>
    );
}

export default Prac;