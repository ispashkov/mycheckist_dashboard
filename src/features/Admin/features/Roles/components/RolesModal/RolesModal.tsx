import React, { Component } from 'react'
import { Formik, FormikProps } from 'formik'
import Modal from 'components/Modal'
import { UsersModalConnectedProps } from '../../containers/RolesModal'
import RolesForm, { validationSchema } from '../RolesForm'
import { Role } from 'interfaces'
import RolesService from '../../Service'

export interface IState {
  values: Role
}

class RolesModal extends Component<UsersModalConnectedProps, IState> {
  static readonly defaultProps = {
    isVisibleModal: false,
    editableEntity: null,
  }

  readonly state: IState = {
    values: RolesService.getEmptyEntity(),
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
        values: RolesService.getEmptyEntity(),
      })
    }
  }

  public handleClose = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    this.props.modalToggle()
  }

  public handleSubmit = (role: Role): void => {
    console.log(role)
  }

  render(): React.ReactNode {
    const { isVisibleModal } = this.props
    const { values } = this.state

    return (
      <Modal open={isVisibleModal} title="Создать роль" onClose={this.handleClose}>
        <Formik
          onSubmit={this.handleSubmit}
          initialValues={values}
          validationSchema={validationSchema}
          render={(props: FormikProps<Role>): JSX.Element => <RolesForm {...props} onCancel={this.handleClose} />}
        />
      </Modal>
    )
  }
}

export default RolesModal
