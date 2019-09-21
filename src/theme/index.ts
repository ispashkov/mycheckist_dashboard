import { createMuiTheme } from '@material-ui/core'
import createPalette, { light } from '@material-ui/core/styles/createPalette'
import { blue } from '@material-ui/core/colors'
import { ThemeType } from 'types'
import { isLightTheme } from 'utils/theme'

export default (themeType: ThemeType) => {
  const theme = createMuiTheme()
  const palette = createPalette({
    type: themeType,
    primary: {
      main: blue[700],
      light: blue[500],
      dark: blue[300],
    },
    background: isLightTheme(themeType)
      ? light.background
      : {
          paper: '#1c2938',
          default: '#10171e',
        },
  })

  return createMuiTheme({
    palette,
    overrides: {
      MuiAvatar: {
        root: {
          height: theme.spacing(4),
          width: theme.spacing(4),
        },
      },
      MuiButtonBase: {
        root: {
          textTransform: 'none',
        },
      },
      MuiTab: {
        root: {
          textTransform: 'none',
        },
      },
      MuiFormLabel: {
        root: {
          display: 'block',
          marginBottom: theme.spacing(1),
          fontSize: theme.typography.pxToRem(theme.spacing(1.75)),
        },
      },
      MuiOutlinedInput: {
        root: {
          borderRadius: '4px',
          backgroundColor: palette.background.paper,
        },
        input: {
          height: theme.spacing(5),
          padding: theme.spacing(1, 1.5),
          boxSizing: 'border-box',
          borderRadius: theme.spacing(1) / 2,
          overflow: 'hidden',
          backgroundColor: palette.background.paper,
        },
        multiline: {
          minHeight: theme.spacing(5),
          padding: theme.spacing(1, 1.5),
          boxSizing: 'border-box',
        },
        adornedStart: {
          paddingLeft: theme.spacing(1.5),
        },
      },
      MuiTablePagination: {
        toolbar: {
          paddingRight: theme.spacing(2),
        },
      },
      MuiListItemText: {
        root: {
          marginTop: 0,
          marginBottom: 0,
        },
      },
    },
    props: {
      MuiTabs: {
        indicatorColor: 'primary',
      },
      MuiTab: {
        disableRipple: true,
      },
      MuiButtonBase: {
        disableRipple: true,
      },
      MuiTextField: {
        variant: 'outlined',
        autoComplete: 'off',
        fullWidth: true,
      },
      MuiFormHelperText: {
        variant: 'outlined',
      },
      MuiTable: {
        size: 'small',
      },
      MuiIconButton: {
        size: 'small',
      },
      MuiSvgIcon: {
        fontSize: 'small',
      },
      MuiChip: {
        size: 'small',
      },
    },
  })
}
