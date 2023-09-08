import { StateCreator } from 'zustand'

export type AuthSliceType = {
  token: string | null
  setToken: (token: string) => void
}

export const authSlice: StateCreator<AuthSliceType> = (set) => ({
  token: null,
  setToken: (token: string) => set(() => ({ token })),
})
