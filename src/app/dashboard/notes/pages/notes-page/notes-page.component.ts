import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { createNotes, loadNotes, resetNotesState, editNotes, deleteNotes } from '../../store/note.actions';
import { Notes } from 'src/app/core/models/notes.model';
import { selectNoteState } from '../../store/note.selectors';
import { State } from '../../store/note.reducer';
import { MatDialog } from '@angular/material/dialog';
import { NotesModalComponent } from '../../components/notes-modal/notes-modal.component';

@Component({
  selector: 'app-notes-page',
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.scss']
})
export class NotesPageComponent implements OnInit, OnDestroy{

  displayedColumns =[ 'id','firtsname','notes','approved','edit','delete','viewDetail']
  notes: Notes[] = [];
  loading = true;

 constructor(
  private store: Store
  , private readonly dialogService: MatDialog
  ){
  this.store.dispatch(loadNotes())
 }
  ngOnDestroy(): void {
    this.store.dispatch(resetNotesState());
  }
  ngOnInit(): void {
   this.store.select(selectNoteState)
   .subscribe((state) =>{
    this.notes = state.data
    this.loading = state.loading
   })
  }

  createNotes() {
    const dialog = this.dialogService.open(NotesModalComponent)
    dialog.afterClosed().subscribe((data) => {
       if (data) {
        this.store.dispatch(createNotes({data}))
      }
    })
  }
  editNotes(){
    const dialog = this.dialogService.open(NotesModalComponent)
     dialog.afterClosed().subscribe((data) => {
      if(data){
        this.store.dispatch(editNotes({data}));
      }
     })
  }
 /*  deleteNotes(){
    this.store.dispatch(deleteNotes({data}));
  } */
}

