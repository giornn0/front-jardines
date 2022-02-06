import Image from "next/image";
import {
  Grid,
  Paper,
  Button,
  Typography,
  Link,
  TextField,
} from "@mui/material";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "black" };
  const btnstyle={margin:'8px 0'}
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validEmail, setValidEmail] = useState(true);

  const setValue = (value,control)=>{
    if(control =='email')setEmail(value)
    if(control =='password')setPassword(value)
  }
  const testValidation = (control)=>{
    if(control =='email' && !email.match(/^\w{2,5}@[A-Za-z]{2,5}\.com$/))setValidEmail(false)
    else setValidEmail(true)
    if(control =='password')setPassword(value)
  }
  const login=()=>{
    if(validEmail && validPassword){
      console.log({email,password})
    }
  }

  return (
    <Grid >
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
          required
          error={!validEmail}
          onChange={(e)=>{setValue(e.target.value,'email')}}
          onBlur={()=>{testValidation('email')}}
          />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          onChange={(e)=>{setValue(e.target.value,'password')}}
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button type="submit" color="primary" variant="contained" style={btnstyle} fullWidth onClick={login}>
          Sign In
        </Button>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ?<Link href="#">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
