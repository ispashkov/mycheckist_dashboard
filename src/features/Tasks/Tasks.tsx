import React, { Component } from 'react'
import { createStyles, Grid, Theme, Typography, withStyles, WithStyles } from '@material-ui/core'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'
import { MapOutlined, ViewHeadlineOutlined, ViewListOutlined } from '@material-ui/icons'
import TasksCardView from './containers/TasksCardView'
import { TasksViewMode } from './enums'
import { TasksCardViewConnectedProps } from './containers/Tasks'
import { defaultFetchParams } from '../../constants'

class Tasks extends Component<TasksCardViewConnectedProps & WithStyles, {}> {
  static readonly defaultProps = {
    view: TasksViewMode.card,
  }

  componentDidMount(): void {
    this.props.fetch(defaultFetchParams)
  }

  public handleChange = (event: React.MouseEvent<HTMLElement>, mode: keyof typeof TasksViewMode): void => {
    this.props.viewModeChange(mode)
  }

  render(): React.ReactNode {
    const { classes, view } = this.props

    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={8} className={classes.toolbarLeft}>
            <Typography className={classes.title} variant="h5">
              Задачи
            </Typography>
          </Grid>

          <Grid item xs={4} className={classes.toolbarRight}>
            <ToggleButtonGroup value={view} onChange={this.handleChange} size="small" exclusive>
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

        {view === TasksViewMode.card && <TasksCardView />}

        {view === TasksViewMode.table && <Typography>Таблица еще не готова</Typography>}

        {view === TasksViewMode.map && <Typography>Карта еще не готова</Typography>}
      </div>
    )
  }
}

const styles = (theme: Theme) =>
  createStyles({
    title: {
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
