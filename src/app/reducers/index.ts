import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface IState {}

export const reducers: ActionReducerMap<IState> = {};

export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];
