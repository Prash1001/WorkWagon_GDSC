import React, { useState } from "react";
import Navlabour from "./Navlabour";
import Footerlabour from "./Footerlabour";
const JobForm = ({ onSubmit }) => {
  const [jobDetails, setJobDetails] = useState({
    title: "",
    description: "",
    address: "",
    pincode: "",
    price: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const images = Array.from(e.target.files);
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      images,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(jobDetails);
  };

  return (
    <>
      <Navlabour />
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="bg-white border-2 border-black rounded-lg p-5 max-w-3xl w-full"
        >
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 pr-0 md:pr-5 mb-5">
              <label className="block mb-2 text-lg">
                Job Title:
                <input
                  type="text"
                  name="title"
                  value={jobDetails.title}
                  onChange={handleChange}
                  className="px-3 py-2 mt-1 w-full border rounded-md text-sm"
                />
              </label>

              <label className="block mb-2 text-lg">
                Job Description:
                <textarea
                  name="description"
                  value={jobDetails.description}
                  onChange={handleChange}
                  className="px-3 py-2 mt-1 w-full border rounded-md text-sm"
                  rows="3"
                />
              </label>
            </div>

            <div className="w-full md:w-1/2 mb-5">
              <label className="block mb-2 text-lg">
                Address:
                <input
                  type="text"
                  name="address"
                  value={jobDetails.address}
                  onChange={handleChange}
                  className="px-3 py-2 mt-1 w-full border rounded-md text-sm"
                />
              </label>

              <label className="block mb-2 text-lg">
                Pincode:
                <input
                  type="text"
                  name="pincode"
                  value={jobDetails.pincode}
                  onChange={handleChange}
                  className="px-3 py-2 mt-1 w-full border rounded-md text-sm"
                />
              </label>

              <label className="block mb-2 text-lg">
                Price:
                <input
                  type="text"
                  name="price"
                  value={jobDetails.price}
                  onChange={handleChange}
                  className="px-3 py-2 mt-1 w-full border rounded-md text-sm"
                />
              </label>
            </div>
          </div>

          <label className="block mb-2 text-lg">
            Images:
            <input
              type="file"
              name="images"
              onChange={handleImageChange}
              multiple
              className="px-3 py-2 mt-1 w-full border rounded-md text-sm"
            />
          </label>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 text-lg rounded cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
      <Footerlabour />
    </>
  );
};

export default JobForm;
