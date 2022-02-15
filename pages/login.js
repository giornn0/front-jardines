
import {
  Grid,
  Paper,
  Button,
  Typography,
  TextField,Avatar,FormControlLabel
} from "@mui/material";
import  Link  from "next/link";
import Checkbox from "@material-ui/core/Checkbox";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";

export default function Login (){
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 500,
  };
  const avatarStyle = { backgroundColor: "black" };
  const btnstyle={margin:'8px 0'}
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [validEmail,setValidEmail] = useState(false);
  const [validPassword,setValidPassword] = useState(false);
  const [touchedEmail,setTouchedEmail] = useState(false);
  const [touchedPassword,setTouchedPassword] = useState(false);


   const setValue = (value,control) =>{
    if(control == 'email')setEmail(value)
    if(control == 'password')setPassword(value)
  }

  const emailValidation = () =>{
    if(!email.match(/^[A-Za-z]{2,5}@[A-Za-z]{2,5}.com$/))setValidEmail(false)
    else setValidEmail(true)
    setTouchedEmail(true)
  }
  

 const passValidation = () =>{
   console.log(password)
   if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/))setValidPassword(false)
   else setValidPassword(true)
   setTouchedPassword(true)
 }

  const login = () =>{
   if(validEmail && validPassword) {
     console.log({email,password})
   }
  }


  

  //uses state y validar cuando quiera mandar que sea un mail y una contrasena
  return (
    <Grid className="flex flex-row pt-24 justify-center">
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}>
            <LockIcon />
          </Avatar>
          <h2>SIGN IN</h2>
        </Grid>
        <TextField 
        className="mb-4"
          label="Username"
          placeholder="Enter username"
          fullWidth
          margin= "normal"
          autoComplete
          required
          error={(!validEmail)&&touchedEmail}
          onChange = {(e) => {setValue(e.target.value)}}
          onBlur={()=>{emailValidation("email")}}
          />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          autoComplete
          required
          error={(!validPassword)&&touchedPassword}
          onChange = {(e) => {setValue(e.target.value)}}
          onBlur={()=>{passValidation()}}
        />
        <FormControlLabel
          control={<Checkbox name="checkedB"  />}
          label="Remember me"
        />
        <Button type="submit" variant="contained" className= 'bg-[#000]  py-0 px-7 mx-4 rounded-lg cursor-pointer hover:bg-[#2546bd]'   style={btnstyle} fullWidth onClick={login}>
          Sign In
        </Button>
        <Typography>
          <Link  href='#' style={{ textDecoration: "none",color:'black' }} >Forgot password ?</Link>
        </Typography>
        <Typography>
         
          Do you have an account ?
          <Link  href='/register'style={{ textDecoration: "none",color:'black' }}>Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

Login.getLayout = (page)=>page


