import React, { useState } from "react";
import { Box, Typography, TextField, Button, Select, MenuItem } from "@mui/material";
import Navlabour from "../Components/Navlabour";

const LabourSignup = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    phoneNo: "",
    password: "", // Renamed pin to password
    userType: "Labour",
  });
  const [message, setMessage] = useState(""); // Add state for the message

  const handleChange = (e) => {
    if (e.target.name === "phoneNo") {
      // Allow only numbers and limit to 10 digits
      const phoneNo = e.target.value.replace(/\D/g, "").slice(0, 10);
      setInputs((prevState) => ({
        ...prevState,
        phoneNo,
      }));
    } else if (e.target.name === "password") {
      // Allow only numbers and limit to 4 digits
      const pin = e.target.value.replace(/\D/g, "").slice(0, 4);
      setInputs((prevState) => ({
        ...prevState,
        password: pin,
      }));
    } else {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      setMessage(alert("Signup successful")); // Set the message for signup
      alert("Unique Identification Number Has Assigned");
      setIsSignup(false);
    } else {
      setMessage(alert("Login successful"));
      // Set the message for login
    }
  };

  const resetState = (e) => {
    setIsSignup(!isSignup);
    setInputs({ name: "", phoneNo: "", password: "" }); // Changed pin to password
    setMessage(""); // Clear the message
  };

  const userTypes = ["Labour", "Labour Agency", "Employer"];

  return (
    <div>
      <Navlabour />

        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection={"column"}
            maxWidth={400}
            alignItems="center"
            justifyContent={"center"}
            margin="auto"
            marginTop={5}
            padding={3}
            borderRadius={5}
            boxShadow={"5px 5px 10px blue"}
            sx={{
              ":hover": {
                boxShadow: "5px 5px 10px blue",
              },
            }}
          >
            <Typography variant="h2" padding={3} textAlign="center">
              {isSignup ? "Signup" : "Login"}
            </Typography>

          {isSignup && (
            <TextField
              onChange={handleChange}
              value={inputs.name}
              name="name"
              margin="normal"
              type={"text"}
              variant="outlined"
              placeholder="Name"
            />
          )}

          <Select
            onChange={handleChange}
            value={inputs.userType}
            name="userType"
            margin="normal"
            variant="outlined"
            placeholder="Select User Type"
            fullWidth={false} // Remove fullWidth to allow manual width adjustment
            sx={{ width: "230px" }}
          >
            {userTypes.map((type, index) => (
              <MenuItem key={index} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>

          <TextField
            onChange={handleChange}
            value={inputs.phoneNo}
            name="phoneNo"
            margin="normal"
            type={"tel"}
            variant="outlined"
            placeholder="Phone No."
          />
          <TextField
            onChange={handleChange}
            value={inputs.password}
            name="password"
            margin="normal"
            type={isSignup ? "pin" : "password"} // Set type dynamically
            variant="outlined"
            placeholder={isSignup ? "Enter 4-digit pin" : "Enter Pin"} // Update placeholder
          />

          <Button
            type="submit"
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="warning"
          >
            {isSignup ? "Signup" : "Login"}
          </Button>
          <Button onClick={resetState} sx={{ marginTop: 3, borderRadius: 3 }}>
            Change to {isSignup ? "Login" : "Signup"}?
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default LabourSignup;
