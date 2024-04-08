import { useRouter } from "next/navigation";

type loginType = {
  Email: string,
  Password: string
}
// 
export default function useLogin(initialState:loginType) {
  const login = useRouter()
  const handleLogin = () => {
    console.dir(initialState)
    for(let value of Object.values(initialState)){
      if(value){
        login.push('/admin')
      }
    }
  }
  return handleLogin
}
