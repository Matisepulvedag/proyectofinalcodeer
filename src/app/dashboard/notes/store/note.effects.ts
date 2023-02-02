import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import {  EMPTY, of } from 'rxjs';
import * as NoteActions from './note.actions';
import { HttpClient } from '@angular/common/http';
import { Notes } from '../../../core/models/notes.model';
import { editNotes, deleteNotes } from './note.actions';
import { Action } from '@ngrx/store';


@Injectable()
export class NoteEffects {

  private BaseURL = 'https://63d9b31b2af48a60a7be2bc8.mockapi.io/';

  loadNotes$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(NoteActions.loadNotes),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
       this.getNotesFromApi().pipe(
          map(data => NoteActions.loadNotesSuccess({ data })),
          catchError(error => of(NoteActions.loadNotesFailure({ error }))))
      )
    );
  });
//create
 createNotes$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(NoteActions.createNotes),
      concatMap((action) =>
       this.createNotes(action.data).pipe(
        map(Response => NoteActions.createNotesSuccess({data: Response })),
          catchError(error => of(NoteActions.createNotesFailure({ error })))
          )
      )

    );
  });
  //edit
  editNotes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NoteActions.editNotes),
      concatMap((action) =>
       this.editNotes(action.data).pipe(
        map(Response => NoteActions.editNotes({data: Response })),
          catchError(error => of(NoteActions.editNotesFailure({ error })))
          )
      )

    );
  });
   // delete
   deleteNotes$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(NoteActions.deleteNotes),
      concatMap((action)=>
      this.deleteNotes(action.data).pipe(
       map(Response => NoteActions.createNotesSuccess({data: Response})),
       catchError(error => of(NoteActions.createNotesFailure({error})))
      )
      )
    )
   })
  constructor(private actions$: Actions, private httpClient: HttpClient) {}

  private getNotesFromApi(): Observable<Notes[]>{
    return this.httpClient.get<Notes[]>(`${this.BaseURL}/notes`)
  }
  private createNotes( data: {firstname: string; notes: string; }): Observable<Notes>{
    return this.httpClient.post<Notes>(`${this.BaseURL}/notes`, data);
  }
  private editNotes( data:{firstname: string; notes: string;}):Observable<Notes>{
    return this.httpClient.put<Notes>(`${this.BaseURL}/notes/:id`,data);
  }
  private deleteNotes(data:{firstname: string; notes:string}): Observable<Notes>{
    return this.httpClient.delete<Notes>(`${this.BaseURL}/notes/:id`);
  }

}
