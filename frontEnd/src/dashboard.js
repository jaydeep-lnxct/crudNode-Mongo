import React, { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUser, updateUser } from './service/api';
import { addUserAction } from './redux/reducer';


const Dashboard = () => {
  const dispatch = useDispatch();
  const userSelector = useSelector((state) => state?.value);
  
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const users = await getUser();
    dispatch(addUserAction(users?.data));
  }

  // Delete user
  const deleteUserHandler = async (value) => {
    await deleteUser(value);
      getAllUsers();      
  }

  // Update user
  const updateUerHandler = async (value) => {
    await updateUser(value);
  };

  return (
    <div>
      <h1>Show User</h1>
      <div style={{ marginTop: "30px", margin: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Password</TableCell>
              <TableCell colSpan={2} align="center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userSelector?.map((value, i) => {
              return (
                <TableRow key={i}>
                  <TableCell align="left">{value._id}</TableCell>
                  <TableCell align="left">{value.userName}</TableCell>
                  <TableCell align="left">{value.email}</TableCell>
                  <TableCell align="left">{value.password}</TableCell>
                  <TableCell
                    align="left"
                    onClick={() => deleteUserHandler(value._id)}
                  >
                    delete
                  </TableCell>
                  <TableCell
                    align="left"
                    onClick={() => updateUerHandler(value._id)}
                  >
                    update
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Dashboard