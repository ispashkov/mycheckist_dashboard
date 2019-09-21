import React, { Component } from 'react'
import { Formik, FormikProps } from 'formik'
import { Paper, Grid, Typography, withStyles, WithStyles, Link } from '@material-ui/core'
import AuthForm from '../components/AuthForm'
import styles from './styles'
import { AuthData } from '../interfaces'
import AdapterLink from 'components/AdapterLink'
import * as routes from 'constants/routes'

export interface IState {
  values: AuthData
}

class Auth extends Component<{} & WithStyles, IState> {
  readonly state: IState = {
    values: {
      username: '',
      password: '',
    },
  }

  public handleSubmit = (data: AuthData): void => {
    console.log(data)
  }

  public handleCancel = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    console.log('cancel')
  }

  render(): React.ReactNode {
    const { classes } = this.props
    const { values } = this.state

    return (
      <div className={classes.root}>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <Paper className={classes.paper}>
              <Typography variant="h4" component="h1" align="center" className={classes.title}>
                Авторизация
              </Typography>

              <Formik
                onSubmit={this.handleSubmit}
                initialValues={values}
                render={(props: FormikProps<AuthData>): JSX.Element => (
                  <AuthForm {...props} onCancel={this.handleCancel} />
                )}
              />

              <Typography variant="body2" className={classes.info}>
                У Вас еще нет аккаунта?{' '}
                <Link to={routes.registration.path} component={AdapterLink}>
                  Зарегистрируйтесь!
                </Link>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Auth)
