import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

function createConfig(token) {
    return {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
}



const api ={

    //  vai as funçoes de chamar a API
}
export default api