import { ActionReducerMap } from "@ngrx/store";
import { AuthState, authReducer } from './auth/auth.reducer';

export interface AppState{
  authstate: AuthState,
}

export const appReducer: ActionReducerMap<AppState> = {
  /* authState: authReducer */
  authState: authReducer
}
