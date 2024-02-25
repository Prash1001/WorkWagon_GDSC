import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";

import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRouter.js";
import jobRouter from "./routes/jobRouter.js";
import userRouter from "./routes/userRouter.js";
import AddDataModel from "./models/AddDataModel.js";
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { authenticateUser } from "./middleware/authMiddleware.js";
import User from  "./models/UserModel.js";
import bodyParser from 'body-parser';
import Job from "./models/JobModel.js";
import twilio from 'twilio';
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}app.use(cookieParser());
app.use(express.json());
app.get('/',(req,res)=>{
  res.send('hello');
});


app.get("/api/v1/test", (req, res) => {
  res.json({ msg: "test route" });
});
app.use("/api/v1/jobs", authenticateUser, jobRouter);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", authenticateUser, userRouter);

app.post("/api/v1/store-payment", async (req, res) => {
  try {
    const { Name, UIN, Job, Payment } = req.body;

    // Validate input (you can add more validation as needed)
    if (!Name || !UIN || !Job || !Payment) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create a new instance of the model
    const newPayment = new AddDataModel({
      Name,
      UIN,
      Job,
      Payment,
    });

    // Save the data to the database
    await newPayment.save();

    // Check if the payment is successful (you can add your own criteria here)
    const isPaymentSuccessful = /* Add your logic here, e.g., check against a payment gateway response */ true;

    if (isPaymentSuccessful) {
      // Update the payment status to "success" in the database
      newPayment.PaymentStatus = "success";
      await newPayment.save();
      res.status(200).json({ message: "Payment successful" });
    } else {
      // Update the payment status to "failure" in the database
      newPayment.PaymentStatus = "failure";
      await newPayment.save();
      res.status(200).json({ message: "Payment failed" });
    }
  } catch (error) {
    console.error("Error storing payment data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



// Define Twilio credentials
const accountSid = 'AC45855434f6f5a579353147b109c706fc';
const authToken = '15eb8f42786ea0eea5efc0ca78d12f28';
const client = twilio(accountSid, authToken);

// Store generated OTP in memory (you might want to use a database for this in a production environment)
let storedOTP;

// Endpoint to generate and send OTP
app.post("/api/v1/send-sms", async (req, res) => {
  try {
    // Validate that 'to' is present
    const { to } = req.body;
    if (!to) {
      return res.status(400).json({ error: "Missing required parameter: to" });
    }

    // Generate a random 6-digit OTP
    storedOTP = Math.floor(100000 + Math.random() * 900000);

    // Send the OTP via SMS
    const message = await client.messages.create({
      body: `Your OTP is: ${storedOTP}`,
      from: "+19477770547",
      to,
    });

    console.log(`OTP sent to ${to}: ${storedOTP}`);

    // Return success response
    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error(`Error generating/sending OTP: ${error.message}`);
    res.status(500).json({ error: "Failed to generate/send OTP" });
  }
});

// Endpoint to verify OTP
app.post("/api/v1/verify-otp", (req, res) => {
  try {
    const { otp } = req.body;

    if (otp && otp.toString() === storedOTP.toString()) {
      // OTP is correct
      res.status(200).json({ message: "OTP verification successful" });
    } else {
      // Incorrect OTP
      res.status(400).json({ error: "Incorrect OTP" });
    }
  } catch (error) {
    console.error(`Error verifying OTP: ${error.message}`);
    res.status(500).json({ error: "Failed to verify OTP" });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const addDetailsSchema = new mongoose.Schema({
  Name: String,
  UIN: String,
  Phone: String,
});

const AddDetailsModel = mongoose.model('AddDetails', addDetailsSchema);

// Define a route to handle GET requests for fetching data
app.get('/api/v1/AddDetails', async (req, res) => {
  try {

    const details = await AddDetailsModel.find();
    res.status(200).json(details);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/v1/User', async (req, res) => {
  try {
    const users = await User.find(); 
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Define route to handle POST request for adding details
app.post('/api/v1/AddDetails', async (req, res) => {
  try {
    const { Name, UIN, Phone } = req.body;
    const newMember = new AddDetailsModel({ Name, UIN, Phone });
    const savedMember = await newMember.save();
    res.status(201).json(savedMember);
  } catch (error) {
    console.error('Error saving member:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get("/api/v1/Job", async (req, res) => {
  try {
    let filters = {};

    if (req.query.sitename) {
      filters.sitename = req.query.sitename;
    }

    if (req.query.jobPincode) {
      filters.jobPincode = req.query.jobPincode;
    }

    const jobs = await Job.find(filters).exec();
    res.json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});





app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});


app.use(errorHandlerMiddleware);


const port = process.env.PORT || 5101;
try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}


/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqowirI_OjJJPUA120hnYbkIjllp1Ntrg",
  authDomain: "workwagon-ea1bc.firebaseapp.com",
  projectId: "workwagon-ea1bc",
  storageBucket: "workwagon-ea1bc.appspot.com",
  messagingSenderId: "376854047650",
  appId: "1:376854047650:web:9faf53772525cb4add60fb",
  measurementId: "G-HH496MDY4N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/