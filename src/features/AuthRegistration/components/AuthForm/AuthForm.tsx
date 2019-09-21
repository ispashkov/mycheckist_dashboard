import React, { Component } from 'react'
import { FormikProps } from 'formik'
import { Grid, TextField, FormLabel } from '@material-ui/core'
import FormErrorMessage from 'components/FormErrorMessage'
import FormActionBar from 'components/FormActionBar'
import { AuthData } from '../../interfaces'

export interface IProps {
  onCancel(event: React.MouseEvent<HTMLElement, MouseEvent>): void
}

class AuthForm extends Component<IProps & FormikProps<AuthData>, {}> {
  public handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name } = event.target
    const { handleChange, setFieldTouched } = this.props

    handleChange(event)
    setFieldTouched(name as keyof AuthData, true, true)
  }

  render(): React.ReactNode {
    const { values, touched, errors, isValid, handleSubmit, onCancel } = this.props
    const { username, password } = values

    const usernameIsError = Boolean(touched.username && errors.username)
    const passwordIsError = Boolean(touched.password && errors.password)

    return (
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormLabel required error={usernameIsError}>
              Логин
            </FormLabel>
            <TextField name="username" value={username} onChange={this.handleChange} placeholder="Логин" />
            <FormErrorMessage name="username" />
          </Grid>

          <Grid item xs={12}>
            <FormLabel required error={passwordIsError}>
              Пароль
            </FormLabel>
            <TextField
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="Пароль"
            />
            <FormErrorMessage name="password" />
          </Grid>

          <FormActionBar onCancel={onCancel} isDisabledSubmit={!isValid} />
        </Grid>
      </form>
    )
  }
}

export default AuthForm
