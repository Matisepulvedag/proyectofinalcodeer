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
  matterNameControl = new FormControl('', [Validators.required, Validators.email])
  CommisionForm = new FormGroup({
    firstName: this.firstNameControl,
    matter: this.matterNameControl,
  });



  constructor(
    private readonly dialogRef: DialogRef,
    @Inject(MAT_DIALOG_DATA) public data: Commision| undefined,
  ) {
    if (data) {
      this.CommisionForm.patchValue(data);
      this.CommisionForm.controls['matter'].setValue(data.matter)
    }
  }
  close() {
    this.dialogRef.close()
  }
}

