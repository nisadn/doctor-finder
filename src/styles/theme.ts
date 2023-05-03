// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

const breakpoints = {
  sm: '40em',
  md: '52em',
  lg: '64em'
}

const shadows = {
  custom: '0px 0px 8px 1px #E2E2E2'
}

const colors = {
  blue: {
    darker: '#003057',
    dark: '#3F8DBA',
    mid: '#128EBF',
    light: '#72CEED',
    lighter: '#D1ECF9',
  },
  green: {
    dark: '#43BEAE',
    mid: '#32DAC3',
    light: '#61C7B5',
  },
  grey: {
    dark: '#535556',
    light: '#EAF0F3',
  },
}

// 2. Call `extendTheme` and pass your custom values
const customTheme = extendTheme({
  breakpoints,
  shadows,
  colors,
})

export default customTheme