import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import Pagination from 'components/Pagination'
import TasksCard from '../TasksCard'
import { TasksCardViewConnectedProps } from '../../containers/TasksCardView'
import { Task } from '../../interfaces'
import { defaultFetchParams } from '../../../../constants'
import TasksService from '../../Service'

const emptyTask: Task = TasksService.getEmptyEntity()

class TasksCardView extends Component<TasksCardViewConnectedProps, {}> {
  static readonly defaultProps = {
    data: [],
    isLoading: false,
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

  render(): JSX.Element {
    const { data, isLoading } = this.props

    return (
      <div>
        <Grid container spacing={2}>
          {!isLoading &&
            data.map(
              (task: Task): JSX.Element => (
                <Grid item xs={12} key={task.id}>
                  <TasksCard task={task} />
                </Grid>
              )
            )}

          {isLoading &&
            Array(10)
              .fill('empty')
              .map(
                (_, index: number): JSX.Element => (
                  <Grid item xs={12} key={index}>
                    <TasksCard task={emptyTask} loading />
                  </Grid>
                )
              )}
        </Grid>

        <Pagination onChangePage={this.handleChangePage} onChangeRowsPerPage={this.handleChangeRowsPerPage} />
      </div>
    )
  }
}

export default TasksCardView
