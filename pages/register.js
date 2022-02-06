
import {
    Grid,
    Paper,
    Button,
    Typography,
    Link,
    TextField,
    TextareaAutosize,
    Select,
  } from "@mui/material";
  import FormControlLabel from "@material-ui/core/FormControlLabel";
  import Checkbox from "@material-ui/core/Checkbox";
  import Avatar from "@mui/material/Avatar";
  import LockIcon from "@mui/icons-material/Lock";
  import { useState } from "react";
  const register = () => {
    const paperStyle = {
      padding: 20,
      height: "90vh",
      width: 600,
      margin: "20px auto",
    };
    const avatarStyle = { backgroundColor: "black" };
    const btnstyle={margin:'8px 0'}
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [validEmail,setValidEmail] = useState(true);
    const [validPassword,setValidPassword] = useState(true);
    const [validTelefono,setTelefono] =useState(true)
    const [validUserTipo,setUserTipo] =useState(true)
  
  
     const setValue = (value,control) =>{
      if(control == 'email')setEmail(value)
      if(control == 'password')setPassword(value)
      if(control == 'telefono')setTelefono(value)
      if(control == 'userTipo')setUserTipo(value)
    }
  
    const testValidation = (control) =>{
      if(control == 'email' && !email.match(/^[A-Za-z]{2,5}@[A-Za-z]{2,5}.com$/))setValidEmail(false)
       else setValidEmail(true)
       if(control == 'password')setValidEmail(value)
    }
   
  
   const testValidation2 = (control) =>{
     if(control == 'password' && !password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/))setPassword(false)
     else setValidPassword(true)
   }
   
   const testValidation3 = (control) =>{
    if(control == 'telefono' && !telefono.match(Number))setTelefono(false)
   else elsesetTelefono(true)
  }

  const testValidation4 = (control) =>{
    if(control == 'password' && !password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/))setPassword(false)
    else setValidPassword(true)
  }



  
    const register = () =>{
     if(validEmail && validPassword && validTelefono) {
       console.log({email,password,telefono})
     }
    }
  
  
    //uses state y validar cuando quiera mandar que sea un mail y una contrasena
    return (
      <Grid >
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}>
              <LockIcon />
            </Avatar>
            <h2>REGISTER</h2>
          </Grid>
          <TextField
            label="Username"
            placeholder="Enter username"
            fullWidth
            required
            error={!validEmail}
            onChange = {(e) => {setValue(e.target.value,'email')}}
            onBlur={()=>{testValidation('email')}}
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            onChange = {(e) => {setValue(e.target.value,'telefono')}}
            onBlur={()=>{testValidation3('telefono')}}
          />

      <TextField
            label="Telefono"
            placeholder="Telefono"
            type="text"
            fullWidth
            required
            onChange = {(e) => {setValue(e.target.value,'telefono')}}
            onBlur={()=>{testValidation4('telefono ')}}
          />

       <TextField
            label="usuario"
            placeholder="usuario"
            type="text"
           fullWidth
            required
            onChange = {(e) => {setValue(e.target.value,'usuario')}}
            onBlur={()=>{testValidation4('telefono ')}}
          />
          
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button type="submit" color="primary" variant="contained" style={btnstyle} fullWidth onClick={register}>
          Sign Up
          </Button>
          <Typography>
            <Link style={{ textDecoration: "none",color:'black' }} >Forgot password ?</Link>
          </Typography>
          <Typography>
           
            Do you have an account ?<Link  to='/login'style={{ textDecoration: "none",color:'black' }}>Sign Up</Link>
            
          </Typography>
        </Paper>
      </Grid>
    );
  };
  
  export default register;
  