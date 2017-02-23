import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const finalCreateStore = compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
)(createStore);

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(finalCreateStore);

const configureStore = function (intialState) {
  return createStoreWithMiddleware(rootReducer, intialState);
};

export default configureStore;
