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
import { useState } from "react";
import { addUser } from "../service/api";



const InsertDataScreen = () => {

    const defauultUserDetails = {
        userName: "",
        email: "",
        password: "",
      };
      const [userData, setUserData] = useState([]);
    const [userDetails, setUserDetails] = useState(defauultUserDetails);
    const onChangeValue = (event) => {
      setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
    };

    const addUserHander = async () => {
        const v = await addUser(userDetails);
        if (v?.status === 201) {
          setUserData([...userData, userDetails]);
        }
      };

    return (
    
      <div className="App">
        <h1>Add User</h1>
        <FormGroup
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            margin: "auto",
          }}
        >
          <FormControl>
            <FormLabel>UserName</FormLabel>
            <Input onChange={(e) => onChangeValue(e)} name="userName" />
          </FormControl>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input onChange={(e) => onChangeValue(e)} name="email" />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input onChange={(e) => onChangeValue(e)} name="password" />
          </FormControl>
          <Button variant="contained" onClick={() => addUserHander()}>
            Contained
          </Button>
        </FormGroup>
      </div> 
    );
};

export default InsertDataScreen;