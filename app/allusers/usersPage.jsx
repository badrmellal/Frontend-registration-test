'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';


const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/allusers');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
    };

    fetchUsers();
  }, []);

  const deleteUser = async (idUser) => {
    try {
      await axios.delete(`http://localhost:8080/api/delete/${idUser}`)
      window.location.reload();
    } catch (error) {
      console.error('Error deleting user: ', error);
    }
  }

  const verifyEmail = async(idUser)=> {
    try {
      window.location.href='/verifyemail';
    } catch (error) {
      console.error('Error verifying user: ', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">All Users</h1>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">

          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Username
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Photo
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Account status
              </th>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider" colSpan = "2">
                Options
              </th>
              
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.username}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.emailAddress}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                {user.photoBase64 && <img src={`data:image/png;base64,${user.photoBase64}`} alt="User" className='w=-16 h-16' />}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.emailVerified ? 'Verified' : 'Not verified'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className='px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2' 
                  onClick={()=>deleteUser(user.id)}> Delete</button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className='px-4 py-1 text-sm text-indigo-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-indigo-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2' 
                  onClick={() => verifyEmail(user.id)}> Verify Email</button>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};


export default UsersPage;
