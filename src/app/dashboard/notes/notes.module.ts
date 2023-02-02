import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesPageComponent } from './pages/notes-page/notes-page.component';
import { NotesDetailPageComponent } from './pages/notes-detail-page/notes-detail-page.component';
import { NotesModalComponent } from './components/notes-modal/notes-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { NotesRoutingModule } from './notes-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { NoteEffects } from './store/note.effects';
import { StoreModule } from '@ngrx/store';
import { noteFeatureKey, reducer } from './store/note.reducer';



@NgModule({
  declarations: [
    NotesPageComponent,
    NotesDetailPageComponent,
    NotesModalComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NotesRoutingModule,
    SharedModule,
    StoreModule.forFeature(noteFeatureKey, reducer),
    MatTableModule,
    NotesRoutingModule,
    EffectsModule.forFeature([NoteEffects])
  ]
})
export class NotesModule { }
