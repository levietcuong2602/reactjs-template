import { actionTypes } from './actions';

export const initialState = {
    userToken: null,
    verified: false
};

export default (state = initialState, action) => {
    const { userToken } = action;
    switch (action.type) {
        case actionTypes.VERIFY_USER:
            return Object.assign({}, state, { userToken, verified: false });
        default:
            return state;
    }
};
