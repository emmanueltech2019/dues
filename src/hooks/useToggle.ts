import { useState } from "react"
type defaultValueType = boolean
export default function useToggle(defaultValue: defaultValueType) {
   const [state, setState] = useState(defaultValue)
   const toggleState = () => { state ? setState(false) : setState(true) }
   const result: [boolean, () => void] = [state, toggleState]
   return result
}