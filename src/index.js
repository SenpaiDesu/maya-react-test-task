import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import TodoApp from './App';
import registerServiceWorker from './registerServiceWorker';

//import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>, 
  document.getElementById('root'),
);
registerServiceWorker();
