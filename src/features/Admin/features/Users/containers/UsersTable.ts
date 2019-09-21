import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import UsersTable from '../components/UsersTable'
import { modalToggle } from '../ducks/actions'
import { UsersState } from '../ducks/reducer'
import { IAppState } from 'interfaces'

type IMapStateToProps = Pick<UsersState, 'data'>

export interface IMapDispatchToProps {
  modalToggle: typeof modalToggle
}

const mapStateToProps = ({ admin: { users } }: IAppState): IMapStateToProps => ({
  data: users.data,
})

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps =>
  bindActionCreators(
    {
      modalToggle,
    },
    dispatch
  )

export type UsersTableConnectedProps = IMapStateToProps & IMapDispatchToProps

export default connect<IMapStateToProps, IMapDispatchToProps, {}, IAppState>(
  mapStateToProps,
  mapDispatchToProps
)(UsersTable)
