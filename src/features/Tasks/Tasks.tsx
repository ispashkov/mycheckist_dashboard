import React, { Component } from 'react'
import { compose } from 'recompose'
import { withTranslation, WithTranslation } from 'react-i18next'
import { Grid, Tooltip, Typography, withStyles, WithStyles, Theme, createStyles } from '@material-ui/core'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'
import { MapOutlined, ViewHeadlineOutlined, ViewListOutlined } from '@material-ui/icons'
import { TasksCardViewConnected, TasksTableViewConnected, TasksTablePropsConnected } from './containers/TasksViews'
import { TasksViewMode } from './enums'
import { TasksConnectedProps } from './containers/Tasks'
import { defaultFetchParams } from '../../constants'
import { Task } from './interfaces'

type TasksProps = TasksConnectedProps & WithStyles & WithTranslation

class Tasks extends Component<TasksProps, {}> {
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
    const { classes, view, t } = this.props

    return (
      <div>
        <Grid container spacing={2} className={classes.toolbar}>
          <Grid item xs={8} className={classes.toolbarLeft}>
            <Typography variant="h5">{t('tasks.title')}</Typography>
          </Grid>

          <Grid item xs={4} className={classes.toolbarRight}>
            <ToggleButtonGroup value={view} onChange={this.handleChangeViewMode} size="small" exclusive>
              <Tooltip title={t('tasks.viewMode.card')}>
                <ToggleButton value={TasksViewMode.card} selected={view === TasksViewMode.card} disableRipple>
                  <ViewListOutlined />
                </ToggleButton>
              </Tooltip>

              <Tooltip title={t('tasks.viewMode.table')}>
                <ToggleButton value={TasksViewMode.table} selected={view === TasksViewMode.table} disableRipple>
                  <ViewHeadlineOutlined />
                </ToggleButton>
              </Tooltip>

              <Tooltip title={t('tasks.viewMode.map')}>
                <ToggleButton value={TasksViewMode.map} selected={view === TasksViewMode.map} disableRipple>
                  <MapOutlined />
                </ToggleButton>
              </Tooltip>
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

        {view === TasksViewMode.map && <TasksTablePropsConnected />}
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

export default compose<TasksProps, {}>(
  withTranslation(),
  withStyles(styles)
)(Tasks)
