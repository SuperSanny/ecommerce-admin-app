import React from "react";
import CustomInput from "../components/CustomInput";
const Addcolor = () => {
  return (
    <>
      <div>
        <h3 className="mb-4 title">Add Color</h3>
        <div>
          <form action="">
            <div className="w-25 text-center">
              <CustomInput type="color" label="Enter Color" />
              <button
                type="submit"
                className="btn btn-success border-0 rounded-3 my-3"
              >
                Add Color
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addcolor;
