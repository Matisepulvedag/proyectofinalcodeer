import { Injectable } from '@angular/core';
import { Course } from '../../../core/models/course.model';
import { BehaviorSubject, Observable, map, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

 private courses= new BehaviorSubject<Course[]>([
    new Course (1,'matias sepulveda','Angular', true),
    new Course (2,'eduardo sepulveda','Diseño UX', true),
    new Course (3,'juan perez','React',true),
    new Course (4,'arturo vidal','Android', false)
  ]);
  public course$: Observable<Course[]>;
  constructor() {
    this.course$ = this.courses.asObservable()
  }

  createCourse(newCourseData: Omit<Course, 'id' | 'active'>): void {
    this.courses.pipe(take(1)).subscribe((courses) => {
      const lastId = courses[courses.length - 1]?.id || 0;
      this.courses.next([
        ...courses,

        new Course(lastId + 1, newCourseData.firstName, newCourseData.Curso, true)
      ])
    })
  }

  editCourse(id: number, data: Partial<Course>): void {
    this.courses.pipe(take(1)).subscribe((courses) => {
      this.courses.next(
        courses.map(
          (cou) => cou.id === id
            ? new Course(
              cou.id,
              data.firstName || cou.firstName,
              data.Curso || cou.Curso,
              data.passedp || cou.passedp,

            )
            : cou
        )
      )
    })
  }

  removeCourse(id: number): void {
    this.courses.pipe(take(1)).subscribe((Course) => {
      this.courses.next(Course.filter((cou) => cou.id !== id))
    })
  }

  getCourseById(id: number): Observable<Course | null> {
    return this.course$.pipe(
      take(1),
      map((courses) => courses.find((cou) => cou.id === id) || null)
    )
  }
}
