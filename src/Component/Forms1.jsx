
import * as React from 'react';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';


const Forms1 = (props) => {
  const initialstate = { fname: '', lname: '', email: "" }
  const [info, setInfo] = useState(initialstate);
  const [infoerror, setInfoerror] = useState({});
  const [isSubmit, setIssubmit] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(info);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
    console.log(info);




  }
  const handlerror = () => {
    setInfoerror(validate(info));
    setIssubmit(true);
  }
  useEffect(() => {

    if (Object.keys(infoerror).length === 0 && isSubmit) {
    }
  }, [infoerror]);
  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.fname) {
      errors.fname = "First name is not valid";
    }
    else if (values.fname.length < 3) {
      errors.lname = "last name is not valid";
    }

    if (!values.lname) {
      errors.lname = "last name is not valid";
    }
    else if (values.lname.length < 3) {
      errors.lname = "last name is not valid";
    }
    if (!values.email) {
      errors.email = "email name is not valid";
    }
    else if (!regex.test(info.email)) {
      errors.email = " NOT VALID EMAIL ";
    }
    return errors;
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
        <p>{infoerror.fname}</p>
        <TextField label="First Name" name='fname' variant="outlined" value={info.fname} onChange={() => { handleChange(), handlerror() }} />
        < br ></br>
        <p>{infoerror.lname}</p>
        <TextField label="Last Name" name="lname" variant="outlined" value={info.lname} onChange={handleChange} />
        <br></br>
        <p>{infoerror.email}</p>
        <TextField label="Email" name="email" variant="outlined" value={info.email} onChange={handleChange} />
        <button onClick={handleSubmit} > Submit</button>
      </Box>

    </>
  );
}

export default Forms1