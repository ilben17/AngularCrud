import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import {Router} from '@angular/router';
import { EmployeeService } from '../shared/services/employee-handle-service';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];

  constructor(private _employeeService: EmployeeService, private _router: Router) { }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(data => this.employees = data);
  }

  showEmployeeDetails(employeeId: string) {
    this._router.navigate(['/read', employeeId]);
  }
}
