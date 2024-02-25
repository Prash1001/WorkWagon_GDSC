import React, { useState } from 'react';
import image1 from '../assets/coding.png';
import image2 from '../assets/businessman.png';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './responsive.css'

const Authentication = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [isFreelancer, setIsFreelancer] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  var image3 = image1;
  var image4 = image2;

  const navigate = useNavigate(); // Use useNavigate

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
    // Reset password fields when toggling
    setPassword('');
    setConfirmPassword('');
  };

  const handleFreelancerMode = () => {
    setIsFreelancer(true);
  };

  const handleEmployerMode = () => {
    setIsFreelancer(false);
  };

  const handleRegistration = () => {
    // Implement registration logic here
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    else  { navigate('/Signin/form');}

  };

  const handleLogin = () => {
    // Implement sign-in logic here
  };

  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 rounded" id='sign-0'>
      <p className="text-4xl font-bold " id='sign-4'>{isSignUp ? 'Register' : 'Login'}</p>
      <div className="bg-white p-8 rounded shadow-md w-2/4 h-auto mt-4" id='sign-1'>
        <div className="flex space-x-2 pb-5 pl-48" id='sign-2'>
          <button
            className={`py-3 px-4 rounded-full text-2xl flex  ${
              isFreelancer ? 'bg-blue-300 text-black' : 'bg-transparent text-black'
            }`}
            onClick={handleFreelancerMode}
          >   
           <img src={image3} alt='image1'className='w-9 h-7 pr-2' />   Freelancer      
          </button>

          <button
            className={`py-3 px-4 rounded-full text-2xl flex  ${
              isFreelancer ? 'bg-transparent  text-black ' : 'bg-blue-300 text-black'
            }`}
            onClick={handleEmployerMode}
          > 
           <img src={image4} alt='image1'className='w-9 h-7 pr-2' /> Employer
          </button>
        </div>

        <h2 className="text-2xl font-semibold mb-4">
          {isSignUp ? 'Register' : 'Login'} as {isFreelancer ? 'Freelancer' : 'Employer'}
        </h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg py-4 px-4 mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg py-4 px-4 mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignUp && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border rounded-lg py-4 px-4 mb-3"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <button
          className="w-full bg-blue-500 text-white py-4 rounded hover:bg-blue-600"
          onClick={isSignUp ? handleRegistration : handleLogin}
        >
          {isSignUp ? 'Register' : 'Login'}
        </button>
        <div className="mt-4 text-blue-500 cursor-pointer"  onClick={handleToggle}>
          {isSignUp ? 'Already have an account? Login' : 'Don\'t have an account? Register'}
        </div>
      </div>
    </div>
    </>
  );
};

export default Authentication;
