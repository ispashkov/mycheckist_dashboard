import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { LocationState } from 'history'
import { Paper, Tabs, Tab } from '@material-ui/core'
import { adminRoutes } from '../../ducks/selectors'
import { IRoute } from 'interfaces'

class Navigations extends Component<LocationState, {}> {
  public handleChange = (event: React.ChangeEvent<{}>, path: string): void => this.props.history.push(path)

  render(): React.ReactNode {
    const { location } = this.props

    return (
      <Paper>
        <Tabs value={location.pathname} onChange={this.handleChange}>
          {adminRoutes.map(
            (route: IRoute): JSX.Element => (
              <Tab key={route.path} label={route.title} value={route.path} />
            )
          )}
        </Tabs>
      </Paper>
    )
  }
}

export default withRouter(Navigations)
