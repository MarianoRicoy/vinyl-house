'use server';

import Axios from "axios";


export const axiosApiBack = Axios.create({
  baseURL: process.env.API_URL, //http://localhost:3002
});
