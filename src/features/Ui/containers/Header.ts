import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Header } from '../components'
import { themeToggle, menuToggle } from '../ducks/actions'
import { IAppState } from 'interfaces'

const mapStateToProps = ({ ui: { isOpenMenu, themeType } }: IAppState) => ({
  isOpenMenu,
  themeType,
})

export const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      themeToggle,
      menuToggle,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
