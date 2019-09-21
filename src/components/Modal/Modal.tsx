import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  CircularProgress,
  withStyles,
  WithStyles,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import styles from './styles'
import { DialogProps } from '@material-ui/core/Dialog'

interface IProps {
  open: boolean
  title: string
  message?: string | React.ReactNode
  loading?: boolean
  children: React.ReactNode
  onClose(event: React.MouseEvent<HTMLElement>): void
}

type IOuterProps = IProps & Pick<DialogProps, 'maxWidth' | 'fullWidth' | 'fullScreen' | 'scroll'>
type IInnerProps = IOuterProps & WithStyles

const Modal: React.FC<IInnerProps> = ({
  classes,
  title,
  open,
  children,
  message,
  maxWidth,
  fullWidth,
  onClose,
  fullScreen,
  loading,
  scroll,
}): JSX.Element => (
  <Dialog
    open={open}
    onClose={onClose}
    fullScreen={fullScreen}
    maxWidth={maxWidth}
    fullWidth={fullWidth}
    scroll={scroll}
  >
    {loading && (
      <div className={classes.loaderContainer}>
        <CircularProgress size={50} />
      </div>
    )}

    <DialogTitle disableTypography className={classes.header}>
      <Typography variant="h6" className={classes.title}>
        {title}
      </Typography>
      <IconButton aria-label="Close" className={classes.closeBtn} onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </DialogTitle>

    <DialogContent className={classes.content}>
      {message && (
        <Typography color="textSecondary" variant="body2">
          {message}
        </Typography>
      )}
      {React.Children.toArray(children)}
    </DialogContent>
  </Dialog>
)

Modal.defaultProps = {
  open: false,
  title: '',
  fullWidth: true,
  fullScreen: false,
  loading: false,
  scroll: 'body',
}

export default withStyles(styles)(Modal)
