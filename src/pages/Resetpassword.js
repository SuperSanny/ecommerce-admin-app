import React from "react";
import CustomInput from "../components/CustomInput";
// import { Link } from "react-router-dom";
const Resetpassword = () => {
  return (
    <>
      <div
        className="py-5"
        style={{ background: "#f4f5f7", minHeight: "100vh" }}
      >
        <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
          <div className="text-center">
            <h4 className="title">Reset Password</h4>
            <p>Please Enter your new password.</p>
          </div>
          <form action="" className="mt-2">
            <CustomInput
              type="password"
              placeholder="New Password"
              id="password"
              label="New Password"
            />
            <CustomInput
              type="password"
              placeholder="Confirm Password"
              id="confirm-password"
              label="Confirm Password"
            />
            <button
              type="submit"
              className="border-0 mt-3 py-2 text-white fw-bold w-100"
              style={{ background: "#ffd333" }}
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Resetpassword;
