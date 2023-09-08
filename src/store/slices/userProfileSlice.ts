import { StateCreator } from 'zustand'

type ProfileType = {
  name: string
  email: string
}

export type UserProfileType = {
  profile: ProfileType
}

export const userProfileSlice: StateCreator<UserProfileType> = () => ({
  profile: {
    name: '',
    email: '',
  },
})
