import { createStyles, Theme } from '@material-ui/core'

export default (theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
    },
    loaderContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.palette.background.paper,
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: theme.zIndex.modal,
    },
    btnCancel: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        order: 2,
        marginRight: 0,
      },
    },
    btnSubmit: {
      [theme.breakpoints.down('sm')]: {
        order: 1,
        marginBottom: theme.spacing(1),
      },
    },
    header: {
      position: 'relative',
    },
    content: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
    },
    title: {
      paddingRight: theme.spacing(4),
      color: theme.palette.type === 'dark' ? theme.palette.text.primary : theme.palette.primary.main,
    },
    closeBtn: {
      position: 'absolute',
      right: theme.spacing(2),
      top: theme.spacing(2),
      color: theme.palette.grey[500],
    },
    actionsContainer: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  })
