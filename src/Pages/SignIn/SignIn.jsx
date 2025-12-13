import React from 'react';

import { Link } from 'react-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.config';
import { toast } from 'react-toastify';

const SignIn = () => {
     const handleSignIn =(e) =>{
        e.preventDefault();
        const email = e.target.email?.value;
        const password = e.target.password?.value;
        console.log('SignIn clicked',{email,password});
         
        const handleGoogleSignIn = () => {
        console.log('Google Sign-In clicked');
    };

        signInWithEmailAndPassword(auth, email, password)
            .then((res) =>{
            console.log(res);
            toast.success('User logged in successfully');
        })
        .catch((error) =>{
            console.log(error);
            toast.error(error.message);
        });
    }
    return (
        <div className="flex justify-center items-center bg-base-200 mb-40">
  <div className="hero-content  w-120 flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className='font-semibold text-2xl text-cyan-700 ml-15 mt-2'>Login Your Account</h2>
      <div className="card-body">
        <form  onSubmit={''}  className="form">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover ml-25 mt-5">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4 items-center ml-25 w-30">Signin</button>
          <div className='flex item-center justify-center my-2 gap-2'>
            <div className='h-px w-16 bg-amber-100 mt-2'></div>
            <span className='mx-2 text-gray-400 font-bold'>OR</span>
            <div className='h-px w-16 bg-amber-100 mt-2'></div>
          </div>
          <button type='button' onClick={handleGoogleSignIn} className="btn btn-outline btn-warning mt-4 ml-16 ">
             <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Continue with Google

          </button>
          <p className='font-bold text-gray-400 text-1xl ml-14 pt-3 '>Don't have an account ? {''}<Link to={'/auth/signup'} className='text-red-900'>SignUp </Link></p>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default SignIn;