import React, { Component } from 'react'
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core'
import Toolbar from 'components/Toolbar'
import RolesTable from './components/RolesTable'
import RolesModal from './containers/RolesModal'
import { UsersConnectedProps } from './containers/Roles'
import rolesData from './mocks/roles'
import { Role } from 'interfaces'

export interface IState {
  searchQuery: string
}

class Admin extends Component<UsersConnectedProps & WithStyles, IState> {
  readonly state = {
    searchQuery: '',
  }

  public handleEdit = (role: Role) => (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    this.props.edit(role)
  }

  public handleRemove = (role: Role) => (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    console.log(role)
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

        <RolesTable data={rolesData} onRemove={this.handleRemove} onEdit={this.handleEdit} onAdd={this.handleAdd} />

        <RolesModal />
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
