import { Component } from '@angular/core';
import { Course } from '../../../../core/models/course.model';
import { Observable, Subject } from 'rxjs';
import { CourseModalComponent } from '../../course-modal/course-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { CoursesService } from '../../services/course.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent {

  displayedColumns = ['id', 'firstName', 'Curso', 'passedp', 'delete', 'edit', 'viewDetail'];
  Course: Observable<Course[]> | undefined;
   private destroyed$ = new Subject()

   constructor(private readonly CoursesService: CoursesService, private readonly dialogService: MatDialog) {
     this.Course = this.CoursesService.Course$;
   }

   ngOnDestroy(): void {
     this.destroyed$.next(true)
   }

   editCourse(element: Course) {
     const dialog = this.dialogService.open(CourseModalComponent, {
       data: element
     })
     dialog.afterClosed().subscribe((data) => {
       if (data) {
         this.CoursesService.editCourse(element.id, data);
       }
     })
   }

   createCourse() {
     const dialog = this.dialogService.open(CourseModalComponent)
     dialog.afterClosed().subscribe((data) => {
       if (data) {
         this.CoursesService.createCourse({  firstName: data.firstName, Curso: data.Curso,passedp: false });
       }
     })
   }

   deleteCourse(element: Course) {
     this.CoursesService.removeCourse(element.id);
   }
 }

