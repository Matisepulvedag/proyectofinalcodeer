import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, take, map } from 'rxjs';
import { Commision } from 'src/app/core/models/commision.model';

@Injectable({
  providedIn: 'root'
})
export class commisionService {
  private Commision = new BehaviorSubject<Commision[]>([
    new Commision(1, 'matias', 'Sepulveda', true),
    new Commision(2, 'goku', 'Kakaroto', false),
    new Commision(3, 'chavo', 'del 8', true),
    new Commision(4, 'vegeta', 'Insecto', false),
  ]);
  public Commision$: Observable<Commision[]>;
  constructor() {
    this.Commision$ = this.Commision.asObservable()
  }

  createCommision(newCommisionData: Omit<Commision, 'id' | 'active'>): void {
    this.Commision.pipe(take(1)).subscribe((Commisions) => {
      const lastId = Commisions[Commisions.length - 1]?.id || 0;
      this.Commision.next([
        ...Commisions,
        new Commision(lastId + 1, newCommisionData.firstName, newCommisionData.lastName, true)
      ])
    })
  }

  editCommision(id: number, data: Partial<Commision>): void {
    this.Commision.pipe(take(1)).subscribe((commision) => {
      this.Commision.next(
        Commision.map(
          (com) => com.id === id
            ? new Commision(
              com.id,
              data.firstName || com.firstName,
              data.lastName || com.lastName,
              data.active || com.active,
            )
            : com
        )
      )
    })
  }

  removeCommision(id: number): void {
    this.Commision.pipe(take(1)).subscribe((Commision) => {
      this.Commision.next(Commision.filter((com) => com.id !== id))
    })
  }

  getCommisionById(id: number): Observable<Commision | null> {
    return this.Commision$.pipe(
      take(1),
      map((Commision) => Commision.find((com) => com.id === id) || null)
    )
  }
}
