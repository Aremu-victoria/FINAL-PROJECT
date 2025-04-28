import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        const allValues = {name, email, password}
        const url = 'https://final-project-3-fvwm.onrender.com/signup'
        axios.post(url, allValues)
        .then((res)=>{
          console.log(res.data);
          
        })
        .catch((err)=>{
          console.log(err);
          
        })
      }
    return (
        <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
            <div className="row w-100">

                <div className="col-md-6 d-flex flex-column align-items-center justify-content-center p-5">
                    <h2 className="mb-4 text-center">
                        <button className="btn btn-success w-100">Sign Up</button>
                    </h2>

                    <form className="w-75" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" 
                            placeholder="Enter your name" 
                            onChange={(e)=>setname(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" 
                            placeholder="Enter your email" 
                            onChange={(e)=>setemail(e.target.value)} />
                        </div>

                        <div className="mb-4">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="Create a password"
                            onChange={(e)=>setpassword(e.target.value)} />
                            <small className="text-muted">Must be at least 8 characters</small>
                        </div>
                        <button type="submit" className="btn btn-success w-100 mb-2">Create Account</button>
                        <button type="button" className="btn btn-outline-success w-100 mb-2">
                            <i className="fab fa-google"></i> Sign up with Google
                        </button>
                        <p className="text-center mt-2">
                            Already have an account? <a href="/login" type='submit'>Log In</a>
                        </p>
                    </form>
                </div>

                <div className="col-md-6 d-flex align-items-center justify-content-center position-relative overflow-hidden rounded-4 p-4" style={{ height: '100vh' }}>

                    <img
                        src="/public/landing.jpg"
                        alt="Background"
                        className="position-absolute w-100 h-100"
                        style={{ objectFit: 'cover', opacity: 0.4 }}
                    />

                    <div className="text-white text-center position-relative text-black">
                        <h2>Upload Educational <br /><strong>Resources</strong></h2>
                        <p>Search and download educational materials</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignUp;
