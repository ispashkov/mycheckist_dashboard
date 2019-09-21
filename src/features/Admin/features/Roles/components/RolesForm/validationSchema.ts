/* eslint-disable no-template-curly-in-string */
import * as yup from 'yup'

export default yup.object().shape({
  name: yup
    .string()
    .min(2, 'Допустимое количество символов не должно быть меньше ${min}')
    .max(255, 'Допустимое количество символов не должно быть меньше ${max}')
    .required('Обязательное поле'),
  description: yup
    .string()
    .min(2, 'Допустимое количество символов не должно быть меньше ${min}')
    .max(255, 'Допустимое количество символов не должно быть меньше ${max}'),
})
