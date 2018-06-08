import { Component, OnInit } from '@angular/core';
import { StudentService} from '../shared/student.service';
import { Student} from '../shared/student.model';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html'
})
export class StudentComponent implements OnInit {

   student: Student;
  constructor(private service: StudentService) { }

  ngOnInit() { this.resetForm();
  }

  resetForm(form?: NgForm) {
   if (form != null) { form.reset(); }
   this.service.selectedStudent = {
     StudentId: null,
     FirstName: '',
     LastName: '',
     Major: '',
     StudCode: '',
     ClassRoom: ''
    };
  }

  onSubmitForm(form: NgForm) {
    if (form.value.StudentId == null) {
      this.service.postStudent(form.value).subscribe(data => {
        this.resetForm(form);
        this.service.getStudents();
      });
    } else {
     this.service.putStudent(form.value.StudentId, form.value).subscribe(
       data => {
           this.resetForm(form);
           this.service.getStudents();
       }
     );
    }
  }

}
