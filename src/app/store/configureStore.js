import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';

export const configureStore = (preoloadedState) => {
    const middlewares = [];
    const middlewareEnhancers = applyMiddleware(...middlewares);
    const storeEnhancers = [middlewareEnhancers];
    const composedEnhancer = composeWithDevTools(...storeEnhancers);
    const store = createStore(
        rootReducer,
        preoloadedState,
        composedEnhancer
    );
    return store;
}