import { OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from 'src/app/models/employee';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService implements OnInit {

    constructor(private _httpClient: HttpClient) {

    }

    ngOnInit() {

    }

    getEmployees(): Observable<Employee[]> {
        return this._httpClient.get<Employee[]>('http://localhost:3000/employees');
    }

    postEmployee(employee: Employee): Observable<Employee> {
        return this._httpClient.post<Employee>('http://localhost:3000/employees', employee, {
            headers : new HttpHeaders({'Content-Type': 'application/json'})
        });
    }
}
