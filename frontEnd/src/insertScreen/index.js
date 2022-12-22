import {
    FormGroup,
    FormControl,
    Input,
    FormLabel,
    Button,
    Stack,
    SnackbarContent,
    Snackbar,
    IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../service/api";
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const action = (
    <Button color="secondary" size="small">
        lorem ipsum dolorem
    </Button>
);


const InsertDataScreen = () => {
    const [open, setOpen] = React.useState(false);
    const nav = useNavigate()

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

        setOpen(true);
       
    };

    return (

        <><Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={() => setOpen(false)}
            action={<React.Fragment>
                Click To Show Result
                
                <Button color="inherit" size="large" onClick={() => setOpen(false)}>
                    <ShareIcon onClick={()=> nav("/result")}/>
                </Button>
               
            </React.Fragment>} /><div className="App">
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
            </div></>
    );
};

export default InsertDataScreen;