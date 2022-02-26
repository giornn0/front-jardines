import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,Box
} from "@mui/material";
import Link  from "next/link";
import LockIcon from "@mui/icons-material/Lock";
import React, { useEffect, useState } from "react";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import { FormGeneral } from "../components/FormGeneral";
import {
  loginCampos,
  Login,
  Validator,
} from "../constants/registro/Registro";
const avatarStyle = { backgroundColor: "black" };



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
  <div className=' m-4'>
    <FormControlLabel
      control={<Checkbox name='checkedB'/>}
      label='Remember Me'
    />
        <Button
          type='submit'
          color='primary'
          variant='contained'
        
          fullWidth
          onClick= {()=>{isNotValid()?alert():submit()}}
          // onBlur={()=>{validatation()}}
         
         className= "bg-[#141313] hover:bg-[#2546bd] active:bg-[#2546bd]  font-bold focus:outline-none focus:ring "
        >
          Sign In
        </Button>
        <Typography>
          <Link href='#' className= "no-underlinee ">
            Forgot password ?
          </Link>
        </Typography>
        <Typography>
        
          <Link href='/register' className= "underlinee ">
          Do you have an account ?
          </Link>
        </Typography>
      </div>
    );
};

const HeaderSection = () => {
  return (
    <Box  height="12vh" display="flex" flexDirection="column" >
    <Grid className='mt-4' align='center'>
      <Avatar style={avatarStyle}>
        <LockIcon />
      </Avatar>
      <h2>LOGIN</h2>
    </Grid>
    </Box>
  );
};

function login() {
  const [formData, setFormData] = useState(Login);
  const [validated, setValidated] = useState(Login);

  const validation = (campo, valor)=>{
    if(valor?.length || Validator[campo]?.required) return valor?.match(Validator[valor]?.pattern)
    return true
  }

  useEffect(() => {
  
   const validObj = {} 
    Object.entries(formData).forEach(([campo, valor])=>{
      validObj[campo] = validation(campo,formData[valor])?true:false;
    })
    setValidated(validObj)
  }, [formData]);

  return (
    <div className="flex flex-col min-h-screen h-max w-100 justify-center items-center">
      <FormGeneral
        camps={loginCampos}
        formData={formData}
        setFormData={setFormData}
        validator={Validator}
        header={<HeaderSection/>}
        submit={<SubmitActions validForm={validated}/>}
      ></FormGeneral>
    </div>
  );
}

export default login;


 Login.getLayout = (page)=>page 