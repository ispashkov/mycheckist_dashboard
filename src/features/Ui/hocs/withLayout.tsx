import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'
import Header from '../containers/Header'
import Content from '../containers/Content'
import Menu from '../containers/Menu'

const withLayout = (Component: React.ComponentType<{} & {}>) => {
  class ComponentWithLayout extends React.Component<WithStyles, {}> {
    render(): React.ReactNode {
      const { classes, ...otherProps } = this.props

      return (
        <div className={classes.root}>
          <Header />
          <Menu />
          <Content>
            <Component {...otherProps} />
          </Content>
        </div>
      )
    }
  }

  return withStyles(styles)(ComponentWithLayout)
}

export const styles = () =>
  createStyles({
    root: {
      position: 'relative',
    },
  })

export default withLayout
