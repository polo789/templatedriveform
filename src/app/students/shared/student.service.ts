import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestMethod, RequestOptions} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Student} from './student.model';

@Injectable()
export class StudentService {
  selectedStudent: Student;
  students: Student[];
  studUrl = 'http://localhost:66203/api/Students';
  constructor( private http: Http) { }

  getStudents() {
   return this.http.get('this.studUrl').map((data: Response) => {
     return data.json() as Student[]; }).toPromise().then( x => {this.students = x ; } );
  }

  deleteStudent(id: number) {
    return this.http.delete('this.studUrl' + id).map(res => res.json());
  }


  postStudent(stud: Student) {
   const body = JSON.stringify(stud);
   const headerOptions = new Headers({'Content-Type': 'application/json'});
   const requestOptions = new RequestOptions({method: RequestMethod.Post, headers: headerOptions});
   return this.http.post('this.studUrl', body, requestOptions).map(x => x.json());
  }

  putStudent(id: number, stud: Student) {
    const body = JSON.stringify(stud);
    const headerOptions = new Headers({'Content-Type': 'application/json'});
    const requestOptions = new RequestOptions({method: RequestMethod.Put, headers: headerOptions});
    return this.http.put('this.studUrl' + id, body, requestOptions).map(res => res.json());
  }
}
