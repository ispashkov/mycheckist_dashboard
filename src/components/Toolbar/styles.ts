import { createStyles, Theme } from '@material-ui/core'

export default (theme: Theme) =>
  createStyles({
    right: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
  })
