import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import {Dishes} from "./reducers/dishes";
import {Comments} from "./reducers/comments";
import {Leaders} from "./reducers/leaders";
import {Promotions} from "./reducers/promotion";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}