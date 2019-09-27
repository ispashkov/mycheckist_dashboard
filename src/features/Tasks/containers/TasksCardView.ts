import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import TasksCardView from '../components/TasksCardView'
import { fetch } from '../ducks/actions'
import { TasksState } from '../ducks/reducer'
import { IAppState } from 'interfaces'

type IMapStateToProps = Pick<TasksState, 'data' | 'isLoading'>

export interface IMapDispatchToProps {
  fetch: typeof fetch
}

const mapStateToProps = ({ tasks }: IAppState): IMapStateToProps => ({
  data: tasks.data,
  isLoading: tasks.isLoading,
})

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps =>
  bindActionCreators(
    {
      fetch,
    },
    dispatch
  )

export type TasksCardViewConnectedProps = IMapStateToProps & IMapDispatchToProps

export default connect<IMapStateToProps, IMapDispatchToProps, {}, IAppState>(
  mapStateToProps,
  mapDispatchToProps
)(TasksCardView)
