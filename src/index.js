import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/styles.scss';

import { Provider } from 'react-redux';
import store from './reducers/store';

ReactDOM.render(
    // this step ensures that the entire application has access to the store
    <Provider store={store}> 
        <App/>
    </Provider>,
    document.getElementById('index')
    );