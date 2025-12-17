import React from 'react';

import { Link, useLocation, useNavigate } from 'react-router';
import { signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.config';
import { toast } from 'react-toastify';
import { IoEyeOff } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { useState } from 'react';
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();


const SignIn = () => {
     
    const [user, setUser] = useState(null);
    const [show, setShow] = useState(false);
     const handleSignIn =(e) =>{
        e.preventDefault();
        const email = e.target.email?.value;
        const password = e.target.password?.value;
        console.log('SignIn clicked',{email,password});


          signInWithEmailAndPassword(auth,email,password)
            .then((res) =>{
            console.log(res);
            setUser(res.user);
            toast.success('User Sign in successfully');
            navigate(from);
        })
        .catch((error) =>{
            console.log(error);
            toast.error(error.message);
        });
    };

    const location = useLocation();
    const from = location.state || '/';
    const navigate = useNavigate();
    console.log(location);    
       const handleGoogleSignin = () => {
            signInWithPopup(auth, googleProvider)
            .then((res) =>{
            console.log(res);
            setUser(res.user);
            toast.success('User Sign in successfully');
           
        })
        .catch((error) =>{
            console.log(error);
            toast.error(error.message);
        });
    };
    
   
    const handleSignOut= () =>{
         signOut(auth)
        .then(() =>{
           toast.success('User Sign out successfully');
           setUser(null);
        })
        .catch((error) =>{
            console.log(error);
            toast.error(error.message);
        })
    };

    console.log(user);
    return (
        <div className="flex justify-center items-center bg-base-200 mb-40">
  <div className="hero-content  w-120 flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className='font-semibold text-2xl text-cyan-700 ml-15 mt-2'>SignIn Your Account</h2>
      <div className="card-body">
       { user ? (<div className='text-center space-y-3'>
        <img src={user?.photoURL || "https://tse3.mm.bing.net/th/id/OIP.vWf_ciadzIXclB2o4YOFFQHaNL?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"} className='w-20 h-20 rounded-full mx-auto' alt=""/>
        <h2  className='text-xl font-semibold'>{user?.displayName}

        </h2>
        <p className='text-shadow-black'>{user?.email}</p>
        <button onClick={handleSignOut} className="btn btn-neutral btn-dash"> Sign Out</button>
       </div>) : ( <form  onSubmit={handleSignIn}  className="form">
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
          
          <button className="btn btn-neutral mt-5 items-center ml-25 w-30">Sign In</button>
          <div><a className="link link-hover ml-25 mb-6">Forgot password?</a></div>
          <div className='flex item-center justify-center my-2 gap-2'>
            <div className='h-px w-16 bg-amber-100 mt-2'></div>
            <span className='mx-2 text-gray-400 font-bold'>OR</span>
            <div className='h-px w-16 bg-amber-100 mt-2'></div>
          </div>
          <button type='button' onClick={handleGoogleSignin} className="btn btn-outline btn-warning mt-4
           ml-16 ">
             <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Continue with Google

          </button>
          <p className='font-bold text-gray-400 text-1xl ml-14 pt-3 '>Don't have an account ? {''}<Link to={'/auth/signup'} className='text-red-900'>SignUp </Link></p>
        </form>)}
      </div>
    </div>
  </div>
</div>
    );
};

export default SignIn;