import { StateCreator } from 'zustand'

type Auth = {
  name: string
  email: string
  token: string | null
}

export interface AuthSliceType extends Auth {
  setAuth: (values: Auth) => void
}

const initialState = {
  name: '',
  email: '',
  token: null,
}

export const authSlice: StateCreator<AuthSliceType> = (set) => ({
  ...initialState,
  setAuth: ({ name, email, token }: Auth) =>
    set((state) => ({ ...state, name, email, token })),
})
