import React from 'react';
import BookLover from '../assets/signin.png'
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
const SignIn = () => {
  return (
       <>
        <Link to='/' className='p-3 fs-3 text-dark' title='Back to Home Page'><FaRegArrowAltCircleLeft /></Link>
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="row shadow rounded overflow-hidden w-100" style={{ maxWidth: '900px' }}>
        {/* Left Side */}
        <div className="col-md-6 d-none d-md-block d-lg-block bg-secondary-subtle d-flex flex-column justify-content-center align-items-center p-4">
          <div className="text-center ">
            <img src={BookLover} alt='' width={400} className=''/>
            <p className="text-muted small">Academic Collaboration & Secure Cloud</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-md-6 bg-white p-4">
          <div className="text-center mb-4">
            <div className="bg-dark text-white rounded px-3 py-1 d-inline-block mb-2">ISS</div>
            <h5>Integrated School System</h5>
            <p className="text-muted">Welcome back! Please sign in to continue.</p>
          </div>
          <form>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="you@email.com" required />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" placeholder="Password" required />
            </div>
            <div className="d-flex flex-wrap gap-2 mb-3">
              <a href="#" className="ms-auto small text-decoration-none align-self-center">Forgot Password?</a>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-dark">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
       </>
  );
};

export default SignIn;
