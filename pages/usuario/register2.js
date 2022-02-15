import {
    Avatar,
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    Link,
    Typography,
  } from "@mui/material";
  
  import LockIcon from "@mui/icons-material/Lock";
  import React,{ useEffect, useState } from "react";
  
  import { FormGeneral } from "../components/FormGeneral";
  import {
    registerCampos,
    Register,
    Validator,
  } from "../constants/registro/Registro";
  const avatarStyle = { backgroundColor: "black" };
  const btnstyle = { margin: "8px 0", color: "black", "font-weight": "bold" };
  
  
  const submitActions = () => {
    
   const inicialValue = {name: "",email: "",password:"",phone:"",address:"",description:""};
   const [formValues, setFormValues ] = useState(inicialValue);
  
  
  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormValues({...formValues,[ name]: value});
    
   }
   
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
         
        >
          Sign Up
        </Button>
        <Typography>
          <Link style={{ textDecoration: "none", color: "black" }}>
            Forgot password ?
          </Link>
        </Typography>
        <Typography>
          Do you have an account ?
          <Link to='/login' style={{ textDecoration: "none", color: "black" }}>
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
      <div className='flex flex-col min-h-screen h-max w-100 justify-center items-center'>
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
  