import { connect } from 'react-redux'
import { Menu } from '../components'
import { IAppState, IRoute } from 'interfaces'
import { UIState } from '../ducks/reducer'
import { getHeaderRoutes } from '../ducks/selectors'

export interface MenuMapState extends Pick<UIState, 'isOpenMenu'> {
  routes: IRoute[]
}

const mapStateToProps = (state: IAppState): MenuMapState => ({
  isOpenMenu: state.ui.isOpenMenu,
  routes: getHeaderRoutes(state),
})

export default connect<MenuMapState, {}, {}, IAppState>(mapStateToProps)(Menu)
