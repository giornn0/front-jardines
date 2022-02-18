import AccountCircle from "@mui/icons-material/AccountCircle";
import ContactsIcon from "@mui/icons-material/Contacts";
import ContactMailIcon from "@mui/icons-material/ContactMail";

export const registerCampos = [
  {
    control: "name",
    label: "Name",
    icon: <ContactsIcon sx={{ color: "action.active", mr: 1, my: 2 }} />,
  },
  {
    control: "address",
    label: "Address",
    icon: <ContactMailIcon sx={{ color: "action.active", mr: 1, my: 2 }} />,
  },
  {
    control: "phone",
    label: "Phone",
    icon: <ContactMailIcon sx={{ color: "action.active", mr: 1, my: 2 }} />,
  },
  {
    control: "email",
    label: "Email",
    icon: <ContactMailIcon sx={{ color: "action.active", mr: 1, my: 2 }} />,
  },

  {
    control: "password",
    type:'password',
    label: "Password",
    icon: <ContactMailIcon sx={{ color: "action.active", mr: 1, my: 2 }} />,
  },

  {
    textarea: true,
    control: "description",
    label: "Description",
  },
  {
    options: [
      {
        value: "owner",
        label: "create school",
      },
      {
        value: "parent",
        label: "search school",
      },
    ],
    label: "What are you looking for?",
    control: "type",
    icon: <ContactMailIcon sx={{ color: "action.active", mr: 1, my: 2 }} />,
  },
];

export const loginCampos = [
  {
    control: "email",
    label: "Email",
    icon: <ContactMailIcon sx={{ color: "action.active", mr: 1, my: 2 }} />,
  },

  {
    control: "password",
    label: "Password",
    icon: <ContactMailIcon sx={{ color: "action.active", mr: 1, my: 2 }} />,
  },
];

export const Register = {
  name: "",
  email: "",
  password: "",
  phone: "",
  address: "",
  description: "",
  type: "",
};

export const Login = {
  email: "",
  password: "",
  state: true,
};

export const Validator = {
  type: { required: true, pattern: /^[A-Za-z]{5,10}$/ },
  name: { required: true, pattern: /^[A-Za-z ]{3,55}$/ },
  address: { required: true, pattern: /^[A-Za-z0-9 ]{5,255}$/ },
  description: { required: true, pattern: /^[A-Za-z ]{5,255}$/ },
  phone: { required: true, pattern: /^\+?[0-9 ]{3,15}$/ },
  email: {
    required: true,
    pattern: /^[A-Za-z.0-9]{3,30}@[A-Za-z.]{3,30}\.(com|net)(\.(ar|cl|ur))?$/,
  },
  password: {
    required: true,
    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,
  },
};
