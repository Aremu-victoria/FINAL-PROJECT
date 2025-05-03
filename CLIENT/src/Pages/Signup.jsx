import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Components/Signup.css';
import axios from 'axios';

const SignUp = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const allValues = { name, email, password };
        const url = 'https://final-project-3-fvwm.onrender.com/signup';
        axios
            .post(url, allValues)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="container-fluid signup-container">
            <div className="row h-100 m-0">

                <div className="col-md-6 d-flex align-items-center justify-content-center bg-success text-white p-0" >
                    <div className="w-75">
                        <h2 className="mb-4 text-center">Sign Up</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input
                                type="text"
    className="form-control"
        placeholder="Enter your name"
        onChange={(e) => setname(e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    onChange={(e) => setemail(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Create a password"
                                    onChange={(e) => setpassword(e.target.value)}
                                />
                                <small className="text-muted text-white" style={{ color: 'white' }}>Must be at least 8 characters</small>
                            </div>
                            <button type="submit" className="btn btn-light w-100 mb-2">
                                Create Account
                            </button>
                            <button type="button" className="btn btn-outline-light w-100 mb-2">
                                <i className="fab fa-google"></i> Sign up with Google
                            </button>
                            <p className="text-center mt-2">
                                Already have an account? <Link to="/signin" className="text-white">Sign In</Link>
                            </p>
                        </form>
                    </div>
                </div>

                <div className="col-md-6 position-relative p-0">
                    <img
                        src="/pics.jpg"
                        alt="Background"
                        className="position-absolute w-100 h-100"
                        style={{ objectFit: 'cover', opacity: 0.5 }}
                    />
                    <div className="position-absolute w-100 h-100 bg-black" style={{ opacity: 0.7 }}></div>
                    <div className="text-center position-relative text-white d-flex flex-column justify-content-center align-items-center h-100">
                        <h2 className="fw-bold">Upload Educational <br /><strong>Resources</strong></h2>
                        <p>Search and download educational materials</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;