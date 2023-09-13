import axiosInstance from 'lib/axios'

const LOGIN_ROUTE = '/sessions'

interface LoginBodyParams {
  user: {
    email: string
    password: string
  }
}

export const login = (body: LoginBodyParams) => {
  return axiosInstance.post(LOGIN_ROUTE, body)
}
