import { StateCreator } from 'zustand'

type Auth = {
  isAuth: boolean
  token: string | null
}

export interface AuthSliceType extends Auth {
  setAuth: (values: Auth) => void
}

const initialState: Auth = {
  isAuth: false,
  token: null,
}

export const authSlice: StateCreator<AuthSliceType> = (set) => ({
  ...initialState,
  setAuth: ({ token, isAuth }: Auth) =>
    set((state) => ({ ...state, token, isAuth })),
})
