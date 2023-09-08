import { create } from 'zustand'
import { AuthSliceType, authSlice } from './slices/authSlice'
import { persist } from 'zustand/middleware'
import { UserProfileType, userProfileSlice } from './slices/userProfileSlice'

type StoreType = AuthSliceType & UserProfileType

export const useStore = create<StoreType>((...a) => ({
  ...persist(authSlice, {
    name: 'userAuth',
  })(...a),
  ...userProfileSlice(...a),
}))
