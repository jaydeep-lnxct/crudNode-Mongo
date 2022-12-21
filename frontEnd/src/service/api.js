import axios from 'axios';
const url = "http://localhost:8080";

export const addUser = async (data) => {
    try {
      return await axios.post(`${url}/adduser`, data)
    }catch(err) {
        console.log("Error While Caling add user Api",err)
    }
};