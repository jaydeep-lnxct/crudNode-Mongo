import axios from 'axios';
const url = "http://localhost:8080";

export const addUser = async (data) => {
  try {
    return await axios.post(`${url}/adduser`, data)
  } catch (err) {
    console.log("Error While Caling add user Api", err)
  }
};

export const getUser = async () => {

  try {
   return await axios.get(`${url}/getuser`)
  }
  catch (error) {
    console.log("Error While Caling get user Api", error)
  }
};

export const deleteUser = async (value) => {
  try {
    console.log("Delete", value)
    return await axios.delete(`${url}/${value}`)
  } catch (error) {
    console.log("Error While Caling delete user Api", error)
  }
};


export const updateUser = async (value) => {
  try {
    console.log("updateUser")
  } catch (error) {
    console.log("Error While Caling update user",error)
  }
};
