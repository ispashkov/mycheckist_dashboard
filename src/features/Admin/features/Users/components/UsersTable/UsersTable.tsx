import React, { Component } from 'react'
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  IconButton,
  Tooltip,
  Avatar,
  withStyles,
  WithStyles,
  Theme,
  createStyles,
} from '@material-ui/core'
import { Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons'
import { Skeleton } from '@material-ui/lab'
import Pagination from 'components/Pagination'
import { UsersTableConnectedProps } from '../../containers/UsersTable'
import { User } from 'interfaces'
import emptyAvatar from 'assets/emptyAvatar.svg'
import { UsersState } from '../../ducks/reducer'
import { defaultFetchParams } from '../../../../../../constants'

export interface UsersTableProps extends Pick<UsersState, 'data' | 'isLoading'> {
  onEdit: (row: User) => (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  onRemove: (row: User) => (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

class UsersTable extends Component<UsersTableProps & UsersTableConnectedProps & WithStyles, {}> {
  static readonly defaultProps = {
    data: [],
    isLoading: true,
  }

  componentDidMount(): void {
    this.props.fetch(defaultFetchParams)
  }

  public handleChangePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, page: number): void => {
    console.log(page)
    this.props.fetch(defaultFetchParams)
  }

  public handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    const { value } = event.target

    console.log(value)
    this.props.fetch(defaultFetchParams)
  }

  render(): React.ReactNode {
    const { classes, data, isLoading, onEdit, onRemove } = this.props

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
            {!isLoading &&
              data.map(
                (row: User): JSX.Element => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <Avatar
                        src={row.photo || emptyAvatar}
                        alt={`${row.lastName} ${row.firstName} ${row.middleName}`}
                      />
                    </TableCell>
                    <TableCell>{row.lastName}</TableCell>
                    <TableCell>{row.firstName}</TableCell>
                    <TableCell>{row.middleName}</TableCell>
                    <TableCell>{row.login}</TableCell>
                    <TableCell align="right">
                      <Tooltip title="Редактировать">
                        <IconButton className={classes.btn} color="primary" size="small" onClick={onEdit(row)}>
                          <EditIcon />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Удалить">
                        <IconButton className={classes.btn} color="secondary" size="small" onClick={onRemove(row)}>
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                )
              )}

            {isLoading &&
              Array(10)
                .fill('empty')
                .map(
                  (_, index: number): JSX.Element => (
                    <TableRow key={index}>
                      <TableCell>
                        <Skeleton variant="circle" height={32} width={32} />
                      </TableCell>
                      <TableCell>
                        <Skeleton variant="rect" height={20} />
                      </TableCell>
                      <TableCell>
                        <Skeleton variant="rect" height={20} />
                      </TableCell>
                      <TableCell>
                        <Skeleton variant="rect" height={20} />
                      </TableCell>
                      <TableCell>
                        <Skeleton variant="rect" height={20} />
                      </TableCell>

                      <TableCell>
                        <div className={classes.btnContainer}>
                          <Skeleton className={classes.btn} variant="circle" height={26} width={26} />

                          <Skeleton className={classes.btn} variant="circle" height={26} width={26} />
                        </div>
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

const styles = (theme: Theme) =>
  createStyles({
    btn: {
      display: 'inline-block',
      '&:not(:first-child)': {
        marginLeft: theme.spacing(1),
      },
    },
    btnContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
  })

export default withStyles(styles)(UsersTable)
