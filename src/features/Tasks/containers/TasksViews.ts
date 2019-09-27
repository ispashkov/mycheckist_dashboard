import { connect } from 'react-redux'
import TasksCardView from '../components/TasksCardView'
import TasksTableView from '../components/TasksTableView'
import TasksMapView from '../components/TasksMapView'
import { TasksTableProps } from '../components/TasksTableView/TasksTableView'
import { TasksState } from '../ducks/reducer'
import { IAppState } from 'interfaces'
import { TasksViewProps } from '../interfaces'

type IMapStateToProps = Pick<TasksState, 'data' | 'isLoading'>

const mapStateToProps = ({ tasks }: IAppState): IMapStateToProps => ({
  data: tasks.data,
  isLoading: tasks.isLoading,
})

export type TasksViewConnectedProps = IMapStateToProps

const TasksCardViewConnected = connect<IMapStateToProps, {}, TasksViewProps, IAppState>(mapStateToProps)(TasksCardView)
const TasksTableViewConnected = connect<IMapStateToProps, {}, TasksTableProps, IAppState>(mapStateToProps)(
  TasksTableView
)
const TasksTablePropsConnected = connect<IMapStateToProps, {}, {}, IAppState>(mapStateToProps)(TasksMapView)

export { TasksCardViewConnected, TasksTableViewConnected, TasksTablePropsConnected }
