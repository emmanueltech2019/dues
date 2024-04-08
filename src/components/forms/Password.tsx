import type { passwordPropsTypes } from "@/types/forms"

export default function Password({ name, PasswordValue, setPasswordValue, type, classValue }:passwordPropsTypes) {
  return (
    <input type={type} name={name} id={name} value={PasswordValue} onChange={setPasswordValue} required={true} className={classValue} style={{
      paddingRight: 30
    }}  />
  )
}
