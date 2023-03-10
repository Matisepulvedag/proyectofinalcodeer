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
  CursoControl = new FormControl('', [Validators.required, Validators.email])
  courseForm = new FormGroup({
    firstName: this.firstNameControl,
    Curso: this.CursoControl,
  });

  constructor(
    private readonly dialogRef: DialogRef,
    @Inject(MAT_DIALOG_DATA) public data: Course| undefined,
  ) {
    if (data) {
      this.courseForm.patchValue(data);
      this.courseForm.controls['Curso'].setValue(data.Curso)
    }
  }

  close() {
    this.dialogRef.close()
  }
}

