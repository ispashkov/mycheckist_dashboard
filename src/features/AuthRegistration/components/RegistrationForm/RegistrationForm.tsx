import React, { Component } from 'react'
import { FormikProps } from 'formik'
import { Grid, TextField, FormLabel } from '@material-ui/core'
import FormErrorMessage from 'components/FormErrorMessage'
import FormActionBar from 'components/FormActionBar'
import { RegistrationData } from '../../interfaces'
import removeNumbersFromString from 'utils/removeNumbersFromString'

export interface IProps {
  onCancel(event: React.MouseEvent<HTMLElement, MouseEvent>): void
}

class RegistrationForm extends Component<IProps & FormikProps<RegistrationData>, {}> {
  public handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target
    const { handleChange, setFieldTouched } = this.props

    if (name === 'firstName' || name === 'lastName' || name === 'middleName') {
      event.target.value = removeNumbersFromString(value)
    }

    handleChange(event)
    setFieldTouched(name as keyof RegistrationData, true, true)
  }

  render(): React.ReactNode {
    const { values, touched, errors, isValid, handleSubmit, onCancel } = this.props
    const { firstName, middleName, lastName, username, password, passwordCompare } = values

    const firstNameIsError = Boolean(touched.firstName && errors.firstName)
    const middleNameIsError = Boolean(touched.middleName && errors.middleName)
    const lastNameIsError = Boolean(touched.lastName && errors.lastName)
    const usernameIsError = Boolean(touched.username && errors.username)
    const passwordIsError = Boolean(touched.password && errors.password)

    return (
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormLabel required error={lastNameIsError}>
              Фамилия
            </FormLabel>
            <TextField name="lastName" value={lastName} onChange={this.handleChange} placeholder="Фамилия" />
            <FormErrorMessage name="lastName" />
          </Grid>

          <Grid item xs={12}>
            <FormLabel required error={firstNameIsError}>
              Имя
            </FormLabel>
            <TextField name="firstName" value={firstName} onChange={this.handleChange} placeholder="Имя" />
            <FormErrorMessage name="firstName" />
          </Grid>

          <Grid item xs={12}>
            <FormLabel error={middleNameIsError}>Отчество</FormLabel>
            <TextField name="middleName" value={middleName} onChange={this.handleChange} placeholder="Отчество" />
            <FormErrorMessage name="middleName" />
          </Grid>

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

          <Grid item xs={12}>
            <FormLabel required error={passwordIsError}>
              Подтвердите пароль
            </FormLabel>
            <TextField
              type="password"
              name="passwordCompare"
              value={passwordCompare}
              onChange={this.handleChange}
              placeholder="Подтвердите пароль"
            />
            <FormErrorMessage name="passwordCompare" />
          </Grid>

          <FormActionBar onCancel={onCancel} isDisabledSubmit={!isValid} />
        </Grid>
      </form>
    )
  }
}

export default RegistrationForm
