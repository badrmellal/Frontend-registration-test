/*
  This form requires some changes to your config:
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
*/
'use client'

import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import { useRouter } from 'next/navigation';


const CreateuserDetailsReceived = () => {

    const [userDetailsReceived, setuserDetailsReceived] = useState({
      username:'',
      about:'',
      photo: '',
      firstName:'',
      lastName:'',
      emailAddress:'',
      password:'',
      country:'Other',
      city:'',
      phoneNumber:0,
      pushNotification:''
    })

    const router = useRouter();


    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setuserDetailsReceived({ ...userDetailsReceived, [name]: value });
    };
  

    let photoBase64;
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => { photoBase64 = reader.result.split(',')[1];
        setuserDetailsReceived({ ...userDetailsReceived, photo: photoBase64 });
        //now this can be used in json payload 
      }
        reader.readAsDataURL(file);
    };
    }


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
    console.log('Updated userDetailsReceived:', userDetailsReceived);
      const payload = JSON.stringify(userDetailsReceived);
    console.log('this is the final payload: '+ payload);

    const response = await axios.post('http://localhost:8080/api/createuser', payload, 
    {
      headers: {
        'Content-Type': 'application/json',
      }
    }
    );
    router.push('/verifyemail');
    return response.data;

  } catch (error) {
    console.error('Error creating user.', error);

    if (error.response) {
      console.error('Server responded with an error:', error.response.data);
    } else if (error.request) {
      console.error('No response received from the server');
    } else {
      console.error('Error setting up the request:', error.message);
    }
  }
  
 };

    
return (
  <>
<form onSubmit={ handleFormSubmit }>
<div className="space-y-12">
  <div className="border-b border-gray-900/10 pb-12">
    <h2 className="text-base mt-4 font-semibold leading-7 text-gray-900">Profile</h2>
    <p className="mt-1 text-sm leading-6 text-gray-600">
      This information will be saved securely in our database.
    </p>

    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-4">
        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
          Username
        </label>
        <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">badrmellal.com/</span>
            <input
              type="text"
              name="username"
              value={userDetailsReceived.username}
              onChange={ handleInputChange }
              id="username"
              autoComplete="username"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="badrmellal" 
            />
          </div>
        </div>
      </div>

      <div className="col-span-full">
        <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
          About
        </label>
        <div className="mt-2">
          <textarea
            id="about"
            name="about"
            rows={2}
            type="text"
            value={userDetailsReceived.about}
            onChange={ handleInputChange }
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <p className="mt-3 text-sm leading-6 text-gray-600">Write a few words about yourself.</p>
      </div>


    <div className="col-span-full">
      <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
    Photo
      </label>
       <div className="mt-2">
       <div className="flex items-center gap-x-3">
      <input type='file' name='photo' id='photo' onChange={ handleFileChange }/>
      
      {userDetailsReceived.photo && <img src={userDetailsReceived.photo} alt="Selected" />}


    </div>
      </div>
    </div>

    </div>
  </div>


  <div className="border-b border-gray-900/10 pb-12">
    <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
    <p className="mt-1 text-sm leading-6 text-gray-600">Use an email where you can confirm it's you.</p>

    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-3">
        <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
          First name
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={userDetailsReceived.firstName}
            onChange={handleInputChange}
            autoComplete="given-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-3">
        <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
          Last name
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={userDetailsReceived.lastName}
            onChange={handleInputChange}
            autoComplete="family-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-4">
        <label htmlFor="emailAddress" className="block text-sm font-medium leading-6 text-gray-900">
          Email address
        </label>
        <div className="mt-2">
          <input
            id="emailAddress"
            name="emailAddress"
            type="email"
            value={userDetailsReceived.emailAddress}
            onChange={handleInputChange}
            autoComplete="email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-2 sm:col-start-1">
        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900" style={{ display: 'inline-block', width: '100px' }}>
          Password
        </label>
        <div className="mt-2">
          <input
            type="password"
            name="password"
            id="password"
            value={userDetailsReceived.password}
            onChange={handleInputChange}
            autoComplete="passwords.password"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-3">
        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
          Country
        </label>
        <div className="mt-2">
          <select
            id="country"
            name="country"
            value={userDetailsReceived.country}
            onChange={handleInputChange}
            autoComplete="country-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="Morocco">Morocco</option>
            <option value="Italy">Italy</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>


      <div className="sm:col-span-2 sm:col-start-1">
        <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
          City
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="city"
            id="city"
            value={userDetailsReceived.city}
            onChange={handleInputChange}
            autoComplete="address-level2"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

        <div className="sm:col-span-2">
         <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">
      Phone Number
         </label>
      <div className="mt-2">
    <input
      type="tel"
      name="phoneNumber" 
      id="phoneNumber"   
      value={userDetailsReceived.phoneNumber}
      onChange={handleInputChange}
      pattern='[0-9]*'
      autoComplete="tel"  // Using "tel" for phone number autocomplete
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
      </div>
       </div>


  
    </div>
  </div>



  <div className="border-b border-gray-900/10 pb-12">
    <h2 className="text-base font-semibold leading-7 text-gray-900">Updating you</h2>
    <p className="mt-1 text-sm leading-6 text-gray-600">
      We'll always let you know about important changes, but you pick either Phone number or Email adress.
    </p>

    <div className="mt-10 space-y-10">
      
      <fieldset>
        <div className="mt-6 space-y-6">
          <div className="flex items-center gap-x-3">
            <input
              id="pushPhone"
              name="pushPhone"
              type="radio"
              value="phone"
              checked={userDetailsReceived.pushNotification === 'Phone'}
              onChange={handleInputChange}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label htmlFor="pushPhone" className="block text-sm font-medium leading-6 text-gray-900">
               Delivered via SMS to your mobile phone.
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="pushEmail"
              name="pushEmail"
              type="radio"
              value="email"
              checked={userDetailsReceived.pushNotification === 'Email Address'}
              onChange={handleInputChange}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label htmlFor="pushEmail" className="block text-sm font-medium leading-6 text-gray-900">
              Delivered via email to your email address.
            </label>
          </div>
          
        </div>
      </fieldset>
    </div>
  </div>
</div>

<div className="mt-6 mb-3 flex items-center justify-end gap-x-6">
  <button type="button" className="px-4 py-2 text-sm text-indigo-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-indigo-600 hover:border-transparent focus:outline-none focus:ring-3 focus:ring-indigo-600 focus:ring-offset-3" onClick={()=> window.location.reload()}>
    Cancel
  </button>
  <button
    type="submit"
    className="rounded-full transition  bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
    Save
  </button>
</div>
</form>
</> 
         )

        };
     

export default CreateuserDetailsReceived;
