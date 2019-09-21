import { createStyles, Theme } from '@material-ui/core'

export default (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginTop: theme.spacing(2),
    },
    submit: {
      marginLeft: theme.spacing(2),
    },
  })
