import {createAction} from 'redux-actions';

const closeDrawer = createAction(
  'ClOSE_DRAWER'
);

const openDrawer = createAction(
  'OPEN_DRAWER'
);

export {
  closeDrawer,
  openDrawer
};
