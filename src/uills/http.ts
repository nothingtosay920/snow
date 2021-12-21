import qs from 'qs'
import { useCallback } from 'react'
import { baseAPI } from './base-url'

interface Config extends RequestInit {
  data?: object
  token?: string
  url?: boolean
}

const isURL = (address: string) => {
  return address.indexOf('http://') === 0 || address.indexOf('https://') === 0
}

export const http =  (
  address: string, 
  { data, token, headers, url, ...customConfig }: Config = { method: 'GET' }
) => {
    const apiUrl = isURL(address) ? address : `${baseAPI}/${address}`
    const config = {
      method: 'Get',
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        "Content-Type": data ? "application/json" : "",
      },
      ...customConfig
    }
    if (config.method.toUpperCase() === "GET" ) {
      address += `?${qs.stringify(data)}`;
    }

    return fetch(apiUrl as string, config).then(async (response) => {
      if (response.ok) {
        return response.json()
      } else {
        return Promise.reject(data)
      }
    })
}


export const useHttp = () => {
  // const { user } = useAuth()
  const user = { token: ''}
  return useCallback(
    (address: string, config?: Config) => {
      return http(address, { ...config, token: user?.token })
    },
    [user?.token],

  )
}