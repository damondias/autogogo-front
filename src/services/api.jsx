import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

function createConfig(token) {
    return {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
}

async function createUser(user) {
    await axios.post(`${BASE_URL}/sign-up`, user);
}
  
async function login(data) {
  const token = await axios.post(`${BASE_URL}/sign-in`, data);
  return token;
}

async function createReserve(token, carros, total) {
 
  const config = createConfig(token);
  await axios.post(`${BASE_URL}/reserve`, {carros, total}, config);

}

const api ={
    createUser,
    login,
    createReserve,

}

export default api;