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
import ContactMailIcon from "@mui/icons-material/ContactMail";

import { FormGeneral } from "../components/FormGeneral";
import {
  registerCampos,
  Register,
  Validator,
} from "../constants/registro/Registro";
const avatarStyle = { backgroundColor: "black" };
const btnstyle = { margin: "8px 0", color: "black", fontWeight: "bold" };


const SubmitActions = ({validForm}) => {
  const submit = ()=>{
    console.log('valid form, haciendo submit a API')
  }
  const alert = ()=>{
    console.log('invalid form, alertar campos faltantes/erroneos')
  }
  const isNotValid = ()=>{
    console.log(validForm,Object.values(validForm).some(state=> !state))
    return Object.values(validForm).some(state=> !state)
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
          onClick= {()=>{isNotValid()?alert():submit()}}
          // onBlur={()=>{validatation()}}
          className = "bg-[#141313] hover:bg-[#2546bd] active:bg-[#2546bd] focus:outline-none focus:ring"
        
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

const HeaderSection = () => {
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
  const [validated, setValidated] = useState(Register);

  const validation = (campo, valor)=>{
    if(valor?.length || Validator[campo]?.required) return valor?.match(Validator[campo]?.pattern)
    return true
  }

  useEffect(() => {
    // const name = validation('name',formData.name);
    // const address = validation('address',formData.address);
    // const phone = validation('phone',formData.phone);
    // const email = validation('email',formData.email);
    // const password = validation('password',formData.password);
    // const description = validation('description',formData.description);
    // const type = validation('type',formData.type);

    // const validObj={name,address,phone,email,password,description,type};
    /*
    Object.entries -> []todas los key-values donde cada indice es otro arreglo con el [key, value]
    {
      key1: value1
      key2: value2
      key3: value3
    }
    -> [[key1,value1],[key2,value2],[key3, value3]]
    */
   const validObj = {} 
    Object.entries(formData).forEach(([campo, valor])=>{
      validObj[campo] = validation(campo,formData[campo])?true:false;
    })
    setValidated(validObj)
  }, [formData]);

  return (
    <div className="flex flex-col min-h-screen h-max w-100 justify-center items-center">
      <FormGeneral
        camps={registerCampos}
        formData={formData}
        setFormData={setFormData}
        validator={Validator}
        header={<HeaderSection/>}
        submit={<SubmitActions validForm={validated}/>}
      ></FormGeneral>
    </div>
  );
}

export default register;
