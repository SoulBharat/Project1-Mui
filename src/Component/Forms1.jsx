import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';


const Forms1 = (props) => {
  const initialstate = { first_name: '', last_name: '', email: "" }
  const [info, setInfo] = useState(initialstate);
  const [infoerror, setInfoerror] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit(info);
  }

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
    console.log(info);
    setIsSubmit(true);
    setInfoerror(validate(info));


  }

  useEffect(() => {

    if (Object.keys(infoerror).length === 0 && isSubmit) {

    }

  }, [infoerror, isSubmit]);

  const validate = (values) => {
    const errors = {}
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

    if (!values.first_name) {
      errors.fname = "First name is not valid";
      setIsSubmit(false);
    }
    else if (values.first_name.length < 3) {
      errors.lname = "first name is not valid";
      setIsSubmit(false);
    }

    if (!values.last_name) {
      errors.lname = "last name is not valid";
      setIsSubmit(false);
    }
    else if (values.last_name.length < 3) {
      errors.lname = "last name is not valid";
    }
    if (!values.email) {
      errors.email = "email name is not valid";
      setIsSubmit(false);
    }
    else if (!regex.test(values.email)) {
      errors.email = " NOT VALID EMAIL ";
      setIsSubmit(false);
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
        <TextField label="First Name" name='first_name' variant="outlined" value={info.first_name} onChange={handleChange} />
        < br ></br>
        <p>{infoerror.lname}</p>
        <TextField label="Last Name" name="last_name" variant="outlined" value={info.last_name} onChange={handleChange} />
        <br></br>
        <p>{infoerror.email}</p>
        <TextField label="Email" name="email" variant="outlined" value={info.email} onChange={handleChange} />
        <br>
        </br>
        <Button disabled={!isSubmit} onClick={handleSubmit}>Save changes</Button>
      </Box>

    </>
  );
}

export default Forms1