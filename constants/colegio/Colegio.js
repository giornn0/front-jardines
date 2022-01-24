import AccountCircle from "@mui/icons-material/AccountCircle";
import ContactsIcon from "@mui/icons-material/Contacts";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import { tipoOptions } from "./tipoOptionsColegio";

export const colegioCampos = [
  {
    options: tipoOptions,
    label: "Tipo",
    control: "tipo",
    icon: <ContactMailIcon sx={{ color: "action.active", mr: 1, my: 2 }} />,
  },
  {
    control: "nombre",
    label: "Nombre",
    icon: <ContactsIcon sx={{ color: "action.active", mr: 1, my: 2 }} />,
  },
  {
    control: "domicilio",
    label: "Domicilio",
    icon: <ContactMailIcon sx={{ color: "action.active", mr: 1, my: 2 }} />,
  },
  {
    control: "telefono",
    label: "Teléfono",
    icon: <ContactMailIcon sx={{ color: "action.active", mr: 1, my: 2 }} />,
  },
  {
    control: "email",
    label: "Email",
    icon: <ContactMailIcon sx={{ color: "action.active", mr: 1, my: 2 }} />,
  },
  {
    textarea:true,
    control: "descripcion",
    label: "Descripción",
  },
 
];

export const Colegio = {
  tipo:'',
  nombre:'',
  estado:true,
  domicilio:'',
  descripcion:'',
  telefono:'',
  email:'',
}
export const Validator = {
  tipo:{required:true,pattern:/^[A-Za-z]{6,10}$/},
  nombre:{required:true,pattern:/^[A-Za-z ]{3,55}$/},
  domicilio:{required:true,pattern:/^[A-Za-z0-9 ]{3,255}$/},
  descripcion:{required:true,pattern:/^[A-Za-z ]{3,255}$/},
  telefono:{required:true,pattern:/^\+?[0-9 ]{3,15}$/},
  email:{required:true,pattern:/^[A-Za-z.]{3,30}@[A-Za-z.]{3,30}\.(com|net)(\.(ar|cl|ur))?$/},
}
