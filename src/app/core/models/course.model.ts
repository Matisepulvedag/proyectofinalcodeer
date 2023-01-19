export class Courses {
  static map(arg0: (cou: any) => any): Courses[] {
    throw new Error('Method not implemented.');
  }
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public active: boolean,
  ) {}
}
