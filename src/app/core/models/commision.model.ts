export class Commision {
  static map(arg0: (com: any) => any): Commision[] {
    throw new Error('Method not implemented.');
  }
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public active: boolean,
  ) {}
}
