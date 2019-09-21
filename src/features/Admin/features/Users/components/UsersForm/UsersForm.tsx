import React, { Component } from 'react'
import { FormikProps } from 'formik'
import { Grid, TextField, FormLabel } from '@material-ui/core'
import FormErrorMessage from 'components/FormErrorMessage'
import FormActionBar from 'components/FormActionBar'
import { User } from 'interfaces'
import removeNumbersFromString from 'utils/removeNumbersFromString'

export interface IProps {
  onCancel(event: React.MouseEvent<HTMLElement, MouseEvent>): void
}

class UsersForm extends Component<IProps & FormikProps<User>, {}> {
  public handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target
    const { handleChange, setFieldTouched } = this.props

    if (name === 'firstName' || name === 'lastName' || name === 'middleName') {
      event.target.value = removeNumbersFromString(value)
    }

    handleChange(event)
    setFieldTouched(name as keyof User, true, true)
  }

  render(): React.ReactNode {
    const { values, touched, errors, isValid, handleSubmit, onCancel } = this.props
    const { firstName, middleName, lastName, login } = values

    const firstNameIsError = Boolean(touched.firstName && errors.firstName)
    const middleNameIsError = Boolean(touched.middleName && errors.middleName)
    const lastNameIsError = Boolean(touched.lastName && errors.lastName)
    const loginIsError = Boolean(touched.login && errors.login)

    return (
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormLabel required error={loginIsError}>
              Логин
            </FormLabel>
            <TextField name="login" value={login} onChange={this.handleChange} placeholder="Логин" />
            <FormErrorMessage name="login" />
          </Grid>

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

          <FormActionBar onCancel={onCancel} isDisabledSubmit={!isValid} />
        </Grid>
      </form>
    )
  }
}

export default UsersForm
