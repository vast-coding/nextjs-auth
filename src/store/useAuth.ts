import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useAuthStore } from './useAuthStore'

const useAuth = () => {
  const [userName, setUserName] = useState('kminchelle')
  const [userPassword, setUserPassword] = useState('0lelplR')

  type InputEvent = React.ChangeEvent<HTMLInputElement>
  const updateUserName = (event: InputEvent) => {
    setUserName(event.target.value)
  }
  const updatePassword = (event: InputEvent) => {
    setUserPassword(event.target.value)
  }
  const router = useRouter()

  // import state from AuthStore
  const setUser = useAuthStore((state) => state.setUser)
  const setAuthentication = useAuthStore((state) => state.setAuthentication)

  const login = async () => {
    // do a post call to the auth endpoint
    const res = await fetch('https://dummyjson.com/auth/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: userName,
        password: userPassword,
      }),
    })

    if (!res.ok) {
      return console.error(res)
    }

    const data = await res.json()

    if (data) {
      console.log({ data })
      setUser(data)
      setAuthentication(true)
      setCookie('token', data?.token)
      router.push('/') // redirect to home page
    }
  }
  return { login, updateUserName, updatePassword, userName, userPassword }
}
