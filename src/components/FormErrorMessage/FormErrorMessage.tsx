import React from 'react'
import { FormHelperText } from '@material-ui/core'
import { ErrorMessage } from 'formik'

interface IProps {
  name: string
}

const FormErrorMessage: React.FC<IProps> = ({ name }): JSX.Element => (
  <ErrorMessage name={name} render={(errorMessage: string) => <FormHelperText error>{errorMessage}</FormHelperText>} />
)

export default FormErrorMessage
