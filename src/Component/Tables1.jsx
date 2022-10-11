import * as React from 'react';
import { Table, TableBody, Avatar, Container } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import Action1 from "./Action1"
import "./tabstyle.scss"








const Tables1 = () => {
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://reqres.in/api/users/')
      .then((response) => response.json())
      .then((res) => { console.log(res); setUsers(res.data) });
  }, [setUsers]);



  return (
    <>
      <Container
        sx={{
          display: 'flex',
          justifyContent: "center",
          padding: "100px"


        }}>
        <TableContainer component={Paper}>
          <Table sx={{}} aria-label="simple table">
            <TableHead >
              <TableRow className='tabs'>
                <TableCell align="center" style={{ fontSize: '1.3rem' }}>Id</TableCell>
                <TableCell align="center" style={{ fontSize: '1.3rem' }}>Avatar</TableCell>
                <TableCell align="center" style={{ fontSize: '1.3rem' }}>Email</TableCell>
                <TableCell align="center" style={{ fontSize: '1.3rem' }}>First&nbsp;Name</TableCell>
                <TableCell align="center" style={{ fontSize: '1.3rem' }}>Last&nbsp;Name</TableCell>
                <TableCell align="center" style={{ fontSize: '1.3rem' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {console.log(Users)}
              {Users.map(
                (curr) => (
                  <TableRow
                    key={curr.id}>
                    <TableCell component="th" scope="row" align="center">
                      {curr.id}
                    </TableCell>
                    <TableCell align="center"><Avatar alt="Yo" src={curr.avatar} /></TableCell>
                    <TableCell align="center">{curr.email}</TableCell>
                    <TableCell align="center">{curr.first_name}</TableCell>
                    <TableCell align="center">{curr.last_name}</TableCell>
                    <TableCell align="center">{<Action1 />}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

export default Tables1;