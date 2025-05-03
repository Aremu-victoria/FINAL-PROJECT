import React from 'react';
import '../Components/Signin.css';

const Signin = () => {

  
  return (
    <div className="container-fluid signin-container">
      <div className="row">
        <div className="col-lg-5 col-md-6 d-flex align-items-center justify-content-center">
          <div className="form-box">
            <h4 className="text-center mb-4 title" ><button style={{backgroundColor:'#08620e', width:'40%',border:'none', borderRadius:'10px'}}>Sign In</button></h4>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Enter your password" />
            </div>

            <div className="d-grid mb-3">
              <div className="btn btn-green" style={{backgroundColor:'#08620e'}}>Continue</div>
            </div>

            <div className="d-grid">
              <div className="btn google-btn">
                <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google icon" />
                Continue with Google
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-7 col-md-6 illustration-box">
          <img src="/signin.jpg" alt="Illustration" />
          <div className="text-overlay">
            <h5>Upload Educational</h5>
            <h1>Resources</h1>
            <p>Search and download educational materials</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;