import React, { Fragment, useState } from 'react';

function Gitprepare(props) {

const [details ,setDetails]=useState({ user : "", email : ""});
const [show ,setShow]=useState([]);
const [edit,setEdit]=useState(false)
const [editninput,setEditInput]=useState("")

const HendleSubmit=(event)=>{
   event.preventDefault();
   if(edit){
    const ttdata = show
    Object.assign(ttdata[editninput],details)
    setShow([...ttdata])
    setEdit(false)
    setDetails({user : "", email : ""})
   }
  else{
    setShow([...show,details]);
    setDetails({user : "", email : ""})
  }
}
const HendleChange=(event)=>{
    setDetails({
        ...details,
        [event.target.name ]:event.target.value
}
)
}
const Hendledelete=(i)=>{
 const tempdata=show.filter((data,index)=>i !==index);
 setShow(tempdata)
}

const HendleEdit=(index)=>{
  const temp=show[index];
  setDetails({user : temp.user , email : temp.email })
  setEdit(true)
  setEditInput(index)
}
    return (
        <Fragment>
            <div className="container mt-3">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-4">
                        <h1>Curd</h1>
                        <form onSubmit={HendleSubmit}className='mt-4'>
                             <div className="mb-2">
                             <label >Name : </label>
                             <input type="user" name="user" placeholder='Enter Name'  onChange={HendleChange} value={details.user}/>
                             </div>
                             <div className="mb-2">
                             <label >Email : </label>
                             <input type="email" name="email" placeholder='Enter Email' onChange={HendleChange} value={details.email}/>
                             </div>
                             <button className='btn btn-info'> {edit ? "Update" : "Add"}</button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className='table table-hover text-center'>
                            <thead>
                                <tr>
                                    <th>NAME</th>
                                    <th>E-MAIL</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                 {
                                    show.map((data,id)=>{
                                       return(
                                        <tr key={id}>
                                        <td>{data.user}</td>
                                        <td>{data.email}</td>
                                        <td>
                                            <button className='btn btn-primary btn-sm' onClick={()=>HendleEdit(id)}>Edit</button>
                                            <button className='btn btn-danger mx-1 btn-sm'onClick={()=>Hendledelete(id)}>Delete</button>
                                        </td>
                                       </tr>
                                       );
                                    })
                                 }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Gitprepare;