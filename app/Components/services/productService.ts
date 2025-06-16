import axios from 'axios';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/users/login`;

export const getProducts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};
