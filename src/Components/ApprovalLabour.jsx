import React, { useState } from 'react';
import Navbar from './Navbar';
import Footerlabour from './Footerlabour';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillWave, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import './responsive.css'

function ApprovalLabour() {
  const jobApplicants = [
    {
      id: 1,
      name: 'John Doe',
      uid: '1234567890',
      gender: 'Male',
      status: 'pending',
    },
    {
      id: 2,
      name: 'Jane Doe',
      uid: '9876543210',
      gender: 'Female',
      status: 'pending',
    },
    // Add more applicants as needed
  ];
  const [applicants, setApplicants] = useState(jobApplicants);

  const handleAction = (applicantId, action) => {
    const updatedApplicants = applicants.map(applicant =>
      applicant.id === applicantId ? { ...applicant, status: action } : applicant
    );
    setApplicants(updatedApplicants);
  };

  return (
    <>
      <Navbar />
      <div className='p-5' id='overall'>
        <div className='flex flex-col sm:flex-row'>
          <div className='sm:ml-4'>
            <h1 className="text-3xl font-bold m-5 mb-4">Job Description: Senior React Developer</h1>

            <p className="text-gray-700 text-xl m-5 mb-8">
              <strong>Number Of Applications :- </strong> 2 
            </p>
            <div className="flex text-xl items-center m-5">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-500 mr-1" />
              <strong className='ml-3'>Sector 30, Vashi 400703</strong>
            </div>
            <div className="flex text-xl items-center m-5">
              <FontAwesomeIcon icon={faMoneyBillWave} className="text-green-500 mr-1" />
              <strong className='ml-3'>Rs. 500.99</strong>
            </div>
          </div>
        </div>
        <div className='w-full overflow-x-auto m-5'>
          <h1>Job Applicants</h1>

          <div className="overflow-x-auto" id='table'>
            <table className="w-[97%] bg-white border border-gray-300 text-center">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">UID (Mobile No.)</th>
                  <th className="py-2 px-4 border-b">Status</th>
                  <th className="py-2 px-4 border-b">Action</th>
                </tr>
              </thead>
              <tbody>
                {applicants.map(applicant => (
                  <tr key={applicant.id}>
                    <td className="py-2 px-4 border-b">{applicant.name}</td>
                    <td className="py-2 px-4 border-b">{applicant.uid}</td>
                    <td className="py-2 px-4 border-b">{applicant.status}</td>
                    <td className="py-2 px-4 border-b">
                      <button
                        className="bg-green-500 text-white px-2 py-1 mr-2 rounded-lg" id='accept'
                        onClick={() => handleAction(applicant.id, 'accepted')}
                      >
                        Accept
                      </button>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded-lg" id='decline'
                        onClick={() => handleAction(applicant.id, 'rejected')}
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footerlabour />
    </>
  );
}

export default ApprovalLabour;
