import { Component } from '@angular/core';
import { Courses } from '../../../../core/models/course.model';
import { Observable, Subject } from 'rxjs';
import { CourseModalComponent } from '../../course-modal/course-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { CoursesService } from '../../../students/services/course.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent {

  displayedColumns = ['id', 'firstName', 'lastName', 'active', 'delete', 'edit', 'viewDetail'];
  Course: Observable<Courses[]> | undefined;
   private destroyed$ = new Subject()

   constructor(private readonly CoursesService: CoursesService, private readonly dialogService: MatDialog) {
     this.Course = this.CoursesService.Course$;
   }

   ngOnDestroy(): void {
     this.destroyed$.next(true)
   }

   editCourse(element: Courses) {
     const dialog = this.dialogService.open(CoursesPageComponent, {
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
         this.CoursesService.createCourse({ firstName: data.firstName, lastName: data.lastName });
       }
     })
   }

   deleteCourse(element: Courses) {
     this.CoursesService.removeCourse(element.id);
   }
 }

