import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { Typography, Button, Grid, withStyles, WithStyles } from '@material-ui/core'
import styles from './styles'
import * as routes from 'constants/routes'

const NotFound: React.FC<WithStyles> = ({ classes }) => {
  const BackLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => <Link innerRef={ref} {...props} />)

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" align="center">
            Такой страницы не существует!
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.btnContainer}>
          <Button color="primary" variant="contained" component={BackLink} to={routes.home.path}>
            Вернуться на главную
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(NotFound)
