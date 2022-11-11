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
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';




const Tables1 = () => {
  const [Users, setUsers] = useState([]);
  const [rowData, setRowData] = useState(null)
  useEffect(() => {
    fetch('https://reqres.in/api/users/')
      .then((response) => response.json())
      .then((res) => { setUsers(res.data) });
  }, [setUsers]);

  console.log(Users);


  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "100px",
        }}
      >
      
        <TableContainer component={Paper}>
          <Table sx={{}} aria-label="simple table">
            <TableHead>
              <TableRow className="tab1">
                <TableCell
                  align="center"
                  style={{ fontSize: "1.3rem", color: "white" }}
                >
                  Id
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontSize: "1.3rem", color: "white" }}
                >
                  Avatar
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontSize: "1.3rem", color: "white" }}
                >
                  Email
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontSize: "1.3rem", color: "white" }}
                >
                  First&nbsp;Name
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontSize: "1.3rem", color: "white" }}
                >
                  Last&nbsp;Name
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontSize: "1.3rem", color: "white" }}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Users &&
                Users.map((curr) => (
                  <TableRow key={curr.id}>
                    <TableCell component="th" scope="row" align="center">
                      {curr.id}
                    </TableCell>
                    <TableCell className="avatar-alignment" align="right">
                      <Avatar alt="Yo" src={curr.avatar} />
                    </TableCell>
                    <TableCell align="center">{curr.email}</TableCell>
                    <TableCell align="center">{curr.first_name}</TableCell>
                    <TableCell align="center">{curr.last_name}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="text"
                        onClick={() => {
                          handleClickOpen();
                          setRowData(curr);
                        }}
                        startIcon={<EditIcon fontSize="large" />}


                      ></Button>
                      <Button
                        variant="text"
                        startIcon={<DeleteIcon fontSize="large" />}
                      ></Button>


                    </TableCell>
                    {console.log(curr.id)}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      {
        <Action1
          open={open}
          rowData={rowData}
        />
      }
    </>
  );
}

export default Tables1;