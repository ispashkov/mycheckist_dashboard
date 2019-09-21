import React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'
import { Tooltip, ListItem, ListItemText, ListItemIcon, withStyles, WithStyles } from '@material-ui/core'
import { IRoute } from 'interfaces'
import styles from './styles'

interface ListItemLink {
  isSmall?: boolean
}

const ListItemLink: React.FC<ListItemLink & IRoute & WithStyles> = ({
  title,
  path,
  exact,
  icon: Icon,
  isSmall,
  classes,
}): JSX.Element => {
  const renderLink = React.useMemo(
    () =>
      React.forwardRef<HTMLAnchorElement, NavLinkProps>(
        (props, ref): JSX.Element => (
          <NavLink {...props} innerRef={ref} activeClassName={classes.linkActive} exact={exact} />
        )
      ),
    [classes.linkActive, exact]
  )

  return (
    <Tooltip title={isSmall ? title : ''} placement="right">
      <ListItem component={renderLink} to={path} button>
        {Icon && (
          <ListItemIcon
            classes={{
              root: classes.listItemIcon,
            }}
          >
            <Icon fontSize="default" />
          </ListItemIcon>
        )}
        {!isSmall && <ListItemText primary={title} primaryTypographyProps={{ variant: 'body2' }} />}
      </ListItem>
    </Tooltip>
  )
}

ListItemLink.defaultProps = {
  isSmall: false,
}

export default withStyles(styles)(ListItemLink)
