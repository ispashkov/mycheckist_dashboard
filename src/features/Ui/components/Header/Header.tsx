import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { AppBar, Toolbar, IconButton, withStyles, WithStyles } from '@material-ui/core'
import { Menu as MenuIcon, Brightness2Outlined as BrightnessIcon, WbSunnyOutlined as SunIcon } from '@material-ui/icons'
import styles from './styles'
import { ThemeType } from '../../../../types'
import { isLightTheme, setThemeToStorage } from '../../../../utils/theme'
import { UIState } from '../../ducks/reducer'
// import { headerRoutes } from '../../ducks/selectors'
// import { IRoute } from '../../../../interfaces'

export interface IHeaderProps extends Pick<UIState, 'themeType' | 'isOpenMenu'> {
  themeToggle(theme: ThemeType): void
  menuToggle(): void
}

class Header extends Component<IHeaderProps & WithStyles> {
  static readonly defaultProps = {
    themeType: 'light' as ThemeType,
    isOpenMenu: false,
  }

  public handleChangeTheme = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    const { themeType } = this.props
    const theme = isLightTheme(themeType) ? 'dark' : 'light'

    this.props.themeToggle(theme)
    setThemeToStorage(theme)
  }

  public handleToggleMenu = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    this.props.menuToggle()
  }

  private get isLightTheme(): boolean {
    const { themeType } = this.props

    return isLightTheme(themeType)
  }

  render(): React.ReactNode {
    const { classes, isOpenMenu } = this.props

    return (
      <AppBar
        className={clsx(classes.root, {
          [classes.rootIsOpen]: isOpenMenu,
        })}
        color="inherit"
      >
        <Toolbar className={classes.toolbar}>
          <IconButton onClick={this.handleToggleMenu} size="medium">
            <MenuIcon fontSize="default" />
          </IconButton>
          {/*<div className={classes.navigation}>*/}
          {/*  {headerRoutes.map(*/}
          {/*    (route: IRoute): JSX.Element => (*/}
          {/*      <NavLink*/}
          {/*        key={route.path}*/}
          {/*        to={route.path}*/}
          {/*        className={classes.navigationLink}*/}
          {/*        activeClassName={classes.navigationLinkActive}*/}
          {/*      >*/}
          {/*        {route.title}*/}
          {/*      </NavLink>*/}
          {/*    )*/}
          {/*  )}*/}
          {/*</div>*/}

          <div className={classes.toolbarRight}>
            <IconButton
              className={clsx({
                [classes.themeIconLight]: this.isLightTheme,
                [classes.themeIconDark]: !this.isLightTheme,
              })}
              onClick={this.handleChangeTheme}
              size="medium"
            >
              {this.isLightTheme ? <BrightnessIcon fontSize="default" /> : <SunIcon fontSize="default" />}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(Header)
