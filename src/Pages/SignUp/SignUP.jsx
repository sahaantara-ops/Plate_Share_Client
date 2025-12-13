import React from 'react';
import { Link } from 'react-router';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Firebase/Firebase.config';
import { toast } from 'react-toastify';

const SignUP = () => {
       const SignUp = () =>{
        const handleSignUp = (e) =>{
            e.preventDefault();
            const email = e.target.email?.value;
            const password = e.target.password?.value;
        
            console .log("signUp function entered" , {email,password});
        };
           createUserWithEmailAndPassword(auth, email, password)  
                    .then((res) =>{
                    console.log(res);
                    toast.success('User SignUp successfully');
                   })
                   .catch((error) =>{
                       console.log(error);
                       toast.error(error.message);
                   });
        
       };

    return (

        <div className="flex justify-center items-center bg-base-200 mb-40">
  <div className="hero-content  w-120 flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className='font-semibold text-2xl text-cyan-700 ml-15 mt-2'>SignUp Your Account</h2>
      <div className="card-body">
        
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" />

          <label className="label">Photo URL</label>
          <input type="text" className="input" placeholder="Photo URL" />

         
          
          <label className="label">email</label>
          <input type="email" className="input" placeholder="email" />
          <label className="label">password</label>
          <input type="password" className="input" placeholder="password" />
          
          <button className="btn btn-neutral mt-4">SignUp</button>
          <p className='font-bold text-gray-400 text-1xl ml-14 pt-3 '>Already have an account ? {''}<Link to={'/auth/signin'} className='text-red-900'>SignIn </Link></p>
        </div>
      </div>
    </div>
  </div>

    );
};

export default SignUP;
