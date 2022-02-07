import {
  Grid,
  Paper,
  Button,
  Typography,
  Link,
  TextField,
  MenuItem,
  Box,
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
    width: 800,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "black" };
  const btnstyle = { margin: "8px 0" };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telefono, setTelefono] = useState("");
  const [userTipo, setUserTipo] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validTelefono, setValidTelefono] = useState(false);
  const [validUserTipo, setValidUserTipo] = useState(false);
  const [touchedEmail,setTouchedEmail] = useState(false);
  const [touchedPassword,setTouchedPassword] = useState(false);
  const [touchedTelefono,setTouchTelefono] = useState(false);
  const [touchedUserTipo,setTouchUserTipo] = useState(false);

  const setValue = (value, control) => {
    if (control == "email") setEmail(value);
    if (control == "password") setPassword(value);
    if (control == "telefono") setTelefono(value);
    if (control == "userTipo") setUserTipo(value);
  };

  const emailValidation = () => {
    if (!email.match(/^[A-Za-z]{2,5}@[A-Za-z]{2,5}.com$/)) setValidEmail(false);
    else setValidEmail(true);
    setTouchedEmail(true)
  };

  const passValidation = () => {
    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/))
    setValidPassword(false);
    else setValidPassword(true);
    setTouchedPassword(true)
  };

  const phoneValidation = () => {
    if (!telefono.match(Number)) setValidTelefono(false);
    else setValidTelefono(true);
    setTouchTelefono(true)
  };

  /// Validar tipo de usuario

  const userValidation = () => {
    if (!userTipo)setValidUserTipo(false);
    else setValidUserTipo(true);
    setTouchUserTipo(true)
  };

  const register = () => {
    if (validEmail && validPassword && validTelefono && validUserTipo) {
      console.log({ email, password, telefono, userTipo });
    }
  };

  const array 

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockIcon />
          </Avatar>
          <h2>REGISTER</h2>
        </Grid>

        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          margin= "normal"
          autoComplete
          required
          error={(!validEmail)&&touchedEmail}
          onChange={(e) => {
            setValue(e.target.value, "email");
          }}
          onBlur={() => {
            emailValidation("email");
          }}
        />
        <TextField
         
          label="Password"
          placeholder="Enter password"
          type="password"
          margin= "normal"
          fullWidth
          error={(!validPassword)&&touchedPassword}
          autoComplete
          required
          onChange={(e) => {
            setValue(e.target.value, "password");
          }}
          onBlur={() => {
            passValidation("password");
          }}
        />

        <TextField 
          label="Telefono"
          placeholder="Telefono"
          type="text"
          fullWidth
          error={(!validTelefono)&&touchedTelefono}
         
          margin= "normal"
          autoComplete
          required
          onChange={(e) => {
            setValue(e.target.value, "telefono");
          }}
          onBlur={() => {
            phoneValidation("telefono ");
          }}
        />
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <TextField
            label="usuario"
            placeholder="usuario"
            type="text"
            error={(!validUserTipo)&&touchedUserTipo}
            margin= "normal"
            select={true}
            autoComplete
            fullWidth
            required
            onChange={(e) => {
              setValue(e.target.value, "usuario");
            }}
            onBlur={() => {
              userValidation("usuario");
            }}
          >
            <MenuItem value="colegios">colegios</MenuItem>
            <MenuItem value="padres">usuarios</MenuItem>
          </TextField>
        </Box>

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
          onClick={register}
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
          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default register;
