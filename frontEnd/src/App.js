import "./App.css";
import {
  FormGroup,
  FormControl,
  Input,
  FormLabel,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { addUser, deleteUser, getUser, updateUser } from "./service/api";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction } from "./redux/reducer";

import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
  Router,
} from "react-router-dom";

import Dashboard from "./dashboard";
import InsertDataScreen from "./insertScreen";

const App = () => {
  const [userData, setUserData] = useState([]);
  const defauultUserDetails = {
    userName: "",
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState(defauultUserDetails);
  const onChangeValue = (event) => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const addUserHander = async () => {
    const v = await addUser(userDetails);
    if (v?.status === 201) {
      setUserData([...userData, userDetails]);
    }
  };

  const getAllUsers = async () => {
    const users = await getUser();
    setUserData(users?.data);
    dispatch(addUserAction(users?.data));
  };

  // Delete user
  const deleteUserHandler = async (value) => {
    await deleteUser(value);
    getAllUsers();
  };

  // Update user
  const updateUerHandler = async (value) => {
    await updateUser(value);
  };

  const userSelector = useSelector((state) => state?.value);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InsertDataScreen />} />
        <Route path="/result" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
