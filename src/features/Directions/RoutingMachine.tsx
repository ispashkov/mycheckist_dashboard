import React from 'react'
import { compose } from 'recompose'
import { MapLayer, withLeaflet, Map } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet-routing-machine'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core'
import { DirectionsPoint } from 'interfaces'

export interface RoutingMachineProps {
  waypoints: DirectionsPoint[]
  map: Map
}

class RoutingMachine extends MapLayer<WithStyles & any> {
  constructor(props: any) {
    super(props)

    this.getPlan = this.getPlan.bind(this)
  }
  getPlan() {
    const { waypoints, map, classes } = this.props

    console.log('Route computation: ', waypoints)
    console.log('map: ', map)

    let routing = L.Routing.control({
      waypoints: waypoints.map(
        (w: DirectionsPoint, index: number): L.Routing.Waypoint => ({
          latLng: L.latLng(w.lat, w.lng),
          name: `${index} поинт`,
        })
      ),
      fitSelectedRoutes: false,
      lineOptions: {
        styles: [
          {
            color: 'red',
            opacity: 1,
            weight: 4,
          },
        ],
      },
      router: new L.Routing.OSRMv1({
        useHints: true,
        // @ts-ignore
        language: 'ru',
      }),
      containerClassName: classes.container,
      useZoomParameter: false,
      // @ts-ignore
      addWaypoints: true,
      createMarker: (waypointIndex: number, waypoint: L.Routing.Waypoint, numberWaypoints: number) => {
        console.log(waypointIndex, waypoint, numberWaypoints)
        const { latLng, name } = waypoint

        const marker: L.Marker = new L.Marker(latLng, {
          title: name,
        })

        marker.bindPopup(`<strong>${name}</strong>`)

        return marker
      },
    }).addTo(map.leafletElement)
    console.log(routing)

    return routing.getPlan()
  }

  createLeafletElement() {
    console.log(this)
    return this.getPlan()
  }

  updateLeafletElement(fromProps: any, toProps: any): void {
    if (fromProps.waypoints !== toProps.waypoints) {
      this.getPlan()
    }
  }
}

const styles = (theme: Theme) =>
  createStyles({
    container: {
      color: theme.palette.common.black,
    },
  })

export default compose<RoutingMachineProps, any>(
  withStyles(styles),
  withLeaflet
)(RoutingMachine)
