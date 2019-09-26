import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Header } from '../components'
import { themeToggle, menuToggle } from '../ducks/actions'
import { IAppState } from 'interfaces'
import { UIState } from '../ducks/reducer'

export type HeaderMapState = Pick<UIState, 'isOpenMenu' | 'themeType'>

export type HeaderMapDispatch = {
  themeToggle: typeof themeToggle
  menuToggle: typeof menuToggle
}

const mapStateToProps = ({ ui: { isOpenMenu, themeType } }: IAppState): HeaderMapState => ({
  isOpenMenu,
  themeType,
})

const mapDispatchToProps = (dispatch: Dispatch): HeaderMapDispatch =>
  bindActionCreators(
    {
      themeToggle,
      menuToggle,
    },
    dispatch
  )

export default connect<HeaderMapState, HeaderMapDispatch, {}, IAppState>(
  mapStateToProps,
  mapDispatchToProps
)(Header)
