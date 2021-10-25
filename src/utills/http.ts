import axios from 'axios'
import qs from 'qs'

const apiUrl = process.env.REACT_APP_API_URL

interface Config extends RequestInit {
  data?: object
  token?: string
}

export const http = async (
  endpoint: string, 
  { data, token, headers, ...customConfig }: Config = {}
) => {
    const config = {
      method: 'GET',
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        "Content-Type": data ? "application/json" : "",
      },
      ...customConfig
    }

    if (config.method.toUpperCase() === "GET") {
      endpoint += `?${qs.stringify(data)}`;
    } else {
      config.body = JSON.stringify(data || {});
    }

    return 
}

