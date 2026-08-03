import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


export default function Home()
{

const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [submitted,setSubmitted]=useState(false);

const handelName=(e)=>{
    setName(e.target.value);
};

const handelEmail=(e)=>{
    setEmail(e.target.value);
};

const handelPassword=(e)=>{
    setPassword(e.target.value);
};

const handelSubmit=(e)=>{
    e.preventDefault();
    if(name==="||email===||password"){
    alert("please enter all the fields");
}else {
setSubmitted(true);
}
};


const successMessage=()=>{
  if(submitted)  
    return(
<div className="success">
   <h1>User {name} sucessfully regestration!!</h1>
     </div> 
     );
};

 return(
    <div>
    <div>
        <h1>User Regestration</h1>
    </div>
    <div classNmae="message">
    {successMessage()}"
      </div>
<form>
<fieldset>
    <lable className="lable">Name</lable>
    <input onChange={handelName} className="input" value={name} type="text"
    /><br></br>
    <lable className="lable">Email</lable>
    <input onChange={handelEmail} className="input" value={email} type="email"
    /><br></br>
    <lable className="lable">Password</lable>
    <input onChange={handelPassword} className="input" value={password} type="password"
    /><br></br>
    <button onClick={handelSubmit}className="btn"type="submit">
    Submit
    </button>
     </fieldset>
</form>
</div>
 );
}