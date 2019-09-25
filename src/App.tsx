import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter as Router } from 'connected-react-router'

import { ThemeProvider, withLayout } from 'features/Ui'
import NotFound from 'features/NotFound'
import Home from 'features/Home'
import Admin from 'features/Admin'
import { Auth, Registration } from 'features/AuthRegistration'
import Documents from 'features/Documents'
import Directions from 'features/Directions'

import store from 'store'
import history from 'utils/history'

import * as routes from 'constants/routes'

const App: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider>
      <Router history={history}>
        <Switch>
          <Route path={routes.home.path} component={withLayout(Home)} exact />
          <Route path={routes.admin.path} exact={routes.admin.exact} component={withLayout(Admin)} />
          <Route path={routes.documents.path} exact={routes.documents.exact} component={withLayout(Documents)} />
          <Route path={routes.directions.path} exact={routes.directions.exact} component={withLayout(Directions)} />

          <Route path={routes.auth.path} exact={routes.auth.exact} component={Auth} />
          <Route path={routes.registration.path} exact={routes.registration.exact} component={Registration} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>
)

export default App
