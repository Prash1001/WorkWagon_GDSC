import React, { useState } from "react";
import img1 from "../assets/profile-pic-2.png";
import { Card, Typography } from "@material-tailwind/react";
import Modal from "react-modal";
import './PaymentInitPage.css';
import Navlabour from "./Navlabour";
import Footerlabour from "./Footerlabour";
const TABLE_HEAD = ["UIN", "Name", "Job", "Action"];

const TABLE_ROWS = [
  {
    UIN:"1234",
    Name: "John Max",
    Job: "Wielding",
    Action:"Payment",
  },
  {
    UIN:"1234",
    Name: "John Max",
    Job: "Wielding",
    Action:"Payment",
  },
  {
    UIN:"1234",
    Name: "John Max",
    Job: "Wielding",
    Action:"Payment",
  },
  {
    UIN:"1234",
    Name: "John Max",
    Job: "Wielding",
    Action:"Payment",
  },
  {
    UIN:"1234",
    Name: "John Max",
    Job: "Wielding",
    Action:"Payment",
  },
];

function PaymentInitPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
 const [paymentAmount, setPaymentAmount] = useState('');
  const [otp, setOtp] = useState('');
  const openModal = (row) => {
    setSelectedRow(row);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedRow(null);
    setModalIsOpen(false);
  };

  return (
    <>
      <Navlabour />
      <div className="bg-blue-100 p-2 pb-4">
        <Card className="h-full sm:w-full md:w-4/5 overflow-scroll md:overflow-hidden py-3 mx-auto">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
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
                        Payment
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
              width: "300px",
              height: "300px",
              margin: "auto",
            },
          }}
        >
          <h2>Payment Modal</h2>
          <label>
            Payment Amount:
            <input
              type="number"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(e.target.value)}
            />
          </label>
          <label>
            OTP:
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </label>
          <div className="button-container">
            <button className="otp-button">Generate OTP</button>
            <button className="submit-button" onClick={closeModal}>
              Submit
            </button>
          </div>
        </Modal>
      </div>
      <Footerlabour />
    </>
  );
}


export default PaymentInitPage;
