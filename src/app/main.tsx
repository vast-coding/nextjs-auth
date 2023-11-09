'use client'

import Navbar from '@/components/Navbar'
import { useAuthStore } from '@/store/useAuthStore'
import { getCookie } from 'cookies-next'
import { useEffect } from 'react'

type TMain = { children: React.ReactNode }

export default function Main({ children }: TMain) {
  const token = getCookie('token')
  const setAuthentication = useAuthStore((state) => state.setAuthentication)

  useEffect(() => {
    if (token) {
      setAuthentication(true)
    }
  }, [token, setAuthentication])

  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <Navbar />
      {children}
    </main>
  )
}
