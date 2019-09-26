import React, { Component } from 'react'
import {
  withStyles,
  WithStyles,
  Card,
  CardHeader,
  CardContent,
  Grid,
  Typography,
  Tooltip,
  Chip,
  Box,
  Avatar,
} from '@material-ui/core'
import FaceIcon from '@material-ui/icons/Face'
import styles from './styles'
import { ReactComponent as statusDot } from 'assets/status_dot.svg'
import { DocumentStatuses } from 'enums'
import moment from 'moment'

class DocumentItem extends Component<any & WithStyles> {
  iconRenderer = (): JSX.Element => {
    const { document, classes } = this.props

    switch (document.status) {
      case DocumentStatuses.ACTIVE:
        return React.createElement(statusDot, { className: classes.yellowDot })
      case DocumentStatuses.INACTIVE:
        return React.createElement(statusDot, { className: classes.redDot })
      case DocumentStatuses.RESOLVED:
        return React.createElement(statusDot, { className: classes.greenDot })
      default:
        return React.createElement(statusDot, { className: classes.greyDot })
    }
  }

  toolTipRenderer = (): string => {
    const { document } = this.props

    switch (document.status) {
      case DocumentStatuses.ACTIVE:
        return 'Идет обсуждение'
      case DocumentStatuses.INACTIVE:
        return 'Обсуждение не согласовано'
      case DocumentStatuses.RESOLVED:
        return 'Обсуждение было успешно согласовано'
      default:
        return 'Ошибка в статусе обсуждения'
    }
  }

  render(): React.ReactNode {
    const { document, classes } = this.props

    const icon = this.iconRenderer()
    const toolTipText = this.toolTipRenderer()
    const date = moment(document.dateCreation).format('DD.MM.YYYY') || '–'

    return (
      <Card className={classes.card}>
        <CardHeader
          className={classes.header}
          title={document.title}
          titleTypographyProps={{
            variant: 'h6',
          }}
          subheader={document.author}
          classes={{
            action: classes.action,
          }}
          action={
            <Tooltip title={toolTipText}>
              <div className={classes.statusWrp}>
                <Box component="span" className={classes.statusMsg}>
                  {toolTipText}
                </Box>
                {icon}
              </div>
            </Tooltip>
          }
        />
        <CardContent className={classes.content}>
          <Grid container>
            <Grid item xs={12} md={12} lg={12}>
              <Typography variant="body2" gutterBottom>
                {document.description}
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="subtitle2">
                Список участников:{' '}
                <span>
                  {document.members.length > 2 && (
                    <>
                      {document.members.slice(0, 2).map(
                        (member: any, index: number): JSX.Element => (
                          <Chip
                            color="primary"
                            key={index}
                            avatar={
                              <Avatar>
                                <FaceIcon />
                              </Avatar>
                            }
                            label={member}
                            className={classes.chip}
                          />
                        )
                      )}

                      <Chip color="primary" label={`${document.members.length - 2}+`} className={classes.chip} />
                    </>
                  )}

                  {document.members.length <= 2 &&
                    document.members.map(
                      (member: any, index: number): JSX.Element => (
                        <Chip
                          color="primary"
                          key={index}
                          avatar={
                            <Avatar>
                              <FaceIcon />
                            </Avatar>
                          }
                          label={member}
                          className={classes.chip}
                        />
                      )
                    )}
                </span>
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} className={classes.datePosition}>
              <Typography variant="subtitle2">
                Дата открытия: <span className={classes.statusMsg}>{date}</span>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(DocumentItem)
