import { compose } from 'recompose'
import { MapLayer, withLeaflet, Map, MapLayerProps } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet-routing-machine'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core'
import { DirectionsPoint } from 'interfaces'

export interface RoutingMachineProps {
  waypoints: DirectionsPoint[]
  map: Map
}

type RoutingMachineType = RoutingMachineProps & WithStyles & MapLayerProps

class RoutingMachine extends MapLayer<RoutingMachineType> {
  constructor(props: RoutingMachineType) {
    super(props)

    this.getPlan = this.getPlan.bind(this)
  }

  getPlan() {
    const { waypoints, map, classes } = this.props

    const routing: L.Routing.Control = L.Routing.control({
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

    return routing.getPlan()
  }

  createLeafletElement() {
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

export default compose<RoutingMachineType, RoutingMachineProps>(
  withStyles(styles),
  withLeaflet
)(RoutingMachine)
