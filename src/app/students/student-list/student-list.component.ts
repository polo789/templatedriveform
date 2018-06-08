import { Component, OnInit } from '@angular/core';
import { StudentService} from '../shared/student.service';
import { Student} from '../shared/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html'
})
export class StudentListComponent implements OnInit {
  students: Student[];

  constructor(private service: StudentService) { }

  ngOnInit() { this.service.getStudents();
  }

 // deleteStudent(stud: Student) {
  //  if ( confirm('delete?') === true) {
  //    this.students = this.students.filter(s => s !== stud);
 //     this.service.deleteStudent(stud.StudentId).subscribe(
  //      x => this.service.getStudents()
  //    );
 //   }
 // }

 deleteStudent(id: number) {
   if ( confirm('delete?') === true) {
      this.service.deleteStudent(id).subscribe(x => this.service.getStudents());
   }
 }

 onEdit(stud: Student) {
   this.service.selectedStudent = Object.assign({}, stud);
 }


}
