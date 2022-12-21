import logo from './logo.svg';
import './App.css';

import { FormGroup, FormControl, Input, FormLabel, styled, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';
import { addUser, getUser } from './service/api';


function App() {

  const [user, setUser] = useState();
  const defauultUserDetails = {
    userName: '',
    email: '',
    password: ''
  };

  const [userDetails, setUserDetails] = useState(defauultUserDetails);
  const onChangeValue = (event) => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };

  const addUserHander = async () => {
    await addUser(userDetails)
  }

  useEffect(()=> {
    getAllUsers();
  },[])

  const getAllUsers = async () =>{
    await getUser();
  }

  return (
    <div className="App">
      <h1>Add User</h1>
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
        <Button variant="contained" onClick={() => addUserHander()}>Contained</Button>
      </FormGroup>



      <div>
        <h1>Show User</h1>
        <div style={{ marginTop: '30px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>User Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Password</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default App;
