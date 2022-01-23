import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import MenuItem from "@mui/material/MenuItem";
import Fab from '@mui/material/Fab';
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const InputPersonal = ({
  value,
  icon,
  control,
  label,
  variant,
  select,
  options,
}) => {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      {icon}
      <TextField
        select={select}
        value={value}
        id={control}
        label={label}
        variant={variant ? variant : "standard"}
        margin='normal'
        fullWidth
      >
        {options?.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export const FormGeneral = ({ camps, submit = true }) => {
  
  return (
    <Card sx={{ maxWidth: 500 }} className='w-screen' elevation={9}>
      <CardContent className='mt-3'>
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          {camps?.map((value, index) => (
            <InputPersonal key={index} {...value}></InputPersonal>
          ))}
        </Box>
      </CardContent>
      {submit && (
        <CardActions className='flex justify-between mt-3 w-full'>
          <Fab className="hover:bg-rose-700 text-rose-100  bg-red-400 m-3 w-full" variant='extended' color='error' aria-label='add'>
            <CancelTwoToneIcon sx={{ mr: 1 }} />
            Cancelar
          </Fab>
          <Fab className="bg-indigo-500  hover:text-rose-100 m-3 w-full" variant='extended' color='primary' aria-label='add'>
            <AddBoxTwoToneIcon sx={{ mr: 1 }} />
            Crear
          </Fab>
        </CardActions>
      )}
    </Card>
  );
};
