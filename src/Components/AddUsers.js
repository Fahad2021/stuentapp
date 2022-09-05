import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../Service/api';


const Container = styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
&>div{
    margin-top:20px;
}
`
const initialvale = {
    name: '',
    username: '',
    email: '',
    phone: ''

}

const AddUsers = () => {
    const [user, setUser] = useState(initialvale)
    const navigate = useNavigate();
    const onChaneValue = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user);

        // console.log(e.target.name,e.target.value);
    }
    const Adduserdetails = async () => {
        await addUser(user)
        navigate('/all')
    }
    return (
        <div>
            <Container>
                <Typography variant='h5' >Add User</Typography>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input required onChange={(e) => onChaneValue(e)} name="name" />
                </FormControl>
                <FormControl>
                    <InputLabel>User Name</InputLabel>
                    <Input required onChange={(e) => onChaneValue(e)} name="username" />
                </FormControl>
                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input required onChange={(e) => onChaneValue(e)} name="phone" />
                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input required onChange={(e) => onChaneValue(e)} name="email" />
                </FormControl>
                <Button onClick={() => Adduserdetails()} variant='outlined' color='success'>Add User</Button>
            </Container>
        </div>
    );
};

export default AddUsers;