import React, { Component } from 'react'
import clsx from 'clsx'
import { Typography, Drawer, Divider, List, WithStyles, withStyles } from '@material-ui/core'
import ListItemLink from './ListItemLink'
import { IRoute } from 'interfaces'
import { UIState } from '../../ducks/reducer'
import { headerRoutes } from '../../ducks/selectors'
import styles from './styles'

class Menu extends Component<Pick<UIState, 'isOpenMenu'> & WithStyles, {}> {
  static readonly defaultProps = {
    isOpenMenu: false,
  }

  render(): React.ReactNode {
    const { isOpenMenu, classes } = this.props

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
          <Typography className={classes.title} variant="h5" align={isOpenMenu ? 'left' : 'center'}>
            {isOpenMenu ? 'Geoservice' : 'G'}
          </Typography>
        </div>
        <Divider />
        <List disablePadding>
          {headerRoutes.map(
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
