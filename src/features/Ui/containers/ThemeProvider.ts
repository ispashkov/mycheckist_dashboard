import { connect } from 'react-redux'
import ThemeProvider from '../components/ThemeProvider'
import { IAppState } from 'interfaces'

const mapStateToProps = (state: IAppState) => ({
  theme: state.ui.theme,
})

export default connect(mapStateToProps)(ThemeProvider)
