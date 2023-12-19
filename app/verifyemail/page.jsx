'use client'

import axios from "axios";
import { useState } from "react";


const VerifyEmail = () => {
    const [userToken, setuserToken] = useState('');
  
    const verificationToken = async () => {
      try {
        if (userToken) {
            console.log('function called');
          const response = await axios.get(`http://localhost:8080/api/verify-email/${userToken}`);
          setuserToken(response.data);
        }
      } catch (error) {
        console.error('Error verifying email:', error);
        setuserToken('Error verifying email. Please try again.');
      }
    };
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log('Submit button clicked!');
      await verificationToken();
    };
  
    return (
      <div className="mt-6 flex flex-col items-center bg-white">
        <p className="absolute px-6 py-8 shadow-xl flex items-center space-x-4 bg-white border border-gray-200 rounded-md">
          Please check your email to verify your account
        </p>
  
        <form className="mt-6 flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="mt-12">
            <input
              type="text"
              name="verifyemail"
              value={userToken}
              onChange={(e)=>setuserToken(e.target.value)}
              className="block rounded-md border-1 border-gray-300 py-2 px-6 w-96 mt-12 focus:outline-none focus:border-indigo-600"
              placeholder="Enter your verification code here"
            />
          </div>
  
          <button
            type="submit"
            className="px-4 py-2 mt-8 text-sm text-white bg-indigo-500 font-semibold rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
          >
            Submit
          </button>
          <button
            onClick={()=> window.location.href='/'}
            type="button"
            className="px-4 py-2 mt-4 text-sm text-white bg-indigo-500 font-semibold rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
          >
            Cancel
          </button>
        </form>
  
        <div className="mt-4">
          {userToken && <p className="text-red-500">{userToken}</p>}
        </div>
      </div>
    );
  };
  
  export default VerifyEmail;
  
