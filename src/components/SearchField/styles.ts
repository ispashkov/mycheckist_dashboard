import { createStyles, Theme } from '@material-ui/core'

export default (theme: Theme) =>
  createStyles({
    input: {
      paddingLeft: theme.spacing(1),
    },
    icon: {
      color: theme.palette.text.disabled,
    },
  })
