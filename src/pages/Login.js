import React from "react";
import CustomInput from "../components/CustomInput";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div
        className="py-5"
        style={{ background: "#f4f5f7", minHeight: "100vh" }}
      >
        <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
          <div>
            <h4 className="title">Log In</h4>
            <p>Log in to your account to continue.</p>
          </div>
          <form action="" className="mt-2">
            <CustomInput
              type="email"
              placeholder="Email Address"
              id="email"
              label="Email Address"
            />
            <CustomInput
              type="password"
              placeholder="Password"
              id="password"
              label="Password"
            />
            <div className="d-flex align-items-center justify-content-between">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="remember-me"
                />
                <label class="form-check-label" htmlFor="remember-me">
                  Remember me
                </label>
              </div>
              <div>
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
            </div>
            <Link to="/admin">
              <button
                type="submit"
                className="border-0 mt-3 py-2 text-white fw-bold w-100"
                style={{ background: "#ffd333" }}
              >
                Log in
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
