import { useEffect,useState } from "react";
import {Validator,registerCampos,Register} from '../constants/registro'
import {FormGeneral} from '../../components/FormGeneral'



const userEdit = () => {

    const [formData, setFormData] = useState(Register);
    useEffect (()=>{
      console.log(formData)
    },[formData])
  return (
    <div className="flex flex-col min-h-screen h-max w-100 justify-center items-center">
    <FormGeneral camps={registerCampos} formData={formData} setFormData={setFormData} validator={Validator} model={Register}></FormGeneral>
  </div>
  )
}


export default userEdit