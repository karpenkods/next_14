'use client'

import { Container, createTheme, rem } from '@mantine/core'

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem(300),
  xs: rem(400),
  sm: rem(500),
  md: rem(600),
  lg: rem(700),
  xl: rem(1500),
  xxl: rem(1800)
}

export const theme = createTheme({
  breakpoints: {
    xs: '360px',
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1440px'
  },
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          '--container-size': fluid
            ? '100%'
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size)
        }
      })
    })
  }
})
