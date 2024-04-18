import { useRouter } from "next/navigation";
import axios from "axios";

type loginType = {
  email: string,
  password: string
}
// 

export default function useLogin(initialState: loginType, url: string, redirect: string, token: string) {
  const login = useRouter()
  const handleLogin = () => {
    if (initialState.email && initialState.password) {
      let data;
      axios.post(url, initialState).then(res => {
        data = res.data;
        localStorage.setItem(token+'Token', data.token)
        login.push(`/${redirect}`)
      }).catch((err) => {
        console.log(err)
      })
    }


  }
  return handleLogin
}
