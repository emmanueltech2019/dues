'use client'
import Image from "next/image";
import logo from './assets/logo.png'
import Text from "@/components/forms/Text";
import Password from "@/components/forms/Password";
import useForm from "@/hooks/useForm";
import useToggle from "@/hooks/useToggle";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import CustomImage from "@/components/image/CustomImage";
import ClickButton from "@/components/buttons/ClickButton";
import useLogin from "@/hooks/useLogin";


const classValues = "outline-0 bg-[#fbfbfb] border border-[#e3e3e3] h-[46px] rounded shadow-none w-full py-[0.375rem] px-[0.75rem] appearance-none leading-loose"

export default function Login() {
   const { values, handleChange, resetForm } = useForm({ Email: '', Password: '' })
   const [ state, toggleState ] = useToggle(false)
   const login = useLogin;
   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
   }
   return (
      <section className="w-screen min-h-screen flex justify-center items-center bg-[#F7F7F7] flex-wrap relative" id="dashboard">
         <aside className="login px-[15px] w-full max-w-[333.22px] lg:max-w-[510px] relative">
            <div className="form-logo w-[100px] relative mx-auto mb-[30px]">
               <CustomImage img={logo} classvalues="form-logo-image" />
            </div>
            <div className="form-data p-[30px] bg-[#FFFFFF] border border-[#ededed] shadow-sm shadow-[rgba(0, 0, 0, 0.2)] overflow-hidden rounded">
               <form onSubmit={handleSubmit} className="login-form">
                  <h1 className="text-[26px] text-center mb-[5px] font-medium">Login</h1>
                  <h3 className="text-[#888888] text-lg mb-[30px] text-center">Access to our dashboard</h3>
                  <div className="col flex flex-col pb-[1.5rem]">
                     <label htmlFor="Email" className="text-base font-normal py-[7px]">Email Address</label>
                     <Text name="Email" TextValue={values.Email} required classValue={classValues} setTextValue={handleChange} />
                  </div>
                  <div className="col pb-[1.5rem]">
                     <div className="label flex justify-between text-base font-normal py-[7px]">
                        <label htmlFor="Password">Password</label>
                        <Link href='/forgotPassword' className="text-[#888888]">Forgot password?</Link>
                     </div>
                     <div className="input relative">
                        <Password type={state ? "text" : "password"} classValue={classValues} name="Password" PasswordValue={values.Password} setPasswordValue={handleChange} />
                        <button title="click" onClick={toggleState} className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
                           <FontAwesomeIcon icon={state ? faEyeSlash : faEye} className="" />
                        </button>
                     </div>
                  </div>
                  <div className="pb-[1.5rem] w-full">
                     <ClickButton x={26} y={10} fontSize={22} handleClick={login(values)}>Login</ClickButton>
                  </div>
               </form>
            </div>
         </aside>
      </section>
   )
}
