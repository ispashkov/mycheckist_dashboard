import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import Users from '../Users'
import { modalToggle, edit } from '../ducks/actions'
import { IAppState } from 'interfaces'

interface IMapDispatchToProps {
  modalToggle: typeof modalToggle
  edit: typeof edit
}

export type UsersConnectedProps = IMapDispatchToProps

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps =>
  bindActionCreators(
    {
      modalToggle,
      edit,
    },
    dispatch
  )

export default connect<null, IMapDispatchToProps, {}, IAppState>(
  null,
  mapDispatchToProps
)(Users)
