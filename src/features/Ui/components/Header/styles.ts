import { createStyles, Theme } from '@material-ui/core'
import { yellow } from '@material-ui/core/colors'
import { menuWidth } from '../../../../constants'

export default (theme: Theme) =>
  createStyles({
    root: {
      width: `calc(100% - ${theme.spacing(7)}px)`,
      marginLeft: theme.spacing(7),
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.standard,
      }),
    },
    rootIsOpen: {
      width: `calc(100% - ${menuWidth}px)`,
      marginLeft: menuWidth,
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    toolbarRight: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginLeft: 'auto',
    },
    themeIconLight: {
      color: theme.palette.primary.main,
    },
    themeIconDark: {
      color: yellow[600],
    },
    navigation: {
      display: 'block',
      padding: theme.spacing(0, 1.5),
    },
    navigationLink: {
      ...theme.typography.button,
      marginRight: theme.spacing(2),
      color: theme.palette.text.secondary,
      textDecoration: 'none',
      transition: theme.transitions.create('color', {
        duration: theme.transitions.duration.short,
        easing: theme.transitions.easing.easeIn,
      }),
      '&:hover': {
        color: theme.palette.text.primary,
      },
    },
    navigationLinkActive: {
      color: theme.palette.text.primary,
    },
  })
