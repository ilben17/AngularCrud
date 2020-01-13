import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../shared/services/employee-handle-service';
import { Employee } from '../models/employee';

@Component({
  templateUrl: './display-employee-details.component.html',
  styleUrls: ['./display-employee-details.component.css']
})
export class DisplayEmployeeDetailsComponent implements OnInit {
  employees: Employee[];
  employee: Employee;
  private _id: number;

  constructor(private _activedRouter: ActivatedRoute,
              private _employeeService: EmployeeService,
              private _router: Router) { }

  ngOnInit() {
    this._activedRouter.paramMap.subscribe(params => {
      this._id = +params.get('id');
      this._employeeService.getEmployees().subscribe((data: Employee[]) => {
        this.employees = data;
        this.employee = data.find(e => e.id === this._id);
      });
    });
  }

  viewNextEmployee(): void {
    if (this._id > this.employees.length) {
      this._id = 1;
    } else {
      this._id += 1;
    }
    this._router.navigate(['/read', this._id]);
  }
}
