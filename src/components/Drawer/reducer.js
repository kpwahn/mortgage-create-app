import {handleActions} from 'redux-actions';

const INITIAL_STATE = {
    open: false
}

const openDrawer = (state, action) => {
    return {
        ...state,
        open: true
    };
};

const closeDrawer = (state, action) => {
    return {
        ...state,
        open: false
    };
};

export default handleActions({
    OPEN_DRAWER: (state, action) => openDrawer(state, action),
    ClOSE_DRAWER: (state, action) => closeDrawer(state, action)
}, INITIAL_STATE);
