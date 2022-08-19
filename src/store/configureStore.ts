import { combineReducers, configureStore } from '@reduxjs/toolkit';

import coursesReducer from '../features/course/reducers';
import createSagaMiddleware from 'redux-saga';
import groupsReducer from '../features/group/reducers';
import professorsReducer from '../features/professor/reducers';
import rootSaga from './rootSaga';
import studentsReducer from '../features/student/reducers';

// Combines all the reducers in to a root reducers
const combinedReducer = combineReducers({
  studentsSection: studentsReducer,
  groupsSection: groupsReducer,
  coursesSection: coursesReducer,
  professorsSection: professorsReducer
});

const sagaMiddleware = createSagaMiddleware();
/**
 * Creates the redux store
 * The store is the main place where the entire application states lives. It is basically an object with information and methods and actions to change that state
 * reducer: takes a list of all reducers
 * middleware: takes an array of additional functionalities that run on changes to the internal actions
 */
export const store = configureStore({
  reducer: combinedReducer,
  middleware: [sagaMiddleware],
  // Checks if we can run the Redux plugin in dev tools
  devTools: process.env.NODE_ENV !== 'production'
});

sagaMiddleware.run(rootSaga);
