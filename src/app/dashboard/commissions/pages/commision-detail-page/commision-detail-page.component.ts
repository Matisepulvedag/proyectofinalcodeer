import { Component, OnDestroy, OnInit } from '@angular/core';
import { Commision } from 'src/app/core/models/commision.model';
import { commisionService } from '../../services/commision.service';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-commision-detail-page',
  templateUrl: './commision-detail-page.component.html',
  styleUrls: ['./commision-detail-page.component.scss']
})
export class CommisionDetailPageComponent implements OnInit, OnDestroy {
  public commision: Commision | null = null
  private destroyed$ = new Subject()
  constructor(private readonly commisionService: commisionService, private readonly activatedRoute: ActivatedRoute) {}

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }
  ngOnInit(): void {
    this.commisionService.getCommisionById(parseInt(this.activatedRoute.snapshot.params['commisionId'] || 0))
      .pipe(takeUntil(this.destroyed$))
      .subscribe((result) => this.commision = result)
  }
}
