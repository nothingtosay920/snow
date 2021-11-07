import qs from 'qs'

const apiUrl = process.env.REACT_APP_API_URL || ''

interface Config extends RequestInit {
  data?: object
  token?: string
}

export const http = async (
  endpoint: string, 
  { data, token, headers, ...customConfig }: Config = { method: 'GET' }
) => {
    const config = {
      method: 'Get',
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        "Content-Type": data ? "application/json" : "",
      },
      ...customConfig
    }
    if (config.method.toUpperCase() === "GET") {
      endpoint += `?${qs.stringify(data)}`;
    }

    return fetch(`${apiUrl}/${endpoint}`, config).then(async (response) => {
      if (response.ok) {
        return data
      } else {
        return Promise.reject(data)
      }
    })
}

