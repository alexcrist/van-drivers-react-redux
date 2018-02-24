import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import reducers from './state/reducers';
import defaultState from './state/defaultState';
import App from './App';

const store = createStore(
  reducers,
  defaultState,
  applyMiddleware(thunk)
);

const muiTheme = getMuiTheme({
  fontFamily: 'Open Sans, sans-serif'
});

const content = (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <App />
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(content, document.getElementById('root'));
