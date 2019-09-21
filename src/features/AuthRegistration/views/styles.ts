import { createStyles, Theme } from '@material-ui/core'

export default (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    },
    title: {
      marginBottom: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(4),
    },
    info: {
      marginTop: theme.spacing(3),
      textAlign: 'center',
    },
    link: {
      color: theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.secondary.main,
    },
  })
