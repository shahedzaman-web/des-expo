import {api} from '../services/api';
import {authApi} from '../services/authApi';
import {combineReducers} from '@reduxjs/toolkit';
import {authSlice} from '../slices/authSlice';
import {userInfoSlice} from '../slices/userInfoSlice';
import {cameraSlice} from '../slices/cameraSlice';
export default combineReducers({
  [api.reducerPath]: api.reducer,
  [authSlice.name]: authSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [userInfoSlice.name]: userInfoSlice.reducer,
  [cameraSlice.name]: cameraSlice.reducer,
});
