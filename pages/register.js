import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import {useEffect, useState } from "react";

import { FormGeneral } from "../components/FormGeneral";
import {loginCampos, Register, Validator} from "../constants/registro/Registro"
const avatarStyle = { backgroundColor: "black" };
const btnstyle = { margin: "8px 0",color:"black","font-weight":"bold" };

const submitActions = ()=>{
  return (
    <div className="p-5">
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
          onClick={Register}
        >
          Sign Up
        </Button>
        <Typography>
          <Link style={{ textDecoration: "none", color: "black" }}>
            Forgot password ?
          </Link>
        </Typography>
        <Typography >
          Do you have an account ?
          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            Sign In
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
    <h2>REGISTER</h2>
  </Grid>
  )
}

function register(){
  const [formData, setFormData] = useState(Register);
  console.log(Register)
  useEffect (()=>{
    console.log(formData)
  },[formData])
  return (
  <div className="flex mt-8 flex-col min-h-screen h-max w-100 justify-center items-center">
    <FormGeneral camps={loginCampos} formData={formData} setFormData={setFormData} validator={Validator} model={Register} header={headerSection()} submit={submitActions()}></FormGeneral>
  </div>
  );
};
  
export default register;
  
