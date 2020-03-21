import React from "react";

import './SignIn.css';
import google from "./google.png";
import facebook from "./facebook.png";
import github from "./github.png";



function SignIn() {
    return (
      <div className="container pt-5">
        <div className="row">
          <div className="col-4"></div>
          <div className="signIn-shadow col-4 pb-5 pl-5 pr-5 pt-4 r signIn">
            <div className="pb-2">
              <h5>Sign In</h5>
            </div>
            <div className="mb-2">
              <span className="mb-2">Username</span>
          </div>
          <div class="input-group mb-3">
            <input type="text" class="form-control signIn" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          <hr />
          <div className="mb-2">
              <span className="mb-2">Password</span>
          </div>
          <div class="input-group mb-3">
            <input type="text" class="form-control signIn" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          <hr />
          <div className="row">
            <div className="col-2"></div>
              <div className="col-8 text-center"><img src={google} alt="google sign in" className="sign-image"/>
              </div>
              <div className="col-2"></div>
            </div>
            <div className="row pt-2">
              <div className="col-2"></div>
              <div className="col-8 text-center"><img src={facebook} alt="google sign in" className="sign-image"/>
              </div>
              <div className="col-2"></div>
            </div>
            <div className="row pt-2">
              <div className="col-2"></div>
              <div className="col-8 text-center"><img src={github} alt="google sign in" className="sign-image"/>
              </div>
              <div className="col-2"></div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SignIn;