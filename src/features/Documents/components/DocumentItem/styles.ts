import { createStyles, Theme } from '@material-ui/core'
import { lightGreen, yellow, red, grey } from '@material-ui/core/colors'

export default (theme: Theme) =>
  createStyles({
    header: {
      paddingBottom: 0,
    },
    chip: {
      margin: theme.spacing(1) - 4,
    },
    yellowDot: {
      '& path': { fill: yellow[500] },
    },
    greenDot: {
      '& path': { fill: lightGreen[200] },
    },
    redDot: {
      '& path': { fill: red[500] },
    },
    greyDot: {
      '& path': { fill: grey[200] },
    },
    statusWrp: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    statusMsg: {
      marginRight: theme.spacing(1),
    },
    datePosition: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    action: {
      margin: 0,
    },
    content: {
      '&:last-child': {
        paddingBottom: theme.spacing(2),
      },
    },
  })
