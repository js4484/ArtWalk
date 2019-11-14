import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import AppToo from './app_too';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <AppToo store={store}/>
        </HashRouter>
    </Provider>
);

export default Root;
