import { combineReducers } from 'redux';
import resposotoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
  repositories: resposotoriesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
