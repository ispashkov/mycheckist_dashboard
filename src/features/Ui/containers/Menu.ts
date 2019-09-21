import { connect } from 'react-redux'
import { Menu } from '../components'
import { IAppState } from 'interfaces'

const mapStateToProps = (state: IAppState) => ({
  isOpenMenu: state.ui.isOpenMenu,
})

export default connect(mapStateToProps)(Menu)
