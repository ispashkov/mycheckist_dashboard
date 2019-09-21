import React, { Component } from 'react'
import { Typography, Grid, withStyles, WithStyles, Theme, createStyles } from '@material-ui/core'
import DocumentItem from '../components/DocumentItem'
import { docs } from '../docsMock'

class Documents extends Component<WithStyles & any, {}> {
  render(): React.ReactNode {
    const { classes } = this.props

    return (
      <div>
        <Typography className={classes.title} variant="h5">
          Обсуждаемые вопросы
        </Typography>

        <Grid container spacing={2}>
          {docs.map(
            (doc: any, index: number): JSX.Element => (
              <Grid item xs={12} key={index} className={classes.card}>
                <DocumentItem document={doc} />
              </Grid>
            )
          )}
        </Grid>
      </div>
    )
  }
}

const styles = (theme: Theme) =>
  createStyles({
    title: {
      marginBottom: theme.spacing(2),
    },
  })

export default withStyles(styles)(Documents)
