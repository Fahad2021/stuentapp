import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from '@mui/material';
import React, { useState,useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import { getUser,editUser } from '../Service/api';


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

const EditUser = () => {
    const [user, setUser] = useState(initialvale)
    const navigate = useNavigate();
    const {id}=useParams();

    useEffect(()=>{
        getUserData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getUserData=async ()=>{
        let response=await getUser(id);
        // console.log(response);
        setUser(response.data)
    }

    const onChaneValue = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user);

        // console.log(e.target.name,e.target.value);
    }
    const Adduserdetails = async () => {
        await editUser(user,id)
        navigate('/all')
    }
    return (
        <div>
            <Container>
                <Typography variant='h5' >Edit User</Typography>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => onChaneValue(e)} name="name" value={user.name} />
                </FormControl>
                <FormControl>
                    <InputLabel>User Name</InputLabel>
                    <Input onChange={(e) => onChaneValue(e)} name="username" value={user.username} />
                </FormControl>
                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input onChange={(e) => onChaneValue(e)} name="phone" value={user.phone} />
                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e) => onChaneValue(e)} name="email" value={user.email} />
                </FormControl>
                <Button onClick={() => Adduserdetails()} variant='outlined' color='success'>Edit User</Button>
            </Container>
        </div>
    );
};

export default EditUser;