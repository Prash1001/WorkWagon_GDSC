import React from 'react';
import magnifyingGlass from '../assets/magnifying-glass.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/i2.jpg';
import Navbar from './Navbar';
import image5 from '../assets/i1.jpg'
import image6 from '../assets/12.jpg';
import image7 from '../assets/13.jpg';
import image8 from '../assets/14.jpg';
import image9 from '../assets/14.png';
import image10 from '../assets/p12.png';
import image11 from '../assets/p0101.png';
import './responsive.css';
import Footerlabour from './Footerlabour';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {

  const [sliderSettings, setSliderSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3, // Default value for larger screens
  });

  useEffect(() => {
    const handleResize = () => {
      // Adjust settings based on window width
      setSliderSettings((prevSettings) => ({
        ...prevSettings,
        slidesToShow: window.innerWidth <= 420 ? 1 : 3,
      }));
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Call it initially to set the initial state
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <Navbar/>
      <div className='flex flex-col w-[100%] h-[100%]' id='home-over2' >
        <div className='flex w-[100%] h-[550px] bg-cover bg-no-repeat 'style={{ backgroundImage: `url(${image11})` }} >
          <div className='flex flex-col justify-center pl-16' id='home-over'>
            <p className='mb-5 text-black text-5xl font-bold font-["League Spartan"]'>
              Discover Your Perfect Service Instantly
            </p>
            <div className='flex items-center mb-4'>
              <div className='relative' id='home-search'>
                <input
                  type='text'
                  placeholder='Search...'
                  className='p-2  mr-2 border border-gray-300 rounded pr-8 pl-32'
                />
                <img src={magnifyingGlass} alt='search' className='absolute right-4 top-3 h-4 w-4 ' />
              </div>
            </div>
            <div id='home-but'> 
              <p className='mb-3 text-white '>Best-rated services :</p>
              <button className='bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce '>
                Web 
              </button>
              <button className='bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce ml-3'>
                Android 
              </button>
              <button className='bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce ml-3'>
                AI
              </button>
            </div>
          </div>
          <div className='flex justify-end' id='home-img1'>
            <img src={image10} alt='prashant' className='h-[800px] w-[120%]  object-cover pl-20 pr-20 py-0 pb-[300px]' />
          </div>
        </div>
        
        <div className='flex flex-col w-full h-[50%] '>
          <p className='w-full h-20 text-black text-4xl font-bold font-["League Spartan"] px-16 pt-20'>
            Popular Service:
          </p>
          <div className='pb-10 px-10 flex flex-col w-[100%] h-[100%] mt-20 justify-left' id='home-scroll'>
            <Slider {...sliderSettings} className=' w-[100%] h-full '>
              <div>
                <img src={image6} alt='prashant' className='w-full h-full object-cover p-2' />
              </div>
              <div>
                <img src={image7} alt='prashant' className='w-full h-full object-cover p-2' />
              </div>
              <div>
                <img src={image8} alt='prashant' className='w-full h-full object-cover p-2' />
              </div>
              <div>
                <img src={image9} alt='prashant' className='w-full h-full object-cover p-2' />
              </div>
            </Slider>
          </div>
        </div>
        <div className='p-14 relative' id='home-card'>
          <img className='w-full h-full object-cover' src={image1} alt='prashant' />
          <div className='absolute top-24 left-20 right-0 bottom-0 '>
            <p className=' w-80 text-white text-2xl font-bold font-["League Spartan"]'>For Clients : </p>
            <p className="w-[500px] pt-20 text-white text-5xl font-bold font-['League Spartan']">Find talent Your Way</p>
           
          </div><div className='flex items-center justify-center absolute top-[550px] left-20 right-0 bottom-0'>
          <Link to="/" className="font-poppins text-white">

          <div className='h-40 w-[300px] px-5 py-5 bg-sky-200 mr-40'>
          <div className='text-black text-4xl font-bold font-["League Spartan"]'>Post a Job and Hire</div>
          <div className='text-black text-3xl font-medium font-["League Spartan"] pt-3'>Create Posting</div>
         </div>
          </Link>
            <Link to="/" className="font-poppins text-white">

              <div className='h-40 w-[300px] px-5 py-5 bg-sky-200 mr-40'>
                <div className='text-black text-4xl font-bold font-["League Spartan"]'>Browse and Find Service</div>
                <div className='text-black text-3xl font-medium font-["League Spartan"] pt-3'>Service Posting</div>
                </div>
            </Link>
            <Link to="/" className="font-poppins text-white">

                <div className='h-40 w-[300px] px-5 py-5 bg-sky-200 mr-32 rounded-md'>
                   <div className='text-black text-4xl font-bold font-["League Spartan"]'>Bidding Page</div>
                   <div className='text-black text-3xl font-medium font-["League Spartan"] pt-3'>Set a Bid price</div>
                </div>
            </Link>
        </div>
        </div>
        <div className='p-14 relative' id='home-card1'>
          <img className='w-full h-full object-cover' src={image5} alt='prashant' />
          <div className='absolute top-24 left-20 right-0 bottom-0 '>
            <p className=' w-80 text-white text-2xl font-bold font-["League Spartan"]'>For Freelancer : </p>
            <p className="w-[500px] pt-20 text-white text-5xl font-bold font-['League Spartan']">Get Hired Easily</p>
           
          </div>
      <div className='flex items-center justify-center absolute top-[550px] left-20 right-0 bottom-0'>
          <Link to="/" className="font-poppins text-white">

            <div className='h-40 w-[300px] px-5 py-5 bg-sky-200 mr-40'>
              <div className='text-black text-4xl font-bold font-["League Spartan"]'>Find Opportunities</div>
              <div className='text-black text-3xl font-medium font-["League Spartan"] pt-3'>Search Posting</div>
           </div>
          </Link>
        <Link to="/" className="font-poppins text-white">
         <div className='h-40 w-[300px] px-7 py-5 bg-sky-200 mr-40'>
            <div className='text-black text-4xl font-bold font-["League Spartan"]'>Find Company Openings</div>
            <div className='text-black text-3xl font-medium font-["League Spartan"] pt-3'></div>
          </div>
        </Link>
          <Link to="/" className="font-poppins text-white">
            <div className='h-40 w-[300px] px-5 py-5 bg-sky-200 mr-32 rounded-md'>
              <div className='text-black text-4xl font-bold font-["League Spartan"]'>Bid for gig</div>
              <div className='text-black text-3xl font-medium font-["League Spartan"] pt-3'>Biddings page</div>
            </div>
          </Link>
          </div>

        </div>
      </div>
      <div className='lg:hidden' id='home-space'>
        <p id='home-tit'>For Clients :</p>
        <p id='home-tit'>Find talent Your Way</p>
        
          <span className=' items-center justify-center pl-5 top-[550px] left-20 right-0 bottom-0'>
          <Link to="/" className="font-poppins text-white">

          <div className='h-40 w-[300px] px-5 py-5 bg-sky-200 mr-40'>
          <p className='text-black text-4xl font-bold font-["League Spartan"]'>Post a Job and Hire</p>
          <p className='text-black text-3xl font-medium font-["League Spartan"] pt-3'>Create Posting</p>
         </div>
          </Link>
            <Link to="/" className="font-poppins text-white">
              <div className='h-40 w-[300px] px-5 py-5 bg-sky-200 mr-40'>
                <p className='text-black text-4xl font-bold font-["League Spartan"]'>Browse and Find Service</p>
                <p className='text-black text-3xl font-medium font-["League Spartan"] pt-3'>Service Posting</p>
                </div>
            </Link>
            <Link to="/" className="font-poppins text-white">

                <div className='h-40 w-[300px] px-5 py-5 bg-sky-200 mr-32 rounded-md'>
                   <p className='text-black text-4xl font-bold font-["League Spartan"]'>Bidding Page</p>
                   <p className='text-black text-3xl font-medium font-["League Spartan"] pt-3'>Set a Bid price</p>
                </div>
            </Link>
        </span>
        </div>
        <div className='lg:hidden' id='home-space'>
        <p id='home-tit'>For Freelancer :</p>
        <p id='home-tit'>Get Hired Easily</p>
        
          <span className=' items-center justify-center pl-5 top-[550px] left-20 right-0 bottom-0'>
          <Link to="/" className="font-poppins text-white">

          <div className='h-40 w-[300px] px-5 py-5 bg-sky-200 mr-40 '>
          <p className='text-black text-4xl font-bold font-["League Spartan"]'>Find Opportunities</p>
          <p className='text-black text-3xl font-medium font-["League Spartan"] pt-3'>Search Posting</p>
         </div>
          </Link>
            <Link to="/" className="font-poppins text-white">
              <div className='h-40 w-[300px] px-5 py-5 bg-sky-200 mr-40'>
                <p className='text-black text-4xl font-bold font-["League Spartan"]'>Find Company Openings</p>
                <p className='text-black text-3xl font-medium font-["League Spartan"] pt-3'></p>
                </div>
            </Link>
            <Link to="/" className="font-poppins text-white">

                <div className='h-40 w-[300px] px-5 py-5 bg-sky-200 mr-32 rounded-md'>
                   <p className='text-black text-4xl font-bold font-["League Spartan"]'>Bid For Gig</p>
                   <p className='text-black text-3xl font-medium font-["League Spartan"] pt-3'>Biddings Page</p>
                </div>
            </Link>
        </span>
        </div>
      <Footerlabour/>
    </>
  );
};

export default Home;
