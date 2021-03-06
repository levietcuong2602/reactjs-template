/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable arrow-body-style */
import React from 'react';

// import Breadcrumb from '../Breadcrumb';
// import ScrollToTop from '../ScrollToTop';

const withBreadcrumb = (routes) => (Component) => (routeProps) => {
    const { match } = routeProps;

    console.log({ match, routes });

    return <Component {...routeProps} />;
};

export default withBreadcrumb;
