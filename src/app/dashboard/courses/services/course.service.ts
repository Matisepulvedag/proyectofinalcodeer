import { Injectable } from '@angular/core';
import { Course } from '../../../core/models/course.model';
import { BehaviorSubject, Observable, map, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

 private Courses= new BehaviorSubject<Course[]>([
    new Course (1,'matias sepulveda','cuarto medio A', true),
    new Course (2,'eduardo sepulveda','Primero medio B', true),
    new Course (3,'juan perez','segundo B',true),
    new Course (4,'arturo vidal','Tercero A', false)
  ]);
  public Course$: Observable<Course[]>;
  constructor() {
    this.Course$ = this.Courses.asObservable()
  }

  createCourse(newCourseData: Omit<Course, 'id' | 'active'>): void {
    this.Courses.pipe(take(1)).subscribe((Course) => {
      const lastId = Course[Course.length - 1]?.id || 0;
      this.Courses.next([
        ...Course,

        /*  new Course(lastId + 1, newCourseData.firstName, newCourseData.lastName, true) */
      ])
    })
  }

  editCourse(id: number, data: Partial<Course>): void {
    this.Courses.pipe(take(1)).subscribe((Courses) => {
      this.Courses.next(
        Courses.map(
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
    this.Courses.pipe(take(1)).subscribe((Course) => {
      this.Courses.next(Course.filter((cou) => cou.id !== id))
    })
  }

  getCourseById(id: number): Observable<Course | null> {
    return this.Course$.pipe(
      take(1),
      map((Course) => Course.find((cou) => cou.id === id) || null)
    )
  }
}
