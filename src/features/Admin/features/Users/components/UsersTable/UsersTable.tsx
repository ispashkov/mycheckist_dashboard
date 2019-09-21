import React, { Component } from 'react'
import { Table, TableHead, TableBody, TableRow, TableCell, Paper, IconButton, Tooltip, Avatar } from '@material-ui/core'
import { Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons'
import Pagination from 'components/Pagination'
import { User } from 'interfaces'
import emptyAvatar from 'assets/emptyAvatar.svg'

export interface IProps {
  data: Array<User>
  onEdit: (row: User) => (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  onRemove: (row: User) => (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  onAdd(event: React.MouseEvent<HTMLElement, MouseEvent>): void
}

class UsersTable extends Component<IProps, {}> {
  static readonly defaultProps = {
    data: [],
  }

  public handleChangePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, page: number): void => {
    console.log(page)
  }

  public handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    const { value } = event.target

    console.log(value)
  }

  render(): React.ReactNode {
    const { data, onEdit, onRemove } = this.props

    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Фото</TableCell>
              <TableCell>Фамилия</TableCell>
              <TableCell>Имя</TableCell>
              <TableCell>Отчество</TableCell>
              <TableCell>Логин</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map(
              (row: User): JSX.Element => (
                <TableRow key={row.id}>
                  <TableCell>
                    <Avatar src={row.photo || emptyAvatar} alt={`${row.lastName} ${row.firstName} ${row.middleName}`} />
                  </TableCell>
                  <TableCell>{row.lastName}</TableCell>
                  <TableCell>{row.firstName}</TableCell>
                  <TableCell>{row.middleName}</TableCell>
                  <TableCell>{row.login}</TableCell>
                  <TableCell align="right">
                    <Tooltip title="Редактировать">
                      <IconButton color="primary" size="small" onClick={onEdit(row)}>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Удалить">
                      <IconButton color="secondary" size="small" onClick={onRemove(row)}>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>

        <Pagination onChangePage={this.handleChangePage} onChangeRowsPerPage={this.handleChangeRowsPerPage} />
      </Paper>
    )
  }
}

export default UsersTable
