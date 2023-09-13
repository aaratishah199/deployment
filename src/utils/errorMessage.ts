import { AxiosError } from 'axios'

interface Responsedata {
  errors: Array<{
    title: string
  }>
}

export type AxiosErrorResponse = AxiosError<Responsedata>

export const errorMessage = (data: AxiosErrorResponse) => {
  return data?.response?.data?.errors?.[0].title as string
}
