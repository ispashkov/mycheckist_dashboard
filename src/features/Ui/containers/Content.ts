import { connect } from 'react-redux'
import { Content } from '../components'
import { IAppState } from 'interfaces'

const mapStateToProps = (state: IAppState) => ({
  isOpenMenu: state.ui.isOpenMenu,
})

export default connect(mapStateToProps)(Content)
