import React from "react";
import CustomInput from "../components/CustomInput";
const AddCoupon = () => {
  return (
    <>
      <div>
        <h3 className="mb-4 title">Add Coupon</h3>
        <div>
          <form action="">
            <CustomInput type="text" label="Enter Category" />
            <button
              type="submit"
              className="btn btn-success border-0 rounded-3 my-5"
            >
              Add Coupon
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCoupon;
