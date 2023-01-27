import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, take, map } from 'rxjs';
import { Commision } from 'src/app/core/models/commision.model';

@Injectable({
  providedIn: 'root'
})
export class commisionService {
  private Commisions = new BehaviorSubject<Commision[]>([
    new Commision (1,'matias sepulveda','Angular', true),
    new Commision (2,'eduardo sepulveda','Fullstack', true),
    new Commision (3,'juan perez','Python',true),
    new Commision (4,'arturo vidal','React Js', false)
  ]);
  public Commision$: Observable<Commision[]>;
  constructor() {
    this.Commision$ = this.Commisions.asObservable()
  }

  createCommision(newCommisionData: Omit<Commision, 'id' | 'active'>): void {
    this.Commisions.pipe(take(1)).subscribe((Commisions) => {
      const lastId = Commisions[Commisions.length - 1]?.id || 0;
      this.Commisions.next([
        ...Commisions,
        new Commision(lastId + 1, newCommisionData.firstName, newCommisionData.matter, true)
      ])
    })
  }

  editCommision(id: number, data: Partial<Commision>): void {
    this.Commisions.pipe(take(1)).subscribe((commisions) => {
      this.Commisions.next(
        commisions.map(
          (com) => com.id === id
            ? new Commision(
              com.id,
              data.firstName || com.firstName,
              data.matter || com.matter,
              data.active || com.active,
            )
            : com
        )
      )
    })
  }

  removeCommision(id: number): void {
    this.Commisions.pipe(take(1)).subscribe((Commision) => {
      this.Commisions.next(Commision.filter((com) => com.id !== id))
    })
  }

  getCommisionById(id: number): Observable<Commision | null> {
    return this.Commision$.pipe(
      take(1),
      map((Commision) => Commision.find((com) => com.id === id) || null)
    )
  }
}
