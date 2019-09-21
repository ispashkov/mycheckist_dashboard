import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import Users from '../components/UsersModal'
import { modalToggle } from '../ducks/actions'
import { UsersState } from '../ducks/reducer'
import { IAppState } from 'interfaces'

type IMapStateToProps = Pick<UsersState, 'editableEntity' | 'isVisibleModal'>

export interface IMapDispatchToProps {
  modalToggle: typeof modalToggle
}

const mapStateToProps = ({ admin: { users } }: IAppState): IMapStateToProps => ({
  isVisibleModal: users.isVisibleModal,
  editableEntity: users.editableEntity,
})

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps =>
  bindActionCreators(
    {
      modalToggle,
    },
    dispatch
  )

export type UsersModalConnectedProps = IMapStateToProps & IMapDispatchToProps

export default connect<IMapStateToProps, IMapDispatchToProps, {}, IAppState>(
  mapStateToProps,
  mapDispatchToProps
)(Users)
