import React, { useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import Modal from "react-modal";
import "./PaymentInitPage.css";
import Navlabour from "./Navlabour";
import Footerlabour from "./Footerlabour";
import customFetch from "../utils/customFetch.js";
const TABLE_HEAD = ["UIN", "Name", "Job", "Action"];

const TABLE_ROWS = [
  {
    UIN: "+918454991931",
    Name: "John Max",
    Job: "Wielding",
    Action: "Payment",
  },
  {
    UIN: "+918454096739",
    Name: "Jo",
    Job: "Wielding",
    Action: "Payment",
  },
  {
    UIN: "1234",
    Name: "John Max",
    Job: "Wielding",
    Action: "Payment",
  },
  {
    UIN: "1234",
    Name: "John Max",
    Job: "Wielding",
    Action: "Payment",
  },
  {
    UIN: "1234",
    Name: "John Max",
    Job: "Wielding",
    Action: "Payment",
  },
  // ... (other rows)
];

function PaymentInitPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [paymentAmount, setPaymentAmount] = useState("");
  const [otp, setOtp] = useState("");
  const [otpGenerated, setOtpGenerated] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const openModal = (row) => {
    setSelectedRow(row);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedRow(null);
    setModalIsOpen(false);
    setOtp("");
    setOtpGenerated(false);
    setOtpVerified(false);
    setErrorMessage("");
  };

  const generateOTP = async () => {
    try {
      const { UIN } = selectedRow;
      const response = await customFetch.post("/send-sms", {
        to: UIN,
      });

      if (response.data && response.data.message === "OTP sent successfully") {
        setOtpGenerated(true);
      } else {
        console.error("Failed to generate OTP");
      }
    } catch (error) {
      console.error("Error generating OTP:", error.message);
    }
  };

  const submitPayment = async () => {
    try {
      const { UIN, Name, Job } = selectedRow;
      const otpVerificationResponse = await customFetch.post("/verify-otp", {
        to: UIN,
        otp,
      });

      if (
        otpVerificationResponse.data &&
        otpVerificationResponse.data.message === "OTP verification successful"
      ) {
        console.log("OTP verification successful");
        setOtpVerified(true);

        // Save data only when OTP is verified
        const paymentResponse = await customFetch.post("/store-payment", {
          UIN,
          Name,
          Job,
          Payment: parseFloat(paymentAmount),
        });

        if (
          paymentResponse.data &&
          paymentResponse.data.message === "Payment successful"
        ) {
          console.log("Payment successful");
          // Add additional logic for successful payment
        } else {
          console.error("Failed to store payment data:", paymentResponse.error);
          setErrorMessage(paymentResponse.error); // Set error message for payment failure
        }
      } else {
        console.error(
          "OTP verification failed:",
          otpVerificationResponse.error
        );
        setOtpVerified(false);
        setErrorMessage(otpVerificationResponse.error); // Set error message for OTP verification failure
      }
    } catch (error) {
      console.error("Error processing payment:", error.message);
    }
  };

  return (
    <>
      <Navlabour />
      <div className="bg-blue-100 p-2 pb-4">
        <Card className="h-full bg-blue-100 sm:w-full md:w-4/5 overflow-scroll md:overflow-hidden py-3 mx-auto">
          <table className="bg-blue-100 w-full min-w-max table-auto text-left ">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-b border-blue-gray-100  p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ UIN, Name, Job, Action }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={Name}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {UIN}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {Name}
                      </Typography>
                    </td>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {Job}
                      </Typography>
                    </td>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                        onClick={() => openModal({ UIN, Name, Job })}
                      >
                        {Action}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            content: {
              width: "350px", // Adjust the width as needed
              height: "250px",
              margin: "auto",
            },
          }}
        >
          <label>
            Payment Amount:
            <input
              type="number"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(e.target.value)}
              style={{
                border: "1px solid black",
                borderRadius: "8px", // Adjust the border radius for curved edges
                padding: "5px",
              }}
            />
          </label>
          <label>
            OTP:
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              style={{
                border: "1px solid black",
                borderRadius: "8px", // Adjust the border radius for curved edges
                padding: "5px",
                margin: "2px",
              }}
            />
          </label>
          {!otpGenerated ? (
            <button className="otp-button" onClick={generateOTP}>
              Generate OTP
            </button>
          ) : (
            <button className="otp-button" disabled>
              OTP Generated
            </button>
          )}
          <button className="submit-button" onClick={submitPayment}>
            Submit
          </button>

          {/* Display OTP verification message */}
          {otpVerified && <p>OTP verified successfully!</p>}
          {errorMessage && <p>{errorMessage}</p>}
        </Modal>
      </div>
      <Footerlabour />
    </>
  );
}

export default PaymentInitPage;
