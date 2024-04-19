import { useRouter } from "next/navigation";
import axios from "axios";
import { companies } from '../app/(dashboard)/super/components/AdminObj';

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
        localStorage.setItem(token+'company', data.company)
        login.push(`/${redirect}`)
      }).catch((err) => {
        console.log(err)
      })
    }


  }
  return handleLogin
}
