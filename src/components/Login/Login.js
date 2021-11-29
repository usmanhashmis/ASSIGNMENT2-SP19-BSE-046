import React from "react";
import "./logins.css";

const Login = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <section className="main ">
        <div className="bottom-grid mt-5">
          <div className="logo">
            <h1>
              {" "}
              <a href="index.html"> Meetup Signin form</a>
            </h1>
          </div>
        </div>
        <div className="content-w3ls">
          <div className="text-center icon">
            <span className="fa fa-meetup"></span>
          </div>

          <div className="content-bottom">
            <form action="#" method="post">
              <div className="field-group">
                <span className="fa fa-user" aria-hidden="true"></span>
                <div className="wthree-field">
                  <input
                    name="text1"
                    id="text1"
                    type="text"
                    value=""
                    placeholder="Username"
                    required
                  />
                </div>
              </div>
              <div className="field-group">
                <span className="fa fa-lock" aria-hidden="true"></span>
                <div className="wthree-field">
                  <input
                    name="password"
                    id="myInput"
                    type="Password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="wthree-field">
                <button type="submit" className="btn">
                  Sign in
                </button>
              </div>
              <ul className="list-login">
                <li className="switch-agileits">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                    keep Logged in
                  </label>
                </li>
                <li>
                  <a href="#" className="text-right">
                    forgot password?
                  </a>
                </li>
                <li className="clearfix"></li>
              </ul>
              <ul className="list-login-bottom">
                <li className="">
                  <a href="#url" className="">
                    Create Account
                  </a>
                </li>
                <li className="">
                  <a href="#url" className="text-right">
                    Need Help?
                  </a>
                </li>
                <li className="clearfix"></li>
              </ul>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
