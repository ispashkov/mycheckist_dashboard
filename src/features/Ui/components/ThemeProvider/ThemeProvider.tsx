import React from 'react'
import { MuiThemeProvider, CssBaseline, Theme } from '@material-ui/core'

interface IThemeProviderProps {
  theme: Theme
}

const ThemeProvider: React.FC<IThemeProviderProps> = ({ theme, children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {React.Children.toArray(children)}
  </MuiThemeProvider>
)

export default ThemeProvider
