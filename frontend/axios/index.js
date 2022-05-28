// ✨ implement axiosWithAuth

import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  if (!token) return false;

  console.log('token is:', token);

  return axios.create({
    headers: {
               Authorization: `${token}`,
             },

  });
}
