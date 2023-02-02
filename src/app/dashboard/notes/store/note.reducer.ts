import { Action, createReducer, on } from '@ngrx/store';
import * as NoteActions from './note.actions';
import { Notes } from '../../../core/models/notes.model';
import { state } from '@angular/animations';

export const noteFeatureKey = 'note';

export interface State {
  data: Notes[];
  loading: boolean;
  error: unknown;
}

export const initialState: State = {
 data: [],
 loading: false,
 error: null,
};

export const reducer = createReducer(
  initialState,

  on(NoteActions.loadNotes, state => {
     return{
       ...state,
       loading: true
     }
  }),
  on(NoteActions.loadNotesSuccess, (state, action) => {
    return{
      ...state,
      loading:false,
      data: action.data,
    }
  }),
  on(NoteActions.loadNotesFailure, (state, action) => {
    return{
      ...state,
      loading: false,
      error: action.error
    }
  }),
  // create

  on(NoteActions.createNotes,(state) => ({
    ...state ,
     loading: true})),
  on(NoteActions.createNotesSuccess,(state, action) => ({
    ...state ,
     loading: false,
    data:[
       ...state.data,
       action.data
    ]
  })),
  //edit
  on(NoteActions.editNotes,(state) =>({
     ...state,
     loading: true})),
     on(NoteActions.editNotesSuccess,(state, action) => ({
      ...state ,
       loading: false,
      data:[
         ...state.data,
         action.data
      ]
    })),
    on(NoteActions.editNotesFailure, (state, action) => {
      return{
        ...state,
        loading: false,
        error: action.error
      }
    }),
    on(NoteActions.deleteNotes,(state)=> ({
       ...state,
       loading: true
    })),
    on(NoteActions.deleteNotes,(state, action)=>({
      ...state,
      loading: false,
       data:[
          ...state.data,
          action.data
       ]
    })),
    on(NoteActions.editNotesFailure, (state, action) => {
      return{
        ...state,
        loading: false,
        error: action.error
      }
    }),
    on(NoteActions.deleteNotes, () => initialState),

  on(NoteActions.resetNotesState, () => initialState)
);
