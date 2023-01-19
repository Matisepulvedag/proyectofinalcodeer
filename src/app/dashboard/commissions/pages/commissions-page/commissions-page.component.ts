import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { Commision } from 'src/app/core/models/commision.model';
import { commisionService } from '../../../students/services/commision.service';
import { CommisionModalComponent } from '../../components/commision-modal/commision-modal.component';

@Component({
  selector: 'app-commissions-page',
  templateUrl: './commissions-page.component.html',
  styleUrls: ['./commissions-page.component.scss']
})
export class CommissionsPageComponent {
  displayedColumns = ['id', 'firstName', 'lastName', 'active', 'delete', 'edit', 'viewDetail'];
 commision: Observable<Commision[]>;
  private destroyed$ = new Subject()

  constructor(private readonly commisionService: commisionService, private readonly dialogService: MatDialog) {
    this.commision = this.commisionService.Commision$;
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true)
  }

  editCommision(element: Commision) {
    const dialog = this.dialogService.open(CommissionsPageComponent, {
      data: element
    })
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.commisionService.editCommision(element.id, data);
      }
    })
  }

  createCommision() {
    const dialog = this.dialogService.open(CommisionModalComponent)
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.commisionService.createCommision({ firstName: data.firstName, lastName: data.lastName });
      }
    })
  }

  deleteCommision(element: Commision) {
    this.commisionService.removeCommision(element.id);
  }
}

