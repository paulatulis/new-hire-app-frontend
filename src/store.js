import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import rootReducer from './redux /reducers/root';

const middleware = applyMiddleware(promise, thunk)
const store = createStore(rootReducer, composeWithDevTools(middleware))

export default store;