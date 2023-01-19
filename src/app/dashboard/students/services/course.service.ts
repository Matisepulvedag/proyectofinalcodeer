import { Injectable } from '@angular/core';
import { Courses } from '../../../core/models/course.model';
import { BehaviorSubject, Observable, map, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

 private Courses= new BehaviorSubject<Courses[]>([
    new Courses(1, 'matias', 'Sepulveda', true),
    new Courses(2, 'goku', 'Kakaroto', false),
    new Courses(3, 'chavo', 'del 8', true),
    new Courses(4, 'vegeta', 'Insecto', false),
  ]);
  public Course$: Observable<Courses[]>;
  constructor() {
    this.Course$ = this.Courses.asObservable()
  }

  createCourse(newCourseData: Omit<Courses, 'id' | 'active'>): void {
    this.Courses.pipe(take(1)).subscribe((Course) => {
      const lastId = Course[Course.length - 1]?.id || 0;
      this.Courses.next([
        ...Course,
        new Courses(lastId + 1, newCourseData.firstName, newCourseData.lastName, true)
      ])
    })
  }

  editCourse(id: number, data: Partial<Courses>): void {
    this.Courses.pipe(take(1)).subscribe((Courses) => {
      this.Courses.next(
        Courses.map(
          (cou) => cou.id === id
            ? new Courses(
              cou.id,
              data.firstName || cou.firstName,
              data.lastName || cou.lastName,
              data.active || cou.active,
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

  getCourseById(id: number): Observable<Courses | null> {
    return this.Course$.pipe(
      take(1),
      map((Course) => Course.find((cou) => cou.id === id) || null)
    )
  }
}
