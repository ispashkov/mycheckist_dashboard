import React, { Component } from 'react'
import { createStyles, Grid, Theme, Typography, withStyles, WithStyles } from '@material-ui/core'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'
import { MapOutlined, ViewHeadlineOutlined, ViewListOutlined } from '@material-ui/icons'
import { TasksCardViewConnected, TasksTableViewConnected } from './containers/TasksViews'
import { TasksViewMode } from './enums'
import { TasksConnectedProps } from './containers/Tasks'
import { defaultFetchParams } from '../../constants'
import { Task } from './interfaces'

class Tasks extends Component<TasksConnectedProps & WithStyles, {}> {
  static readonly defaultProps = {
    view: TasksViewMode.card,
  }

  componentDidMount(): void {
    this.props.fetch(defaultFetchParams)
  }

  public handleChangeViewMode = (event: React.MouseEvent<HTMLElement>, mode: keyof typeof TasksViewMode): void => {
    if (mode) {
      this.props.viewModeChange(mode)
    }
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

  public handleEdit = (task: Task) => (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    console.log(task)
  }

  public handleRemove = (task: Task) => (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    console.log(task)
  }

  render(): React.ReactNode {
    const { classes, view } = this.props

    return (
      <div>
        <Grid container spacing={2} className={classes.toolbar}>
          <Grid item xs={8} className={classes.toolbarLeft}>
            <Typography variant="h5">Задачи</Typography>
          </Grid>

          <Grid item xs={4} className={classes.toolbarRight}>
            <ToggleButtonGroup value={view} onChange={this.handleChangeViewMode} size="small" exclusive>
              <ToggleButton value={TasksViewMode.card} disableRipple>
                <ViewListOutlined />
              </ToggleButton>

              <ToggleButton value={TasksViewMode.table} disableRipple>
                <ViewHeadlineOutlined />
              </ToggleButton>

              <ToggleButton value={TasksViewMode.map} disableRipple>
                <MapOutlined />
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </Grid>

        {view === TasksViewMode.card && (
          <TasksCardViewConnected
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        )}

        {view === TasksViewMode.table && (
          <TasksTableViewConnected
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
            onEdit={this.handleEdit}
            onRemove={this.handleRemove}
          />
        )}

        {view === TasksViewMode.map && <Typography>Карта еще не готова</Typography>}
      </div>
    )
  }
}

const styles = (theme: Theme) =>
  createStyles({
    toolbar: {
      marginBottom: theme.spacing(2),
    },
    toolbarLeft: {
      display: 'flex',
      alignItems: 'center',
    },
    toolbarRight: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
  })

export default withStyles(styles)(Tasks)
