import { createAction, props } from '@ngrx/store';
import { Notes } from 'src/app/core/models/notes.model';

//cargar Notas
export const loadNotes = createAction(
  '[Note] Load Notes'
);
//cargar Notas con exito
export const loadNotesSuccess = createAction(
  '[Note] Load Notes Success',
  props<{ data: Notes[] }>()
);
//cargar Notas error
export const loadNotesFailure = createAction(
  '[Note] Load Notes Failure',
  props<{ error: any }>()
);
//crear
export const createNotes = createAction(
  '[Note] create Notes',
   props<{data: { id: string, firstname: string; notes: string; approved: boolean } }>()
)
export const createNotesSuccess = createAction(
  '[Note] create Notes Success',
  props<{ data: Notes }>()
)
export const createNotesFailure = createAction(
  '[Note] create Notes Failure',
   props<{error : unknown}>()
)

//edit

export const editNotes = createAction(
  '[Note] edit Notes',
  props<{data: { id: string, firstname: string; notes: string; approved: boolean } }>()
)
export const editNotesSuccess = createAction(
  '[Note] edit Notes Success',
  props<{ data: Notes }>()
)
export const editNotesFailure = createAction(
  '[Note] edit Notes Failure',
   props<{error : unknown}>()
)

//delete

export const deleteNotes = createAction(
  '[Note] delete Notes',
  props<{data: { id: string, firstname: string; notes: string; approved: boolean } }>()
)
export const deleteNotesSuccess = createAction(
  '[Note] delete Notes Success',
  props<{ id: string }>()
)
export const deleteNotesFailure = createAction(
  '[Note] delete Notes Failure',
   props<{error : unknown}>()
)
export const resetNotesState = createAction('[Note] Reset Notes State')


