import { Dispatch, SetStateAction } from "react";
import type { ChangeEvent } from "react"

export type handleChangeType = (e:ChangeEvent<HTMLInputElement>) => void
export type TextPropsTypes = {
   name: string
   placeholder?: string
   classValue?: string
   TextValue: string
   setTextValue: handleChangeType
   required?: boolean
}

export type passwordPropsTypes = {
   name: string
   placeholder?: string
   classValue?: string
   PasswordValue: string
   setPasswordValue: handleChangeType
   type: 'text' | 'password'
}


