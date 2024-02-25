import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faMoneyBillWave,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import image1 from "../assets/constuction1.jpg";
import image2 from "../assets/Construction2.jpeg";
import image3 from "../assets/constuction4.jpg";

const InfoCardLab = () => {
  const infoCardsData = [
    {
      name: "Construction Site",
      shortDescription:
        "Construction of residential complex.",
      address: "Sector 30, Vashi 400703",
      price: "Rs.500.99",
      images: [image1, image2, image3],
    },
  ];

  const [showApplyConfirm, setShowApplyConfirm] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleApplyClick = () => {
    // Show the confirmation dialog
    setShowApplyConfirm(true);
  };

  const handleConfirmApply = () => {
    // Close the confirmation dialog
    setShowApplyConfirm(false);

    // Perform the actual application logic here, e.g., send a request to the server.

    // Show the success alert
    setShowSuccessAlert(true);

    // Automatically hide the success alert after 3 seconds
    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 3000);
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap -mx-4">
          {infoCardsData.map((card, index) => (
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4" key={index}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Carousel showThumbs={false}>
                  {card.images.map((image, imageIndex) => (
                    <div key={imageIndex}>
                      <img
                        src={image}
                        alt={card.name}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  ))}
                </Carousel>
                <Link to="">
                  <div className="px-6 py-4">
                    <div className="text-xl font-semibold mb-2">
                      {card.name}
                    </div>
                    <p className="text-gray-700 text-base mb-2">
                      {card.shortDescription}
                    </p>
                    <div className="flex items-center mb-2">
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="text-red-500 mr-1"
                      />
                      {card.address}
                    </div>
                    <div className="flex items-center">
                      <FontAwesomeIcon
                        icon={faMoneyBillWave}
                        className="text-green-500 mr-1"
                      />
                      {card.price}
                    </div>
                  </div>
                </Link>
                <div className="px-6 py-4 bg-blue-600 transition-all duration-300 hover:bg-blue-700 hover:from-blue-700 hover:to-blue-800">
                  <button
                    className="w-full text-white font-semibold"
                    onClick={handleApplyClick}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Confirmation Dialog */}

      {showApplyConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded shadow-lg text-center">
            <p className="text-lg font-semibold mb-4">
              Are you sure you want to apply?
            </p>
            <div className="flex justify-center">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                onClick={() => setShowApplyConfirm(false)}
              >
                No
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={handleConfirmApply}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Alert */}
      {showSuccessAlert && (
        <div className="fixed top-0 right-0 m-4 bg-green-400 text-black px-4 py-2 rounded z-50">
          Successfully applied
        </div>
      )}
    </div>
  );
};

export default InfoCardLab;
