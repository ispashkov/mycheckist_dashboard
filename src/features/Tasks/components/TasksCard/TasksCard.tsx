import React from 'react'
import { Map, Marker, TileLayer } from 'react-leaflet'
import {
  withStyles,
  WithStyles,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Theme,
  createStyles,
} from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { parseISO, format } from 'date-fns'
import { Task } from '../../interfaces'

export interface TasksCard {
  task: Task
  loading?: boolean
}

const TasksCard: React.FC<TasksCard & WithStyles> = ({ task, loading, classes }): JSX.Element => (
  <Card className={classes.root}>
    {loading && <Skeleton variant="rect" className={classes.map} />}
    {!loading && (
      <Map
        className={classes.map}
        viewport={{
          center: [task.lat as number, task.lng as number],
          zoom: 12,
        }}
        attributionControl={false}
        zoomControl={false}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[task.lat as number, task.lng as number]} />
      </Map>
    )}

    <div className={classes.content}>
      <CardHeader
        title={
          loading ? <Skeleton className={classes.skeletonTitle} variant="rect" height={24} width="80%" /> : task.title
        }
        subheader={
          loading ? <Skeleton className={classes.skeletonSubtitle} variant="rect" height={20} width="40%" /> : task.type
        }
        titleTypographyProps={{
          variant: 'h6',
        }}
        className={classes.header}
        classes={{
          action: classes.headerAction,
        }}
        action={
          loading ? (
            <Skeleton variant="rect" width={90} />
          ) : (
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Выполняется
            </Typography>
          )
        }
      />
      <CardContent className={classes.content}>
        {loading && (
          <>
            <Skeleton variant="rect" width="55%" height={20} className={classes.listItem} />
            <Skeleton variant="rect" width="45%" height={20} className={classes.listItem} />
            <Skeleton variant="rect" width="30%" height={20} className={classes.listItem} />
            <Skeleton variant="rect" width="45%" height={20} />
          </>
        )}

        {!loading && (
          <>
            <Typography variant="body2" color="textSecondary" className={classes.listItem}>
              Постановщик:{' '}
              <Typography variant="body2" color="textPrimary" component="span">
                {task.director}
              </Typography>
            </Typography>
            <Typography variant="body2" color="textSecondary" className={classes.listItem}>
              Исполнитель:{' '}
              <Typography variant="body2" color="textPrimary" component="span">
                {task.executor}
              </Typography>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.listItem}>
              Адрес:{' '}
              <Typography variant="body2" color="textPrimary" component="span">
                {task.address}
              </Typography>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Дата окончания:{' '}
              <Typography variant="body2" color="textPrimary" component="span">
                {format(parseISO(task.date as string), 'dd.mm.yyyy в hh:mm:ss')}
              </Typography>
            </Typography>
          </>
        )}
      </CardContent>
    </div>
  </Card>
)

TasksCard.defaultProps = {
  loading: false,
}

const styles = (theme: Theme) => {
  const mapSize = theme.spacing(26)

  return createStyles({
    root: {
      display: 'flex',
    },
    map: {
      display: 'block',
      flex: `0 0 ${mapSize}px`,
      maxWidth: mapSize,
      height: 0,
      paddingBottom: mapSize,
    },
    header: {
      paddingBottom: 0,
    },
    headerAction: {
      marginTop: 0,
      marginRight: 0,
    },
    content: {
      flex: 1,
    },
    skeletonTitle: {
      marginBottom: theme.spacing(1.5),
    },
    listItem: {
      marginBottom: theme.spacing(0.5),
    },
  })
}

export default withStyles(styles)(TasksCard)
