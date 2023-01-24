import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Course } from 'src/app/core/models/course.model';
import { CoursesService } from 'src/app/dashboard/courses/services/course.service';

@Component({
  selector: 'app-course-detail-page',
  templateUrl: './course-detail-page.component.html',
  styleUrls: ['./course-detail-page.component.scss']
})
export class CourseDetailPageComponent {
  public course: Course | null = null
  private destroyed$ = new Subject()
  constructor(private readonly coursesService: CoursesService, private readonly activatedRoute: ActivatedRoute) {}

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }
  ngOnInit(): void {
    this.coursesService.getCourseById(parseInt(this.activatedRoute.snapshot.params['courseId'] || 0))
      .pipe(takeUntil(this.destroyed$))
      .subscribe((result) => this.course = result)
  }
}
