import React, { Component } from 'react'
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core'
import Toolbar from 'components/Toolbar'
import UsersTable from './containers/UsersTable'
import UsersModal from './containers/UsersModal'
import { UsersConnectedProps } from './containers/Users'
import { User } from 'interfaces'

export interface IState {
  searchQuery: string
}

class Admin extends Component<UsersConnectedProps & WithStyles, IState> {
  readonly state = {
    searchQuery: '',
  }

  public handleEdit = (user: User) => (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    this.props.edit(user)
  }

  public handleRemove = (user: User) => (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    console.log(user)
  }

  public handleAdd = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    this.props.modalToggle()
  }

  public handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target

    this.setState({
      searchQuery: value,
    })
  }

  render(): React.ReactNode {
    const { classes } = this.props
    const { searchQuery } = this.state

    return (
      <div>
        <div className={classes.toolbar}>
          <Toolbar searchQuery={searchQuery} onSearch={this.handleSearch} onAdd={this.handleAdd} />
        </div>

        <UsersTable onRemove={this.handleRemove} onEdit={this.handleEdit} onAdd={this.handleAdd} />

        <UsersModal />
      </div>
    )
  }
}

const styles = (theme: Theme) =>
  createStyles({
    toolbar: {
      marginBottom: theme.spacing(2),
    },
  })

export default withStyles(styles)(Admin)
