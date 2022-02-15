import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import {useEffect, useState } from "react";

import { FormGeneral } from "../components/FormGeneral";
import {loginCampos, Login, Validator} from "../constants/registro/Registro"
const avatarStyle = { backgroundColor: "black" };
const btnstyle = { margin: "8px 0",color:"black","font-weight":"bold" };

const submitActions = ()=>{
  return (
    <div className="p-2">
    <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={Login}
        >
          Sign In
        </Button>
        <Typography>
          <Link style={{ textDecoration: "none", color: "black" }}>
            Forgot password ?
          </Link>
        </Typography>
        <Typography >
          Do you have an account ?
          <Link to="/register" style={{ textDecoration: "none", color: "black" }}>
            Sign Up
          </Link>
        </Typography>
    </div>)
}
const headerSection = ()=>{
  return (
    <Grid className="mt-4" align="center">
    <Avatar style={avatarStyle}>
      <LockIcon />
    </Avatar>
    <h2>LOGIN</h2>
  </Grid>
  )
}

function login(){
  const [formData, setFormData] = useState(Login);
  useEffect (()=>{
    console.log(formData)
  },[formData])
  return (
  <div className="flex mt-8 flex-col min-h-screen h-max w-100 justify-center items-center">
    <FormGeneral camps={loginCampos} formData={formData} setFormData={setFormData} validator={Validator} model={Login} header={headerSection()} submit={submitActions()}></FormGeneral>
  </div>
  );
};
  
export default login;
  
