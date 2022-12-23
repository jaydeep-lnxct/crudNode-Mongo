import React, { useEffect } from 'react'
import {
  Button,
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
      <h1 style={{ textAlign: 'center', marginTop: "30px", marginBlock: "30px" }}> Show User</h1>
      <div style={{ margin: "auto" }}>
        <Table>
          <TableHead>
            <TableRow style={{ background: '#000', color: "#fff" }}>
              <TableCell style={{ color: "#fff" }}>ID</TableCell>
              <TableCell style={{ color: "#fff" }}>User Name</TableCell>
              <TableCell style={{ color: "#fff" }}>Email</TableCell>
              <TableCell style={{ color: "#fff" }}>Password</TableCell>
              <TableCell style={{ color: "#fff" }} colSpan={2} align="center">
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
                    align="center"
                  >
                    <Button variant="outlined" color="error" onClick={() => deleteUserHandler(value._id)}>delete</Button>

                    <Button style={{marginLeft:"24px"}} variant="outlined" size="medium" onClick={() => updateUerHandler(value._id)}>update</Button>

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