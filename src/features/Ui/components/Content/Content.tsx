import React from 'react'
import clsx from 'clsx'
import { withStyles, WithStyles } from '@material-ui/core'
import styles from './styles'
import { UIState } from '../../ducks/reducer'

export interface IContentProps extends Pick<UIState, 'isOpenMenu'> {
  className?: string
}

const Content: React.FC<IContentProps & WithStyles> = ({
  classes,
  children,
  isOpenMenu,
  className,
}): React.ReactElement => (
  <div
    className={clsx(
      classes.root,
      {
        [classes.rootIsOpen]: isOpenMenu,
      },
      className
    )}
  >
    {React.Children.toArray(children)}
  </div>
)

Content.defaultProps = {
  isOpenMenu: false,
}

export default withStyles(styles)(Content)
