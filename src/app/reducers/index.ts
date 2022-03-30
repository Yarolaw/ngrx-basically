import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { counterReducer, ICounterState } from './counter.reducer';

export const COUNTER_KEY = 'counter'
export interface State {
  [COUNTER_KEY]: ICounterState
}

export const reducers: ActionReducerMap<State> = {
  [COUNTER_KEY]: counterReducer

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
