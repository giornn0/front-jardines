import { useEffect, useState } from "react";

import {colegioCampos, Colegio, Validator} from "../../constants/colegio/Colegio"
import {FormGeneral} from '../../components/FormGeneral'


export default function FormColegio(){
  const [formData, setFormData] = useState(Colegio);
  return (
    <div className="flex flex-col min-h-screen h-max w-100 justify-center items-center mt-24">
      <FormGeneral camps={colegioCampos} formData={formData} setFormData={setFormData} validator={Validator} model={Colegio}></FormGeneral>
    </div>
  )
}