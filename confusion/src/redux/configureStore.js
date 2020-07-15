import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Dishes} from "./reducers/dishes";
import {Comments} from "./reducers/comments";
import {Leaders} from "./reducers/leaders";
import {Promotions} from "./reducers/promotion";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}