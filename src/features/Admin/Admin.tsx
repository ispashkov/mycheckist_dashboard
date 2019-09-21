import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core'
import Navigations from './components/Navigations'
import * as routes from 'constants/routes'

import Users from './features/Users'
import Roles from './features/Roles'

class Admin extends Component<WithStyles, {}> {
  render(): React.ReactNode {
    const { classes } = this.props
    return (
      <div>
        <div className={classes.navigation}>
          <Navigations />
        </div>

        <Switch>
          <Redirect from={routes.admin.path} to={routes.users.path} exact={true} />
          <Route path={routes.users.path} component={Users} exact={routes.users.exact} />
          <Route path={routes.roles.path} component={Roles} exact={routes.roles.exact} />
        </Switch>
      </div>
    )
  }
}

const styles = (theme: Theme) =>
  createStyles({
    navigation: {
      marginBottom: theme.spacing(4),
    },
  })

export default withStyles(styles)(Admin)
