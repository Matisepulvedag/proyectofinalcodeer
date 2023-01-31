
import { createReducer } from '@ngrx/store';
import { User } from '../../models/user.model';


export const authFeaturekey = 'auth'

export interface AuthState{
  authenticatedUser: User |null;
}

const initialState: AuthState = {
  authenticatedUser: null,
};

export const authReducer = createReducer(initialState)
