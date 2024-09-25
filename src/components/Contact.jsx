import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import gmailIcon from '../assets/gmail.svg';

const Contact = () => {
  return (
    <div id="contact" className="text-center px-4 mt-20 mb-20">
      <h1 className="text-5xl font-bold mb-10">Let's get connected!</h1>
      <h2 className="lg:text-2xl mb-10">
        Feel free to reach out anytime – I'm here to help with your project!
      </h2>

      <div className="max-w-xl mx-auto bg-gradient-to-r from-red-500 to-pink-600 bg-opacity-75 backdrop-blur-sm shadow-lg rounded-lg p-8">
        <h3 className="text-4xl font-bold text-center text-white mb-4">Contact Information</h3>
        
        <div className="mb-6 text-center flex flex-col items-center">
          <img src={gmailIcon} alt="gmail" className="w-8 mb-2" />
          <h4 className="text-xl font-semibold text-white mb-1">Email</h4>
          <p className="text-lg text-white mb-5">mr.funy408@gmail.com</p>
          <a href="mailto:mr.funy408@gmail.com" className="inline-block bg-white hover:bg-opacity-80 text-black font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105">
            Send Email
          </a>
        </div>

        <hr className="border-white opacity-40 my-6" />

        <div className="text-center flex flex-col items-center">
          <FontAwesomeIcon icon={faTelegram} className="text-white text-3xl mb-2" />
          <h4 className="text-xl font-semibold text-white mb-1">Telegram</h4>
          <p className="text-lg text-white mb-5">@RulFreelancer</p>
          <a href="http://t.me/RulFreelancer" target="_blank" rel="noopener noreferrer" className="inline-block bg-white hover:bg-opacity-80 text-black font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105">
            Message on Telegram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;