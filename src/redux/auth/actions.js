export const actionTypes = {
    VERIFY_USER: 'VERIFY_USER',
    VERIFY_USER_SUCCESS: 'VERIFY_USER_SUCCESS',
    LOGOUT: 'LOGOUT'
};

export const verifyUser = (userToken) => {
    return {
        type: actionTypes.VERIFY_USER,
        userToken
    };
};

export const verifyUserSuccess = (userToken, memberToken) => {
    return {
        type: actionTypes.VERIFY_USER_SUCCESS,
        userToken,
        memberToken
    };
};

export const logout = () => {
    return {
        type: actionTypes.LOGOUT
    };
};
