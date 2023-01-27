import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CommissionsPageComponent } from './pages/commissions-page/commissions-page.component';
import { CourseDetailPageComponent } from '../courses/pages/course-detail-page/course-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: CommissionsPageComponent,
  },
  {
    path: ':courseId',
    component: CourseDetailPageComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CommissionsRoutingModule { }
