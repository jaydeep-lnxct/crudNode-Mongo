import logo from './logo.svg';
import './App.css';

import { FormGroup, FormControl, Input, FormLabel, styled, Button } from '@mui/material';
import { useState } from 'react';
import { addUser } from './service/api';

function App() {


const [user, setUser] = useState();
  const defauultUserDetails = {
    userName: '',
    email: '',
    password: ''
  };

  const [userDetails,setUserDetails] = useState(defauultUserDetails);
  const onChangeValue = (event) => {
    setUserDetails({...userDetails, [event.target.name]:event.target.value});
  };

  const addUserHander = async () => {
   await addUser(userDetails)
  }


  return (
    <div className="App">
     <FormGroup style={{ display: 'flex', flexDirection: 'column', width: '50%', margin: 'auto' }}>
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
            <Button variant="contained" onClick={()=> addUserHander()}>Contained</Button>
        </FormGroup>
    </div>
  );
}

export default App;
