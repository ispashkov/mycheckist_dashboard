import React from 'react'
import clsx from 'clsx'
import { Typography, Drawer, Divider, List, WithStyles, withStyles } from '@material-ui/core'
import ListItemLink from './ListItemLink'
import { IRoute } from 'interfaces'
import styles from './styles'
import { MenuMapState } from '../../containers/Menu'

const Menu: React.FC<MenuMapState & WithStyles> = ({ isOpenMenu, routes, classes }): JSX.Element => (
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

Menu.defaultProps = {
  isOpenMenu: false,
  routes: [],
}

export default withStyles(styles)(Menu)
