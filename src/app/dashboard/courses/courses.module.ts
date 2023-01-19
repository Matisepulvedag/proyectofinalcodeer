import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { CourseDetailPageComponent } from './pages/course-detail-page/course-detail-page.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseModalComponent } from './course-modal/course-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseDetailPageComponent,
    CourseModalComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
    MatTableModule,
    ReactiveFormsModule,
  ]
})
export class CoursesModule { }
