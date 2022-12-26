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
    await axios.post(`${url}/delete`, { _id: value })
  } catch (error) {
    console.log("Error While Caling delete user Api", error)
  }
};

export const getSingleUser = async (id) => {
  try {
    return await axios.get(`${url}/${id}`)
  } catch (error) {
    console.log("Error While calling getSingleUser API")
  }
};


export const editUser = async (value,id) => {
  try {
    console.log(value,id)
    return axios.post(`${url}/${id}`, value)
  } catch (error) {
    console.log(error)
  }
};