import React, { Component } from 'react'
import { Map, TileLayer, Viewport, Marker, Popup } from 'react-leaflet'
import L, { LeafletMouseEvent } from 'leaflet'
import MarkerIcon from 'leaflet/dist/images/marker-icon.png'
import MarkerShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { Paper, Fab, Tooltip, withStyles, WithStyles, Theme, createStyles } from '@material-ui/core'
import { GpsNotFixedOutlined as CreateModeIcon, GpsOffOutlined as CreateModeOffIcon } from '@material-ui/icons'
import { debounce } from 'throttle-debounce'
import clsx from 'clsx'
import { DirectionsPoint } from 'interfaces'
import RoutingMachine from './RoutingMachine'

const DefaultIcon = L.icon({
  iconUrl: MarkerIcon,
  shadowUrl: MarkerShadow,
})

L.Marker.prototype.options.icon = DefaultIcon

export interface DirectionsState {
  viewport: Viewport
  points: DirectionsPoint[]
  isEnableCreatePoint: boolean
  route: DirectionsPoint[]
  isEnableRouting: boolean
}

class Directions extends Component<WithStyles, DirectionsState> {
  private mapRef: Map | null = null

  readonly state: DirectionsState = {
    viewport: {
      center: [55.75370903771494, 37.61981338262558],
      zoom: 10,
    },
    points: [],
    isEnableCreatePoint: false,
    isEnableRouting: false,
    route: [
      {
        lat: 55.71860232605969,
        lng: 37.52105712890626,
      },
      {
        lat: 55.8089989927049,
        lng: 37.59521484375001,
      },
      {
        lat: 55.82751600219386,
        lng: 37.69958496093751,
      },
      {
        lat: 55.82751600219386,
        lng: 37.46887207031251,
      },
    ],
  }

  public handleCreateRef = (map: Map): void => {
    this.mapRef = map

    this.setState({
      isEnableRouting: true,
    })
  }

  public handleChangeViewport = debounce(100, (viewport: Viewport): void => {
    this.setState({
      viewport,
    })
  })

  public handleToggleCreateMode = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    event.stopPropagation()
    event.nativeEvent.stopImmediatePropagation()

    this.setState(({ isEnableCreatePoint }: DirectionsState) => ({
      isEnableCreatePoint: !isEnableCreatePoint,
    }))
  }

  public handleClickMap = (event: LeafletMouseEvent): void => {
    const { isEnableCreatePoint } = this.state

    if (isEnableCreatePoint) {
      const { lat, lng } = event.latlng

      this.setState(({ points }: DirectionsState) => ({
        points: [...points, { lat, lng }],
      }))
    }
  }

  render(): JSX.Element {
    const { viewport, points, isEnableCreatePoint, route, isEnableRouting } = this.state
    const { classes } = this.props

    return (
      <Paper className={classes.root}>
        <Tooltip title={isEnableCreatePoint ? 'Отключить добавление точек' : 'Включить добавление точек'}>
          <Fab className={clsx(classes.btn, classes.btnCreateMode)} onClick={this.handleToggleCreateMode}>
            {isEnableCreatePoint ? <CreateModeIcon /> : <CreateModeOffIcon />}
          </Fab>
        </Tooltip>

        <Map
          className={classes.map}
          viewport={viewport}
          ref={this.handleCreateRef}
          onViewportChange={this.handleChangeViewport}
          onclick={this.handleClickMap}
          attributionControl={false}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {points.map(
            (p: DirectionsPoint, index: number): JSX.Element => (
              <Marker key={index} position={[p.lat, p.lng]}>
                <Popup>Ку ку епта:)</Popup>
              </Marker>
            )
          )}

          {isEnableRouting && <RoutingMachine map={this.mapRef as Map} waypoints={route} />}
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
      height: `calc(100vh - ${theme.spacing(16)}px)`,
    },
    btn: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.primary.main,
    },
    btnCreateMode: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      zIndex: theme.zIndex.tooltip,
    },
  })

export default withStyles(styles)(Directions)
