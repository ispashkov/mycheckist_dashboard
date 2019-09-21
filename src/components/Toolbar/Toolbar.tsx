import React from 'react'
import { Grid, withStyles, WithStyles } from '@material-ui/core'
import { Add as AddIcon } from '@material-ui/icons'
import SearchField from '../SearchField/SearchField'
import ButtonWithIcon from '../ButtonWithIcon'
import styles from './styles'

export interface IProps {
  searchQuery: string
  onSearch(event: React.ChangeEvent<HTMLInputElement>): void
  onAdd(event: React.MouseEvent<HTMLElement, MouseEvent>): void
}

const Toolbar: React.FC<IProps & WithStyles> = ({ searchQuery, onSearch, onAdd, classes }): JSX.Element => (
  <Grid container spacing={2} justify="space-between">
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <SearchField value={searchQuery} onChange={onSearch} />
    </Grid>

    <Grid item xs={12} sm={6} className={classes.right}>
      <ButtonWithIcon title="Создать" color="primary" variant="contained" icon={AddIcon} onClick={onAdd} />
    </Grid>
  </Grid>
)

Toolbar.defaultProps = {
  searchQuery: '',
}

export default withStyles(styles)(Toolbar)
