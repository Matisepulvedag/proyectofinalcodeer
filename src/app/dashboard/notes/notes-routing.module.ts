import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotesPageComponent } from './pages/notes-page/notes-page.component';
import { NotesDetailPageComponent } from './pages/notes-detail-page/notes-detail-page.component';

const Routes: Routes = [

  {
    path: '',
    component: NotesPageComponent,
  },
  {
    path: 'notesId',
    component: NotesDetailPageComponent,
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
     RouterModule.forChild(Routes)
  ],
  exports: [
    RouterModule
  ]
})
export class NotesRoutingModule { }
