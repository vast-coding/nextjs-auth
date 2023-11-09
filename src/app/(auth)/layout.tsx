'use client'

import { FC, ReactNode } from 'react'

type TAuthLayout = {
  children: ReactNode
}

const AuthLayout = ({ children }: TAuthLayout) => {
  return <div className="border p-10 rounded-md">{children}</div>
}

export default AuthLayout
