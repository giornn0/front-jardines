import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
  TextField,Avatar,FormControlLabel
} from "@mui/material";
import Link  from "next/link";
import LockIcon from "@mui/icons-material/Lock";
import React, { useEffect, useState } from "react";

import { FormGeneral } from "../components/FormGeneral";
import {
 loginCampos,
  Login,
  Validator,
} from "../constants/registro/Registro";
const avatarStyle = { backgroundColor: "black" };
const btnstyle = { margin: "8px 0", color: "black", "font-weight": "bold" };

const submitActions = () => {
  const inicialValue = {
    
    email: "",
    password: "",
    
  };
  const [formValues, setFormValues] = useState(inicialValue);


  const handleChange = (e) => {
  
     const { email,password,value} = e.target; 
     setFormValues({...formValues,[{ email, password}] : value }); 
   
  };


const validatation = (values) => {
  let errors = {};
  


  if (!Validator.email) {
    errors.email = "Email is Invalid";
  } 
  
    if (!Validator.password) {
      errors.password = "Password is Invalid ";
  } 
 

return errors
};

const handleSubmit = (e) => {
  e.preventDefault();
}
return (
  <div className='p-5'>
    <FormControlLabel
      control={<Checkbox name='checkedB' color='primary' />}
      label='Remember me'
    />
        <Button
          type='submit'
          color='primary'
          variant='contained'
          style={btnstyle}
          fullWidth
          onClick= {handleChange}
          onSubmit = {handleSubmit}
          onBlur={()=>{validatation()}}
          
        >
          Sign Up
        </Button>
        <Typography>
          <Link  href='#' style={{ textDecoration: "none",color:'black' }} >Forgot password ?</Link>
        </Typography>
        <Typography>
          Do you have an account ?
          <Link href='/login' style={{ textDecoration: "none", color: "black" }}>
            Sign In
          </Link>
        </Typography>
      </div>
    );
  };


  const headerSection = () => {
    return (
      <Grid className='mt-4' align='center'>
        <Avatar style={avatarStyle}>
          <LockIcon />
        </Avatar>
        <h2>LOGIN</h2>
      </Grid>
    );
  };

function login() {
  const [formData, setFormData] = useState(Login);
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <div className="flex flex-col min-h-screen h-max w-100 justify-center items-center">
      <FormGeneral
        camps={loginCampos}
        formData={formData}
        setFormData={setFormData}
        validator={Validator}
        model={Login}
        header={headerSection()}
        submit={submitActions()}
      ></FormGeneral>
    </div>
  );
}

export default login;


/* Login.getLayout = (page)=>page */