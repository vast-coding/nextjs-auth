import { mountStoreDevtool } from 'simple-zustand-devtools'
import { create } from 'zustand'

interface AuthStoreInterface {
  authenticated: boolean // a boolean value indicating whether the user is authenticated or not
  setAuthentication: (val: boolean) => void // a function to set the authentication status
  user: any // an object that stores user information
  setUser: (user: any) => void // a function to set user information
}

export const useAuthStore = create<AuthStoreInterface>((set) => ({
  authenticated: false, // initial value
  user: {}, // initial value of user
  setAuthentication: (val) => set((state) => ({ authenticated: val })),
  setUser: (user) => set({ user }),
}))

// show zustand store in dev for debugging
if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store', useAuthStore)
}
