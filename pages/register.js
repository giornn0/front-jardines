import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import Link  from "next/link";
import LockIcon from "@mui/icons-material/Lock";
import React, { useEffect, useState } from "react";

import { FormGeneral } from "../components/FormGeneral";
import {
  registerCampos,
  Register,
  Validator,
} from "../constants/registro/Registro";
const avatarStyle = { backgroundColor: "black" };
const btnstyle = { margin: "8px 0", color: "black", "font-weight": "bold" };

const submitActions = () => {
  const inicialValue = {
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    description: "",
  };
  const [formValues, setFormValues] = useState(inicialValue);

  const handleChange = (e) => {
  
     const {name , email,password,phone,address,description,value} = e.target; 
     setFormValues({...formValues,[{ name, email, password, phone, address, description}] : value }); 
   
  };


const validatation = (values) => {
  let errors = {};

  if (!Validator.name) {
    errors.name = "Name is required";
  }
  if (!Validator.email) {
    errors.email = "Email is Required";
  } else if (/^[A-Za-z.0-9]{3,30}@[A-Za-z.]{3,30}\.(com|net)(\.(ar|cl|ur))?$/.test(values.email)
  ) errors.email = 'Email is invalid'
  {
    if (!Validator.password) {
      errors.password = "Password is Required";
  } else if(values.password < 6){
    errors.password = 'Password must be more than six characters.'
  }
  if (!Validator.phone) {
    errors.phone = "Phone is required";
  }
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
          <Link href='#' style={{ textDecoration: "none", color: "black" }}>
            Forgot password ?
          </Link>
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
        <h2>REGISTER</h2>
      </Grid>
    );
  };

function register() {
  const [formData, setFormData] = useState(Register);
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <div className="flex flex-col min-h-screen h-max w-100 justify-center items-center">
      <FormGeneral
        camps={registerCampos}
        formData={formData}
        setFormData={setFormData}
        validator={Validator}
        model={Register}
        header={headerSection()}
        submit={submitActions()}
      ></FormGeneral>
    </div>
  );
}

export default register;
