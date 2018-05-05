import { applyMiddleware, createStore } from 'redux';
import reduxLogger from 'redux-logger';
import reduxSaga from 'redux-saga';

import reducers from '../reducers';
import sagas from './sagas';

const sagaMiddleware = reduxSaga();
const middleware = [];
middleware.push(sagaMiddleware);
if (process.env.NODE_ENV === 'development') {
  middleware.push(reduxLogger); // reduxLogger must be last
}

const store = createStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(sagas);

export default store;
