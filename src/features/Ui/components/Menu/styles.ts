import { createStyles, Theme } from '@material-ui/core'
import { menuWidth } from '../../../../constants'

export default (theme: Theme) =>
  createStyles({
    root: {
      flexShrink: 0,
      width: theme.spacing(7),
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.standard,
      }),
    },
    rootIsOpen: {
      width: menuWidth,
    },
    drawerPaper: {
      width: theme.spacing(7),
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.standard,
      }),
    },
    drawerPaperIsOpen: {
      width: menuWidth,
    },
    toolbar: {
      ...theme.mixins.toolbar,
      display: 'flex',
      alignItems: 'center',
    },
    title: {
      padding: theme.spacing(2),
      flex: 1,
    },
    listItemIcon: {
      color: 'inherit',
    },
    listItemText: {
      whiteSpace: 'nowrap',
    },
    linkActive: {
      color: theme.palette.primary.main,
    },
  })
