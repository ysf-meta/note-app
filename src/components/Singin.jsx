import React, { useState } from 'react'
import {CognitoUserPool} from "amazon-cognito-identity-js";
import { useNavigate } from 'react-router-dom'


const userPool = new CognitoUserPool({
  
  UserPoolId: "us-east-1_zuj1G8XXQ",
  ClientId: "1u2fom4b550n6l4qd81386hhpo"
});

const Singin = () => {
  const [email,setemail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();

    const emailval=(e)=>{
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(e);
    return isValid;
    }
    const onSubmit=()=>{
      if(!emailval(email)||password.length<8)alert("enter a valid email and password")
      else{
      userPool.signUp(email,password,[],null,(err,data)=>{
          if(err)alert(err.message);
          else{
          console.log(data);
          alert("Signup Successful!");
          navigate("/signup");
          }
          
      }) }
    }
  return (
    <div className='flex flex-col w-[50%] mx-auto my-32'>
        <h1 className='mb-5 text-3xl'>Create account</h1>
        <label className=''>Email</label>
        <input type="text" className='w-[350px] p-2 outline-none shadow-md border-gray-400 border rounded-md mb-8 mt-3'onChange={(e)=>setemail(e.target.value)}/>
        <label>Password</label>
        <input type="text" className='w-[350px] p-2 outline-none shadow-md border-gray-400 border rounded-md mb-8 mt-3'onChange={(e)=>setPassword(e.target.value)}/>
        <button className='bg-green-600 px-[30px] py-[10px] text-white font-semibold rounded-lg mr-8 w-[350px]' onClick={onSubmit}>Sign In</button>
    </div>
  )
}

export default Singin