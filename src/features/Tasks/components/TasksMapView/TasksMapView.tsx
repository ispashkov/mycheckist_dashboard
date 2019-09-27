import React, { Component } from 'react'
import { Map, TileLayer, Viewport, Marker, Popup } from 'react-leaflet'
import { Paper, withStyles, WithStyles, Theme, createStyles } from '@material-ui/core'
import { debounce } from 'throttle-debounce'
import { TasksViewConnectedProps } from '../../containers/TasksViews'
import { Task } from '../../interfaces'

export interface TasksMapViewState {
  viewport: Viewport
}

class TasksMapView extends Component<TasksViewConnectedProps & WithStyles, TasksMapViewState> {
  private mapRef: Map | null = null

  static readonly defaultProps = {
    data: [],
  }

  readonly state: TasksMapViewState = {
    viewport: {
      center: [55.75370903771494, 37.61981338262558],
      zoom: 10,
    },
  }

  public handleCreateRef = (map: Map): void => {
    this.mapRef = map
  }

  public handleChangeViewport = debounce(100, (viewport: Viewport): void => {
    this.setState({
      viewport,
    })
  })

  render(): JSX.Element {
    const { viewport } = this.state
    const { classes, data } = this.props

    return (
      <Paper className={classes.root}>
        <Map
          className={classes.map}
          viewport={viewport}
          ref={this.handleCreateRef}
          onViewportChange={this.handleChangeViewport}
          attributionControl={false}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {data.map(
            (task: Task): JSX.Element => (
              <Marker key={task.id} position={[task.lat as number, task.lng as number]}>
                <Popup>{task.title}</Popup>
              </Marker>
            )
          )}
        </Map>
      </Paper>
    )
  }
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
    },
    map: {
      height: `calc(100vh - ${theme.spacing(24)}px)`,
    },
  })

export default withStyles(styles)(TasksMapView)
