import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from 'src/app/core/models/course.model';

@Component({
  selector: 'app-course-modal',
  templateUrl: './course-modal.component.html',
  styleUrls: ['./course-modal.component.scss']
})
export class CourseModalComponent {
  firstNameControl = new FormControl('', [Validators.required])
  cursoNameControl = new FormControl('', [Validators.required])

  courseForm = new FormGroup({
    firstName: this.firstNameControl,
    cursoName: this.cursoNameControl,
  });

  constructor(
    private readonly dialogRef: DialogRef,
    @Inject(MAT_DIALOG_DATA) public data: Course| undefined,
  ) {
    if (data) {
      this.courseForm.patchValue(data);
    }
  }

  close() {
    this.dialogRef.close()
  }
}

