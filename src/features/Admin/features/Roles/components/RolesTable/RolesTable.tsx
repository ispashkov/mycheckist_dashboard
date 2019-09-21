import React, { Component } from 'react'
import { Table, TableHead, TableBody, TableRow, TableCell, Paper, IconButton, Tooltip } from '@material-ui/core'
import { Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons'
import Pagination from 'components/Pagination'
import { Role } from 'interfaces'

export interface IProps {
  data: Array<Role>
  onEdit: (row: Role) => (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  onRemove: (row: Role) => (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  onAdd(event: React.MouseEvent<HTMLElement, MouseEvent>): void
}

class RolesTable extends Component<IProps, {}> {
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
              <TableCell>Название</TableCell>
              <TableCell>Описание</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map(
              (row: Role): JSX.Element => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.description}</TableCell>
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

export default RolesTable
