// App.js

import React from 'react';
import AuctionCard from './AuctionCard';
import UpAuctionCard from './UpAuctionCard'
import images from './assets/images.jpg'

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 ">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-blue-600 text-center">Live Auction</h1>
        {/* Live Auction Component */}
        <div className="bg-white p-4 rounded-md mb-4">
          {/* Auction Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AuctionCard
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGWhOkJo-qRIe8mlDYf_ClqnpAy88OnH2SIVdrDUv3-tMyKpXC_BG4otJSMP1AHICp7E&usqp=CAU"
            title="Full Stack Web Developer"
            createdBy="Accenture"
            currentBid="$100"
          />
          <AuctionCard
            imageSrc={images}
            title="Django Developer"
            createdBy="Microsoft"
            currentBid="$150"
          />
          <AuctionCard
            imageSrc={images}
            title="Backend Developer"
            createdBy="Steve Jobs"
            currentBid="$10"
          />
          <AuctionCard
            imageSrc={images}
            title="Keyboard Player"
            createdBy="Music Club"
            currentBid="$100"
          />
          <AuctionCard
            imageSrc={images}
            title="Maths Teacher"
            createdBy="Rehan Shah"
            currentBid="$100"
          />
          {/* Add more AuctionCard components as needed */}
        </div>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-blue-600 text-center">Upcoming Auction</h1>
        {/* Live Auction Component */}
        <div className="bg-white p-4 rounded-md mb-4">
          {/* Auction Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <UpAuctionCard
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGWhOkJo-qRIe8mlDYf_ClqnpAy88OnH2SIVdrDUv3-tMyKpXC_BG4otJSMP1AHICp7E&usqp=CAU"
            title="Photographer"
            createdBy="Accenture"
          />
          <UpAuctionCard
            imageSrc={images}
            title="Digital Artist"
            createdBy="Microsoft"
            currentBid="$150"
          />
          <UpAuctionCard
            imageSrc={images}
            title="Music Developer"
            createdBy="Microsoft"
            currentBid="$150"
          />
          {/* Add more AuctionCard components as needed */}
        </div>
        </div>


        
      </div>
    </div>
  );
};

export default App;
