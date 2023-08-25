import React, { Fragment, useState } from 'react';

function Counter() {
 
    const [count , setCount]=useState(0)
    
    const increment = ()=>{
        setCount((prevcounter)=>{
      return prevcounter+1;
        })
    }
    return (
        <Fragment>
             <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <p className='display-3 text-center'>{count}</p>
                                <button className='btn btn-warning mx-4' onClick={increment}>increment</button>
                                <button className='btn btn-info mx-4' onClick={()=>setCount(count-1)}>deincrement</button>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </Fragment>
    );
}

export default Counter;