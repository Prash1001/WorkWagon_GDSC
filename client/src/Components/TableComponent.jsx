import React, { useState, useEffect } from "react";
import "./TableComponent.css";
import customFetch from "../utils/customFetch";

function TableComponent() {
  const [data, setData] = useState([]);

  // Fetch data from the server when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data from the server
async function fetchData() {
  try {
    const response = await customFetch.get("/AddDetails");

    if (response.statusText === "OK") {
      const responseData = await response.data;
      setData(responseData);
    } else {
      console.error("Error fetching data:", response.statusText);
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}


  // Function to handle form submission
  async function handleValues(event) {
    event.preventDefault();
    const Name = event.target.elements.name.value;
    const UIN = event.target.elements.UIN.value;
    const Phone = event.target.elements.phone.value;

    try {
      const response = await customFetch.post("/AddDetails", {
        Name,
        UIN,
        Phone,
      });

      if (response.ok) {
        const savedMember = await response.json();
        setData((prevData) => [...prevData, savedMember]);
      } else {
        console.error("Error saving member:", response.statusText);
      }
    } catch (error) {
      console.error("Error saving member:", error.message);
    }

    // Clear the form inputs
    event.target.elements.name.value = "";
    event.target.elements.UIN.value = "";
    event.target.elements.phone.value = "";
  }

  return (
    <div className="tableWrap">
      <div>
        {/* Table Header */}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>UIN</th>
              <th>Phone</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {data.map((member) => (
              <tr key={member._id}>
                <td>{member.Name}</td>
                <td>{member.UIN}</td>
                <td>{member.Phone}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Form to add a new member */}
        <form className="addForm" onSubmit={handleValues}>
          <input type="text" name="name" placeholder="Enter Name" />
          <input type="number" name="UIN" placeholder="Enter UIN" />
          <input type="text" name="phone" placeholder="Enter Phone" />
          <button type="submit" id="button2">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default TableComponent;
