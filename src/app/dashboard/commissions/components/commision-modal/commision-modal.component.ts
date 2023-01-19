import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Commision } from 'src/app/core/models/commision.model';

@Component({
  selector: 'app-commision-modal',
  templateUrl: './commision-modal.component.html',
  styleUrls: ['./commision-modal.component.scss']
})
export class CommisionModalComponent {
  firstNameControl = new FormControl('', [Validators.required])
  lastNameControl = new FormControl('', [Validators.required, Validators.email])
  CommisionForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
  });

  constructor(
    private readonly dialogRef: DialogRef,
    @Inject(MAT_DIALOG_DATA) public data: Commision| undefined,
  ) {
    if (data) {
      this.CommisionForm.patchValue(data);
    }
  }

  close() {
    this.dialogRef.close()
  }
}

