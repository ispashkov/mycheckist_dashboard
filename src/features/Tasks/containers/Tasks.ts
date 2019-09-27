import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import Tasks from '../Tasks'
import { viewModeChange, fetch } from '../ducks/actions'
import { TasksState } from '../ducks/reducer'
import { IAppState } from 'interfaces'

type IMapStateToProps = Pick<TasksState, 'view'>

export interface IMapDispatchToProps {
  viewModeChange: typeof viewModeChange
  fetch: typeof fetch
}

const mapStateToProps = ({ tasks }: IAppState): IMapStateToProps => ({
  view: tasks.view,
})

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps =>
  bindActionCreators(
    {
      viewModeChange,
      fetch,
    },
    dispatch
  )

export type TasksConnectedProps = IMapStateToProps & IMapDispatchToProps

export default connect<IMapStateToProps, IMapDispatchToProps, {}, IAppState>(
  mapStateToProps,
  mapDispatchToProps
)(Tasks)
