import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import RolesTable from '../components/RolesTable'
import { modalToggle } from '../ducks/actions'
import { RolesState } from '../ducks/reducer'
import { IAppState } from 'interfaces'

type IMapStateToProps = Pick<RolesState, 'data'>

export interface IMapDispatchToProps {
  modalToggle: typeof modalToggle
}

const mapStateToProps = ({ admin: { roles } }: IAppState): IMapStateToProps => ({
  data: roles.data,
})

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps =>
  bindActionCreators(
    {
      modalToggle,
    },
    dispatch
  )

export type RolesTableConnectedProps = IMapStateToProps & IMapDispatchToProps

export default connect<IMapStateToProps, IMapDispatchToProps, {}, IAppState>(
  mapStateToProps,
  mapDispatchToProps
)(RolesTable)
