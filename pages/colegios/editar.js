import AccountCircle from "@mui/icons-material/AccountCircle";
import ContactsIcon from "@mui/icons-material/Contacts";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import {FormGeneral} from '../../components/FormGeneral'

export default function FormColegio(){
  const testing = [
    {
      select: true,
      value: 2,
      options: [
        {
          value: 1,
          label: "Ttes",
        },
        {
          value: 2,
          label: "cruai",
        },
        {
          value: 52,
          label: "fakj",
        },
      ],
      label: "Testing",
      control: "testing",
      icon: <ContactMailIcon sx={{ color: "action.active", mr: 1, my: 2 }} />,
    },
    {
      label: "Testing 1",
      control: "testing1",
      icon: <ContactsIcon sx={{ color: "action.active", mr: 1, my: 2 }} />,
    },
    {
      label: "Testing 2",
      control: "testing2",
      icon: <AccountCircle sx={{ color: "action.active", mr: 1, my: 2 }} />,
    },
    {
      select: true,
      value: 2,
      options: [
        {
          value: 1,
          label: "Ttes",
        },
        {
          value: 2,
          label: "cruai",
        },
        {
          value: 52,
          label: "fakj",
        },
      ],
      label: "Testing",
      control: "testing",
      icon: <ContactMailIcon sx={{ color: "action.active", mr: 1, my: 2 }} />,
    },
   
  ];
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <FormGeneral camps={testing}></FormGeneral>
    </div>
  )
}