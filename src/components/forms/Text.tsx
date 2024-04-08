import type { TextPropsTypes } from "@/types/forms"
 

export default function Text({ name, placeholder, TextValue, setTextValue, classValue, required }:TextPropsTypes) {
  return <input type="text" title="fill in" name={name} id={name} placeholder={placeholder} value={TextValue} required={required} onChange={setTextValue} className={classValue} />
}
