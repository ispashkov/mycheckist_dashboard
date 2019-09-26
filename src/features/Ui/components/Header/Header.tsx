import React, { Component } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { compose } from 'recompose'
import clsx from 'clsx'
import { AppBar, Toolbar, Tooltip, IconButton, withStyles, WithStyles } from '@material-ui/core'
import { Menu as MenuIcon, Brightness2Outlined as BrightnessIcon, WbSunnyOutlined as SunIcon } from '@material-ui/icons'
import styles from './styles'
import { ThemeType } from 'types'
import { isLightTheme, setThemeToStorage } from 'utils/theme'
import { HeaderMapState, HeaderMapDispatch } from '../../containers/Header'
import { tooltipDelay } from '../../../../constants'

type HeaderProps = HeaderMapState & HeaderMapDispatch & WithStyles & WithTranslation

class Header extends Component<HeaderProps> {
  static readonly defaultProps = {
    themeType: 'light' as ThemeType,
    isOpenMenu: false,
  }

  public handleChangeTheme = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    const { themeType, themeToggle } = this.props
    const theme = isLightTheme(themeType) ? 'dark' : 'light'

    themeToggle(theme)
    setThemeToStorage(theme)
  }

  public handleToggleMenu = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    this.props.menuToggle()
  }

  private get isLightTheme(): boolean {
    const { themeType } = this.props

    return isLightTheme(themeType)
  }

  private get menuTooltipTitle(): string {
    const { isOpenMenu, t } = this.props

    return isOpenMenu ? t('header.menu.hide') : t('header.menu.show')
  }

  private get themeTooltipTitle(): string {
    const { t } = this.props

    return this.isLightTheme ? t('header.theme.dark') : t('header.theme.light')
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
          <Tooltip title={this.menuTooltipTitle} enterDelay={tooltipDelay}>
            <IconButton onClick={this.handleToggleMenu} size="medium">
              <MenuIcon fontSize="default" />
            </IconButton>
          </Tooltip>

          <div className={classes.toolbarRight}>
            <Tooltip title={this.themeTooltipTitle} enterDelay={tooltipDelay}>
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
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

export default compose<HeaderProps, {}>(
  withTranslation('ui'),
  withStyles(styles)
)(Header)
