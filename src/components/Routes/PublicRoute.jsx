/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Route } from 'react-router-dom';

import { routes } from '../../routers/routes';
import withBreadcrumb from './WithBreadcrumb';

const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(routeProps) => withBreadcrumb(routes)(Component)(routeProps)} />
    );
};

export default PublicRoute;
