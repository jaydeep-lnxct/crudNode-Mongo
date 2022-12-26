import React, { useEffect, useState } from "react";
import {
    Button,
    FormGroup,
    FormControl,
    Input,
    FormLabel,
} from "@mui/material";
import {  getSingleUser ,editUser} from "./service/api";
import { useLocation, useNavigate } from "react-router-dom";


const EditUser = ({}) => {
    const location = useLocation();
    const defauultUserDetails = {
        userName: "",
        email: "",
        password: "",
    };
    // const [userDetails, setUserDetails] = useState(defauultUserDetails);
    const [userData, setUserData] = useState(defauultUserDetails);
    const nav = useNavigate();



    useEffect(()=>{
        loadGetSingleUser();
    },[])

    const loadGetSingleUser = async () => {
        const response = await getSingleUser(location?.state?.id);
        setUserData(response?.data)
    };


    const onChangeValue = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };
    
    const editUserHandler =  async () => {
        await editUser(userData, location?.state?.id);
        nav('/result')
    };
    
    return (
        <div>
            <h1>Edit User</h1>
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
                    <Input onChange={(e) => onChangeValue(e)} name="userName" value={userData?.userName}/>
                </FormControl>

                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input onChange={(e) => onChangeValue(e)} name="email" value={userData?.email} />
                </FormControl>

                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input onChange={(e) => onChangeValue(e)} name="password" value={userData?.password} />
                </FormControl>
                <Button variant="contained" onClick={()=> editUserHandler()} >
                    Contained
                </Button>
            </FormGroup>
        </div>
    )
};

export default EditUser