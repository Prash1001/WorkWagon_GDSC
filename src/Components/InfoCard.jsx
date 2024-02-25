import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import is1 from '../assets/13.jpg';
import is2 from '../assets/14.jpg';
import is3 from '../assets/12.jpg';
import Filter from './filter';
import Navbar from './Navbar';

const InfoCard = () => {
  const infoCardsData = [
    {
      name: 'Build Basic Website',
      shortDescription: 'Professional Website Builder with 3 years of experience.',
      ratings: 4.5,
      ratingVotes: 100,
      price: 'Rs.500.99',
      images: [is1, is2, is3],
    },
  ];

  return (
    <div>
      <Navbar/>
      <Filter />
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap -mx-4">
          {infoCardsData.map((card, index) => (
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4" key={index}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Carousel showThumbs={false}>
                  {card.images.map((image, imageIndex) => (
                    <div key={imageIndex}>
                      <img src={image} alt={card.name} className="w-full h-48 object-cover" />
                    </div>
                  ))}
                </Carousel>
                <Link to="/information">
                  <div className="px-6 py-4">
                    <div className="text-xl font-semibold mb-2">{card.name}</div>
                    <p className="text-gray-700 text-base mb-2">{card.shortDescription}</p>
                    <div className="flex items-center mb-2">
                      <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
                      {card.ratings.toFixed(1)} ({card.ratingVotes})
                    </div>
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faMoneyBillWave} className="text-green-500 mr-1" />
                      {card.price}
                    </div>
                  </div>
                </Link>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
