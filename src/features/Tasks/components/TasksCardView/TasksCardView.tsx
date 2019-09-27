import React from 'react'
import { Grid } from '@material-ui/core'
import Pagination from 'components/Pagination'
import TasksCard from './TasksCard'
import { TasksViewConnectedProps } from '../../containers/TasksViews'
import { Task, TasksViewProps } from '../../interfaces'
import TasksService from '../../Service'

const emptyTask: Task = TasksService.getEmptyEntity()

const TasksCardView: React.FC<TasksViewProps & TasksViewConnectedProps> = ({
  data,
  isLoading,
  onChangePage,
  onChangeRowsPerPage,
}): JSX.Element => (
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

    <Pagination onChangePage={onChangePage} onChangeRowsPerPage={onChangeRowsPerPage} />
  </div>
)

TasksCardView.defaultProps = {
  data: [],
  isLoading: false,
}

export default TasksCardView
