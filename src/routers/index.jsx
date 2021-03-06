/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import PrivateRoute from '../components/Routes/PrivateRoute';
import PublicRoute from '../components/Routes/PublicRoute';
import { ROUTES } from '../constants';
import { routes } from './routes';

export default () => {
    return (
        <Switch>
            {routes.map(
                ({ path, exact = true, component: Component, isPrivate = true, ...rest }) => {
                    if (!isPrivate) {
                        return (
                            <PublicRoute
                                key={path}
                                path={path}
                                exact={exact}
                                component={Component}
                                {...rest}
                            />
                        );
                    }

                    return (
                        <PrivateRoute
                            key={path}
                            path={path}
                            exact={exact}
                            component={Component}
                            {...rest}
                        />
                    );
                }
            )}

            <Redirect to={ROUTES.LOGIN} />
        </Switch>
    );
};
