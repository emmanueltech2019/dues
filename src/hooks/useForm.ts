import { useState } from "react";
import { handleChangeType } from "@/types/forms";

type FormValues = {
   [key: string]: string
}

export default function useForm<T extends FormValues>(initialValues: T){
   const [values, setValues] = useState<T>(initialValues)

   const handleChange:handleChangeType = (e) => {
      setValues({...values, [e.target.name]: e.target.value})
   }

   const resetForm = () => {
      setValues(initialValues)
   }

   return {values, handleChange, resetForm}
}