import React, { Component } from 'react'
import { FormikProps } from 'formik'
import { Grid, TextField, FormLabel } from '@material-ui/core'
import FormErrorMessage from 'components/FormErrorMessage'
import FormActionBar from 'components/FormActionBar'
import { Role } from 'interfaces'

export interface IProps {
  onCancel(event: React.MouseEvent<HTMLElement, MouseEvent>): void
}

class RolesForm extends Component<IProps & FormikProps<Role>, {}> {
  public handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name } = event.target
    const { handleChange, setFieldTouched } = this.props

    handleChange(event)
    setFieldTouched(name as keyof Role, true, true)
  }

  render(): React.ReactNode {
    const { values, touched, errors, isValid, handleSubmit, onCancel } = this.props
    const { name, description } = values

    const nameIsError = Boolean(touched.name && errors.name)
    const descIsError = Boolean(touched.description && errors.description)

    return (
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormLabel required error={nameIsError}>
              Название
            </FormLabel>
            <TextField name="name" value={name} onChange={this.handleChange} placeholder="Название" />
            <FormErrorMessage name="name" />
          </Grid>

          <Grid item xs={12}>
            <FormLabel error={descIsError}>Описание</FormLabel>
            <TextField name="description" value={description} onChange={this.handleChange} placeholder="Описание" />
            <FormErrorMessage name="description" />
          </Grid>

          <FormActionBar onCancel={onCancel} isDisabledSubmit={!isValid} />
        </Grid>
      </form>
    )
  }
}

export default RolesForm
