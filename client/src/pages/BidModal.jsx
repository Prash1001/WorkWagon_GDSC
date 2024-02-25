// BidModal.js

import React, { useState } from 'react';

const BidModal = ({ isOpen, onClose, auctionDetails }) => {
  const [bidAmount, setBidAmount] = useState('');

  const handlePlaceBid = () => {
    // Add logic for placing the bid here
    console.log(`Placing bid for ${bidAmount}`);
    // You may want to send the bid to your backend or update the state accordingly
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ${isOpen ? 'visible' : 'invisible'}`}>
      <div className="bg-white p-6 rounded-md max-w-lg">
        <img src={auctionDetails.imageSrc} alt={auctionDetails.title} className="w-48 h-48 object-cover mb-4 rounded-md mx-auto" />
        <h2 className="text-lg font-semibold mb-2 text-blue-800 text-center">{auctionDetails.title}</h2>
        <div className="details text-center">
          <p className="text-sm text-gray-700 mb-2 flex items-center justify-center">
            <div className="w-8 h-8 overflow-hidden rounded-full mr-4">
              <img src={auctionDetails.createdByImage} alt="Profile Pic" className="w-full h-full object-cover" />
            </div>
            <span className='text-center'>Created by:</span>
            <span className="ml-2"><span className='font-bold'>{auctionDetails.createdBy}</span></span>
          </p>
          <p className="text-sm text-gray-700 mb-2 text-center">Current Bid: <span className='font-bold'>{auctionDetails.currentBid}</span></p>
          <p className="text-sm text-gray-700 mb-4 text-center">Description: The project will now be available locally on the domain auctionweb.site in your browser. If you are using Google Chrome you may have to type "thisisunsafe" while on the page to bypass a security warning</p>
          <label htmlFor="bidAmount" className="block text-sm text-gray-700 mb-2">
            Enter Bid Amount:
          </label>
          <input
            id="bidAmount"
            type="number"
            placeholder="Enter Bid Amount"
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
            className="w-full border p-2 mb-4 rounded-md"
          />
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handlePlaceBid}
          >
            Place Bid
          </button>
          <button
            className="text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default BidModal;
