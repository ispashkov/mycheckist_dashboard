import React, { Component } from 'react'
import clsx from 'clsx'
import { Typography, Drawer, Divider, List, WithStyles, withStyles } from '@material-ui/core'
import ListItemLink from './ListItemLink'
import { IRoute } from 'interfaces'
import styles from './styles'
import { MenuMapState } from '../../containers/Menu'

class Menu extends Component<MenuMapState & WithStyles, {}> {
  static readonly defaultProps = {
    isOpenMenu: false,
    routes: [],
  }

  render(): React.ReactNode {
    const { isOpenMenu, routes, classes } = this.props

    return (
      <Drawer
        className={clsx(classes.root, {
          [classes.rootIsOpen]: isOpenMenu,
        })}
        classes={{
          paper: clsx(classes.drawerPaper, {
            [classes.drawerPaperIsOpen]: isOpenMenu,
          }),
        }}
        variant="persistent"
        open
      >
        <div className={classes.toolbar}>
          <Typography className={classes.title} variant="h5">
            {isOpenMenu ? 'MyCheckist' : 'C'}
          </Typography>
        </div>

        <Divider />

        <List disablePadding>
          {routes.map(
            (route: IRoute): JSX.Element => (
              <ListItemLink
                key={route.path}
                title={route.title}
                path={route.path}
                icon={route.icon}
                exact={route.exact}
                isSmall={!isOpenMenu}
              />
            )
          )}
        </List>
      </Drawer>
    )
  }
}

export default withStyles(styles)(Menu)
