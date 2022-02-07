import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import MenuItem from "@mui/material/MenuItem";
import Fab from '@mui/material/Fab';
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormHelperText from '@mui/material/FormHelperText';
import { useEffect, useState } from "react";

const InputPersonal = ({
  textarea,
  value,
  icon,
  control,
  label,
  variant,
  options,
  handleChange,
  setFormData
}) => {
  const defaultChange = (e)=>{
    setFormData((prevs)=>({...prevs, [control]: e.target.value}))
  }
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      {icon}
      <TextField
        id={control}
        select={options?true:false}
        multiline={textarea?true:false}
        // error
        rows={textarea?5:0}
        value={value}
        id={control}
        label={label}
        variant={variant ? variant : "standard"}
        margin='normal'
        onChange={handleChange?handleChange:defaultChange}
        fullWidth
      >
        {options && (
          <MenuItem key="default" value={''}>
            Seleccione ..
          </MenuItem>)
        }{options?.map((option) => (
            <MenuItem key={`${option.value}-select`} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </TextField>
    </Box>
  );
};

export const FormGeneral = ({ camps, setFormData,model,validator,formData ,submit = true }) => {
  const [validated, setValidated] = useState(model);
  const validation = (control)=>{
    if(formData[control]?.length || validator[control]?.required) return formData[control]?.match(validator[control]?.pattern)
    return true
  }
  // useEffect(() => {
  //   const status = {}
  //   if(model)Object.keys(model).forEach(control=> status[control]= validation(control)?true:false)
  //   console.log(status)
  //   console.log(formData)
  // }, [formData]);
  return (
    <Card sx={{ maxWidth: 500 }} className='w-screen' elevation={9}>
      <CardContent className='mt-3'>
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          {camps?.map((value, index) => (
            <div key={`control-${index}`}>
              <InputPersonal {...value} setFormData={setFormData} value={formData[value.control]} ></InputPersonal>
              {/* <FormHelperText  className="text-red-600" id={`${value.control}-text`}>Revisar Campo!</FormHelperText> */}
            </div>
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
