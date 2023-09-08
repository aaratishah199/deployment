import { create } from 'zustand'
import { AuthSliceType, authSlice } from './slices/authSlice'
import { persist } from 'zustand/middleware'
import { userSlice, UserSliceType } from './slices/userSlice'

type Storetype = AuthSliceType & UserSliceType

export const useStore = create<Storetype>()((...a) => ({
  ...persist(userSlice, {
    name: 'user-info',
  })(...a),
  ...persist(authSlice, {
    name: 'token',
  })(...a),
}))
