import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Notes } from '../../../../core/models/notes.model';


@Component({
  selector: 'app-notes-modal',
  templateUrl: './notes-modal.component.html',
  styleUrls: ['./notes-modal.component.scss']
})
export class NotesModalComponent {
  firstnameControl = new FormControl('', [Validators.required])
  notesControl = new FormControl('', [Validators.required]);
  noteForm = new FormGroup({
    firstname: this.firstnameControl,
    notes: this.notesControl
  })
  constructor(
    private readonly dialogRef: DialogRef,
    @Inject(MAT_DIALOG_DATA) public data: Notes| undefined,
  ) {
    if (data) {
      this.noteForm.patchValue(data);
    }
  }
  close() {
    this.dialogRef.close()
  }
}
