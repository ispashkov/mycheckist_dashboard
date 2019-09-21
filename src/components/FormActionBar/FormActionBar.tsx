import React from 'react'
import { Grid, Button, withStyles, WithStyles } from '@material-ui/core'
import styles from './styles'

export interface IProps {
  submitTitle?: string
  cancelTitle?: string
  isDisabledSubmit?: boolean
  onSubmit?(event: React.MouseEvent<HTMLElement, MouseEvent>): void
  onCancel(event: React.MouseEvent<HTMLElement, MouseEvent>): void
}

const FormActionBar: React.FC<IProps & WithStyles> = ({
  submitTitle,
  cancelTitle,
  isDisabledSubmit,
  onCancel,
  onSubmit,
  classes,
}): JSX.Element => (
  <Grid className={classes.root} xs={12} item>
    <Button onClick={onCancel} variant="outlined">
      {cancelTitle}
    </Button>
    <Button
      className={classes.submit}
      onClick={onSubmit}
      disabled={isDisabledSubmit}
      type="submit"
      variant="contained"
      color="primary"
    >
      {submitTitle}
    </Button>
  </Grid>
)

FormActionBar.defaultProps = {
  submitTitle: 'Отправить',
  cancelTitle: 'Отмена',
  isDisabledSubmit: false,
}

export default withStyles(styles)(FormActionBar)
