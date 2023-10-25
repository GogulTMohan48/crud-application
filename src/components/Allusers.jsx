import { useEffect, useState } from "react";
import { Button, Table, TableBody, TableCell, TableHead, TableRow, styled } from "@mui/material";
import { getUsers,deleteUser } from "../service/api";
import { Link } from "react-router-dom";

const Allusers = ()=>{
    const styledTable = styled(Table)`
    width:90%;
    margin:50px auto 0 auto;
    `;
    const Thead =styled(TableRow)`
    background: #000;
    & > th{
        color: #fff;
        font-size: 20px
    }`
    const Tbody =styled(TableRow)`
   
    & > td{
       
        font-size: 20px
    }`

    const [users,setUsers]= useState([])
    useEffect(()=>{
getUsersDetails();
    },[])
    const getUsersDetails = async ()=>{
        let respose = await getUsers();
        console.log(respose);
        setUsers(respose.data)
    }
    const deleteUserData = async(id)=>{
        await deleteUser(id);
        getUsersDetails();
    }
    return(
   <styledTable>
    <TableHead>
<Thead >
    <TableCell> Id </TableCell>
    <TableCell> Name</TableCell>
    <TableCell> Username</TableCell>
    <TableCell> Email </TableCell>
    <TableCell> Phone </TableCell>
    <TableCell></TableCell>

</Thead>
    </TableHead>
    <TableBody>
{
    users.map(user=>(
        <Tbody>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
                <Button variant="contained" style={{margin:"10px"}} component ={Link} to ={`/edit/${user.id}`}>Edit</Button>
                <Button variant="contained" color="secondary" onClick={()=> deleteUserData(user.id)}>Delete</Button>
            </TableCell>
        </Tbody>
    ))
}
    </TableBody>
   </styledTable>
    )
}
export default Allusers;