import { StateCreator } from 'zustand'

type UserInfoType = {
  name: string
  email: string
}

export type UserSliceType = {
  userInfo: UserInfoType | null
  setUserInfo: (userData: UserInfoType) => void
}

export const userSlice: StateCreator<UserSliceType> = (set) => ({
  userInfo: null,
  setUserInfo: (userData: UserInfoType) => set(() => ({ userInfo: userData })),
})
