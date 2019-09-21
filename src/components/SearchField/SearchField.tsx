import React from 'react'
import { TextField, InputAdornment, withStyles, WithStyles } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'
import styles from './styles'

export interface IProps {
  value: string
  name?: string
  placeholder?: string
  customClasses?: object
  onChange(event: React.ChangeEvent<HTMLInputElement>): void
}

const SearchField: React.FunctionComponent<IProps & WithStyles> = ({
  name,
  value,
  onChange,
  placeholder,
  classes,
  customClasses,
}) => (
  <TextField
    variant="outlined"
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon className={classes.icon} />
        </InputAdornment>
      ),
      classes: {
        inputAdornedStart: classes.input,
        ...customClasses,
      },
    }}
    fullWidth
  />
)

SearchField.defaultProps = {
  placeholder: 'Поиск',
  customClasses: {},
}

export default withStyles(styles)(SearchField)
