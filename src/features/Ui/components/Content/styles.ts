import { createStyles, Theme } from '@material-ui/core'
import { menuWidth } from '../../../../constants'

export default (theme: Theme) =>
  createStyles({
    root: {
      minHeight: '100vh',
      padding: theme.spacing(12, 4.5, 4),
      marginLeft: theme.spacing(7),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.standard,
      }),
    },
    rootIsOpen: {
      marginLeft: menuWidth,
    },
  })
