import React, { useState } from 'react'
import { CognitoUser,AuthenticationDetails,CognitoUserPool } from "amazon-cognito-identity-js";
import { useNavigate } from 'react-router-dom'

const userPool = new CognitoUserPool({
        UserPoolId: "us-east-1_zuj1G8XXQ",
        ClientId: "1u2fom4b550n6l4qd81386hhpo"
      });


const Singup = () => {
    const [email,setemail]=useState();
    const [password,setpassword]=useState();
    const navigate=useNavigate();

    const onSubmit=()=>{
      if(!email||password.length<8)alert("Enter a valid email and password");
      else{
      const user=new CognitoUser({
        Username:email,
        Pool:userPool
      });
      const authDe=new AuthenticationDetails({
        Username:email,
        Password:password
      })
      user.authenticateUser(authDe,{
        onSuccess:(data)=>{
          navigate("/Dashboard")
        },
        onFailure:(err)=>{
          alert(err.message)
        },
        newPasswordRequired:(data)=>{
          console.log(data)
        }
      })}
    }
  return (
    <div className='flex flex-col w-[50%] mx-auto my-32'>
        <h1 className='mb-5 text-3xl'>Sign In</h1>
        <label className=''>Email</label>
        <input type="text" className='w-[350px] p-2 outline-none shadow-md border-gray-400 border rounded-md mb-8 mt-3' onChange={(e)=>setemail(e.target.value)}/>
        <label>Password</label>
        <input type="text" className='w-[350px] p-2 outline-none shadow-md border-gray-400 border rounded-md mb-8 mt-3' onChange={(e)=>setpassword(e.target.value)}/>
        <button className='bg-green-600 px-[30px] py-[10px] text-white font-semibold rounded-lg mr-8 w-[350px]' onClick={onSubmit}>Sign In</button>
    </div>
  )
}

export default Singup