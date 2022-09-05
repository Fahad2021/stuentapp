import styled from '@emotion/styled';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUsers,deleteUser } from '../Service/api';

const StyledTable=styled(Table)`
width:95%;
margin:30px auto 0 auto`;

const Thead=styled(TableRow)`
background:#000;
&>th{
    color:#fff;
    font-size:20px;
}`
const Tbody=styled(TableRow)`
&>td{
    font-size:20px
}`
const AllUser = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getUserDetails();

    })

    const getUserDetails = async () => {
        let response = await getUsers();
        console.log(response);
        setUsers(response.data)
    }

    const deleteUserData=async(id)=>{
        await deleteUser(id);
        getUserDetails();
    }

    return (
        <div>
            <StyledTable>
                <TableHead>
                    <Thead>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell></TableCell>
                    </Thead>
                </TableHead>
                <TableBody>
                    {
                        users.map(user => (
                            <Tbody>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>
                                    <Button variant='contained' style={{marginRight:20}} onClick={()=>deleteUserData(user.id)}>Delete</Button>
                                    <Button variant='contained' color="secondary" component={Link} to={`/edit/${user.id}`}>Edit</Button>
                                </TableCell>
                            </Tbody>
                        ))
                    }
                </TableBody>
            </StyledTable>
        </div>
    );
};

export default AllUser;