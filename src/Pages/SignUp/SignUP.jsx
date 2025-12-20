import React from 'react';
import { Link } from 'react-router';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Firebase/Firebase.config';
import { toast } from 'react-toastify';
import { IoEyeOff } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { useState } from 'react';

const SignUP = () => {

  const [show, setShow] = useState(false);
       
        const handleSignUp =  (e) =>{
            e.preventDefault();
            const email = e.target.email?.value;
            const password = e.target.password?.value;

        
            console.log("signUp function entered", { email, password });
            
            
            if (!password ||password.length < 6){
                toast.error('Password must be at least 6 characters long');
            console.log(password.length);
                return;
            }
            if (!/[A-Z]/.test(password)) {
           toast.error("Password must contain at least one uppercase letter");
           return;
           }

          if (!/[a-z]/.test(password)) {
          toast.error("Password must contain at least one lowercase letter");
          return;
          }


      
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
      <form onSubmit={handleSignUp}  className="card-body">
        
          <label className="label">Name</label>
          <input type="text"  className="input" placeholder="Name" />

          <label className="label">Photo URL</label>
          <input type="text" name="photo URL" className="input" placeholder="Photo URL" />

         
            <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 text-black placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
            
          </div>
          <div className="relative">
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full bg-white/20 text-black placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-[8px] top-[36px] cursor-pointer z-50"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>
          
          <button type= "submit" className="btn btn-neutral mt-4">SignUp</button>
          <p className='font-bold text-gray-400 text-1xl ml-14 pt-3 '>Already have an account ? {''}<Link to={'/auth/signin'} className='text-red-900'>SignIn </Link></p>
        </form>
      </div>
    </div>
  </div>

    );
};

export default SignUP;
