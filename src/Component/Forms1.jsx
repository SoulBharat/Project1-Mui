
import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
const Forms1 = (props) => {

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({ fname, lname, email });

  }

  return (
    <>

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off">

        <div>
          <TextField id="outlined-basic" label="First Name" variant="outlined" value={fname} onChange={(e) => { setFname(e.target.value) }} />
        </div>
        <br></br>
        <div>
          <TextField id="outlined-basic" label="Last Name" variant="outlined" value={lname} onChange={(e) => { setLname(e.target.value) }} />
        </div>
        <br></br>
        <div>
          <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        </div>
        <button onClick={handleSubmit} > Submit</button>
      </Box>



    </>
  );
}
export default Forms1