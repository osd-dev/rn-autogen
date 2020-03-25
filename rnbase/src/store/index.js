import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

const middleware = [thunkMiddleware];
export default compose(applyMiddleware(...middleware))(createStore)(reducers);
