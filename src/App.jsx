/* eslint-disable arrow-body-style */
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import store from './redux/store';
import './App.css';
import appRoutes from './routers';

import MainLayout from './containers/MainLayout';

const App = () => {
    return (
        <Provider store={store()}>
            <BrowserRouter>
                <Switch>
                    {/* route with main layout */}
                    <Route>
                        <MainLayout>{appRoutes()}</MainLayout>
                    </Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
