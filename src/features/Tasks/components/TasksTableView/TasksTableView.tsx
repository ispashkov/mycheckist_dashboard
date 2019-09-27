import React from 'react'
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  IconButton,
  Tooltip,
  withStyles,
  WithStyles,
  Theme,
  createStyles,
} from '@material-ui/core'
import { Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons'
import { Skeleton } from '@material-ui/lab'
import { format, parseISO } from 'date-fns'
import Pagination from 'components/Pagination'
import { TasksViewConnectedProps } from '../../containers/TasksViews'
import { Task, TasksViewProps } from '../../interfaces'

export interface TasksTableProps extends TasksViewProps {
  onEdit: (row: Task) => (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  onRemove: (row: Task) => (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const TasksTableView: React.FC<TasksTableProps & TasksViewConnectedProps & WithStyles> = ({
  classes,
  data,
  isLoading,
  onEdit,
  onRemove,
  onChangePage,
  onChangeRowsPerPage,
}): JSX.Element => (
  <Paper>
    <div className={classes.tableContainer}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Название</TableCell>
            <TableCell>Тип</TableCell>
            <TableCell>Постановщик</TableCell>
            <TableCell>Исполнитель</TableCell>
            <TableCell>Статус</TableCell>
            <TableCell>Адрес</TableCell>
            <TableCell>Дата завершения</TableCell>
            {/*<TableCell />*/}
          </TableRow>
        </TableHead>

        <TableBody>
          {!isLoading &&
            data.map(
              (row: Task): JSX.Element => (
                <TableRow key={row.id}>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.director}</TableCell>
                  <TableCell>{row.executor}</TableCell>
                  <TableCell>Выполняется</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{format(parseISO(row.date as string), 'dd.mm.yyyy в hh:mm:ss')}</TableCell>
                  {/*<TableCell align="right">*/}
                  {/*  <Tooltip title="Редактировать">*/}
                  {/*    <IconButton className={classes.btn} color="primary" size="small" onClick={onEdit(row)}>*/}
                  {/*      <EditIcon />*/}
                  {/*    </IconButton>*/}
                  {/*  </Tooltip>*/}

                  {/*  <Tooltip title="Удалить">*/}
                  {/*    <IconButton className={classes.btn} color="secondary" size="small" onClick={onRemove(row)}>*/}
                  {/*      <DeleteIcon />*/}
                  {/*    </IconButton>*/}
                  {/*  </Tooltip>*/}
                  {/*</TableCell>*/}
                </TableRow>
              )
            )}

          {isLoading &&
            Array(10)
              .fill('empty')
              .map(
                (_, index: number): JSX.Element => (
                  <TableRow key={index}>
                    {Array(7)
                      .fill('cell')
                      .map(
                        (_, index: number): JSX.Element => (
                          <TableCell key={index}>
                            <Skeleton variant="rect" height={20} />
                          </TableCell>
                        )
                      )}

                    {/*<TableCell>*/}
                    {/*  <div className={classes.btnContainer}>*/}
                    {/*    <Skeleton className={classes.btn} variant="circle" height={26} width={26} />*/}

                    {/*    <Skeleton className={classes.btn} variant="circle" height={26} width={26} />*/}
                    {/*  </div>*/}
                    {/*</TableCell>*/}
                  </TableRow>
                )
              )}
        </TableBody>
      </Table>
    </div>

    <Pagination onChangePage={onChangePage} onChangeRowsPerPage={onChangeRowsPerPage} />
  </Paper>
)

TasksTableView.defaultProps = {
  data: [],
  isLoading: true,
}

const styles = (theme: Theme) =>
  createStyles({
    tableContainer: {
      width: '100%',
      overflowX: 'auto',
    },
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

export default withStyles(styles)(TasksTableView)
