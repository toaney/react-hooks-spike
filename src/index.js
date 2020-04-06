import ReactDOM from 'react-dom';
import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch} from 'react-router-dom';
import './scss/styles.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import Header from './components/header/header';
import Assignments from './pages/assignments';
import LocalStateExample from './pages/localState';
import ReduxStateExample from './pages/reduxState';

const history = createBrowserHistory();

// Initialize redux store
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Header />
      <Switch>
        <Route path="/assignments" component={ Assignments } />
        <Route path="/local_state" component={ LocalStateExample } />
        <Route path="/redux_state" component={ ReduxStateExample } />
        <Route component={ Assignments } />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);