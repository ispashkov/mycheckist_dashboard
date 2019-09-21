import React, { Component } from 'react'
import { Formik, FormikProps } from 'formik'
import Modal from 'components/Modal'
import { UsersModalConnectedProps } from '../../containers/UsersModal'
import UsersForm, { validationSchema } from '../UsersForm'
import { User } from 'interfaces'
import UsersService from '../../Service'

export interface IState {
  values: User
}

class UsersModal extends Component<UsersModalConnectedProps, IState> {
  static readonly defaultProps = {
    isVisibleModal: true,
    editableEntity: null,
  }

  readonly state: IState = {
    values: UsersService.getEmptyEntity(),
  }

  componentDidUpdate(prevProps: Readonly<UsersModalConnectedProps>, prevState: Readonly<IState>): void {
    const { editableEntity } = this.props

    if (!prevProps.editableEntity && editableEntity) {
      this.setState({
        values: editableEntity,
      })
    }

    if (prevProps.editableEntity && !editableEntity) {
      this.setState({
        values: UsersService.getEmptyEntity(),
      })
    }
  }

  public handleClose = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    this.props.modalToggle()
  }

  public handleSubmit = (user: User): void => {
    console.log(user)
  }

  render(): React.ReactNode {
    const { isVisibleModal } = this.props
    const { values } = this.state

    return (
      <Modal open={isVisibleModal} title="Создать пользователя" onClose={this.handleClose}>
        <Formik
          onSubmit={this.handleSubmit}
          initialValues={values}
          validationSchema={validationSchema}
          render={(props: FormikProps<User>): JSX.Element => <UsersForm {...props} onCancel={this.handleClose} />}
        />
      </Modal>
    )
  }
}

export default UsersModal
