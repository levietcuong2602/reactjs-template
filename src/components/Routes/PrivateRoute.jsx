/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setCookie, getCookie } from '../../utils/cookie';
import actions from '../../redux/actions';
import { routes } from '../../routers/routes';
import withBreadcrumb from './WithBreadcrumb';

const A_WEEK = '';
const SSO_PREFIX_URL = '';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { accessToken, isAuthenticated } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const location = useLocation();

    const getSSOTokenFromUrl = (hashString) => {
        let ssoToken;
        if (hashString.split('#')[1]) {
            // eslint-disable-next-line prefer-destructuring
            ssoToken = hashString.split('#')[1].split('=')[1];
            if (ssoToken) {
                window.open(window.location.pathname, '_self');
                setCookie('userToken', ssoToken, A_WEEK);
            }
        }
        return ssoToken;
    };

    useEffect(() => {
        if (!accessToken) {
            // get access token and check location
            const tokenSSO = getCookie('accessToken') || getSSOTokenFromUrl(location.hash);

            if (tokenSSO) {
                dispatch(actions.auth.verifyUser(tokenSSO));
                return;
            }

            if (!isAuthenticated) {
                window.location.assign(`${SSO_PREFIX_URL}${window.location.href}`);
            }
        }
    }, [accessToken, dispatch, location, isAuthenticated]);

    return (
        <Route
            {...rest}
            render={(routeProps) => {
                if (accessToken) {
                    return withBreadcrumb(routes)(Component)(routeProps);
                }

                return null;
            }}
        />
    );
};

export default PrivateRoute;
