import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter as Router } from 'connected-react-router'
import { I18nextProvider } from 'react-i18next'

import { ThemeProvider, withLayout } from 'features/Ui'
import NotFound from 'features/NotFound'
import Home from 'features/Home'
import Admin from 'features/Admin'
import { Auth, Registration } from 'features/AuthRegistration'
import Tasks from 'features/Tasks'
import Directions from 'features/Directions'

import store from 'store'
import history from 'utils/history'
import i18n from 'localization'
import * as routes from 'constants/routes'

const App: React.FC = () => (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <Router history={history}>
          <Switch>
            <Route path={routes.home.path} component={withLayout(Home)} exact />
            <Route path={routes.admin.path} exact={routes.admin.exact} component={withLayout(Admin)} />
            <Route path={routes.tasks.path} exact={routes.tasks.exact} component={withLayout(Tasks)} />
            <Route path={routes.directions.path} exact={routes.directions.exact} component={withLayout(Directions)} />

            <Route path={routes.auth.path} exact={routes.auth.exact} component={Auth} />
            <Route path={routes.registration.path} exact={routes.registration.exact} component={Registration} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </ThemeProvider>
    </I18nextProvider>
  </Provider>
)

export default App
