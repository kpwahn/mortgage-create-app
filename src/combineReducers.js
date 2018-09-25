import { combineReducers } from 'redux';
import drawer from './components/Drawer/reducer';
import mortgage from './components/Drawer/Content/reducer';

const rootReducer = combineReducers({
    drawer,
    mortgage
});

export default rootReducer;
