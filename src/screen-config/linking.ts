import React from 'react'
import * as linking from 'expo-linking'
import { LinkingOptions } from '@react-navigation/native'

const prefix = linking.makeUrl("/")
export const Linking: LinkingOptions = {
  prefixes: [prefix],
  config: {
    screens: {
      Index: {
        screens: {
          competition: 'Competition'
        }
      },
      Details: {
        path: '/details',
        screens: {
          Data: 'data',
          // Schedule: {
          //   path: 'schedule',
          //   parse: {
          //     id: id => id
          //   },
          // }
        }
      }
    }
  }
}