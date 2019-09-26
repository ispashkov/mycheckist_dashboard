import React from 'react'
import { Button, createStyles, Theme, withStyles, WithStyles } from '@material-ui/core'
import { SvgIconProps } from '@material-ui/core/SvgIcon'
import { ButtonProps } from '@material-ui/core/Button'

export enum IconPlacement {
  left = 'left',
  right = 'right',
}

export interface ButtonWithIconProps {
  icon: React.ComponentType<SvgIconProps>
  iconPlacement?: keyof typeof IconPlacement
  title: string
}

const ButtonWithIcon: React.FC<ButtonWithIconProps & ButtonProps & WithStyles> = ({
  icon,
  iconPlacement,
  title,
  classes,
  ...props
}): JSX.Element => (
  <Button {...props}>
    {iconPlacement === IconPlacement.left && React.createElement(icon, { className: classes.left })}
    {title}
    {iconPlacement === IconPlacement.right && React.createElement(icon, { className: classes.right })}
  </Button>
)

ButtonWithIcon.defaultProps = {
  iconPlacement: 'left',
}

const styles = (theme: Theme) =>
  createStyles({
    left: {
      marginRight: theme.spacing(1),
    },
    right: {
      marginLeft: theme.spacing(1),
    },
  })

export default withStyles(styles)(ButtonWithIcon)
