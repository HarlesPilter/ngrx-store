import { ActionReducerMap } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import { IRouterStateUrl } from './router.reducer';

export interface IState {
  routerReducer: fromRouter.RouterReducerState<IRouterStateUrl>;
}

export const reducers: ActionReducerMap<IState> = {
  routerReducer: fromRouter.routerReducer,
};
