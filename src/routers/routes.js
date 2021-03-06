/* eslint-disable import/prefer-default-export */
import { ROUTES } from '../constants';

import Login from '../pages/Login';

export const routes = [
    {
        name: 'Đăng nhập',
        path: ROUTES.LOGIN,
        component: Login,
        isPrivate: false
    }
];
