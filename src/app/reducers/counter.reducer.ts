import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { increment, decrement, reset, changeUpdatedAt } from './counter.actions'

export interface ICounterState {
    count: number,
    updatedAt?: number
}

export const initialState: ICounterState = {
    count: 0
    
}

export const counterReducer = createReducer( initialState,
    on(increment, (state) => ({...state, count: state.count + 1})),
    on(decrement, (state) => ({...state, count: state.count - 1})),
    on(reset, (state) => ({ ...state, count: 0 })),
    on(changeUpdatedAt, (state, action) => ({...state, updatedAt: action.updatedAt})),
)

export const featureSelector = createFeatureSelector<ICounterState>('counter');
export const countSelector = createSelector(featureSelector, state => state.count);
export const updatedAtSelector = createSelector(featureSelector, state => state.updatedAt);