/*import { Courses } from 'src/app/core/models/course.model';
 export class Courses {
  static map(arg0: (com: any) => any): Courses[] {
    throw new Error('Method not implemented.');
  }
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public active: boolean,
  ) {}
}
 */
export class Course {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public active: boolean,
  ) {}
}
