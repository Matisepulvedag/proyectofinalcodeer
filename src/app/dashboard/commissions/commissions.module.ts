import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommissionsPageComponent } from './pages/commissions-page/commissions-page.component';
import { CommissionsRoutingModule } from './commissions-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { CommisionModalComponent } from './components/commision-modal/commision-modal.component';



@NgModule({
  declarations: [
    CommissionsPageComponent,
    CommisionModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CommissionsRoutingModule,
    SharedModule,
    MatTableModule,
  ]
})
export class CommissionsModule { }
