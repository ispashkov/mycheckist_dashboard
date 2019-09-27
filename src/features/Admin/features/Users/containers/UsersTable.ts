import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import UsersTable from '../components/UsersTable'
import { modalToggle, fetch } from '../ducks/actions'
import { UsersState } from '../ducks/reducer'
import { IAppState } from 'interfaces'

type IMapStateToProps = Pick<UsersState, 'data' | 'isLoading'>

export interface IMapDispatchToProps {
  modalToggle: typeof modalToggle
  fetch: typeof fetch
}

const mapStateToProps = ({ admin: { users } }: IAppState): IMapStateToProps => ({
  data: users.data,
  isLoading: users.isLoading,
})

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps =>
  bindActionCreators(
    {
      modalToggle,
      fetch,
    },
    dispatch
  )

export type UsersTableConnectedProps = IMapStateToProps & IMapDispatchToProps

export default connect<IMapStateToProps, IMapDispatchToProps, {}, IAppState>(
  mapStateToProps,
  mapDispatchToProps
)(UsersTable)
