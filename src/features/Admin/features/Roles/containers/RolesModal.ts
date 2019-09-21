import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import RolesModal from '../components/RolesModal'
import { modalToggle } from '../ducks/actions'
import { RolesState } from '../ducks/reducer'
import { IAppState } from 'interfaces'

type IMapStateToProps = Pick<RolesState, 'editableEntity' | 'isVisibleModal'>

export interface IMapDispatchToProps {
  modalToggle: typeof modalToggle
}

const mapStateToProps = ({ admin: { roles } }: IAppState): IMapStateToProps => ({
  isVisibleModal: roles.isVisibleModal,
  editableEntity: roles.editableEntity,
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
)(RolesModal)
