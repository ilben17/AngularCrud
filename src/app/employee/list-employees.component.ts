import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../shared/services/employee-handle-service';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(data => this.employees = data);
  }
}
