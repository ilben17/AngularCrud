import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../models/employee';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  @Input() employeePropFromChildComp: Employee;

  viewedEmployeeId: number;

  constructor(private _activatRoute: ActivatedRoute) { }

  ngOnInit() {
    this.viewedEmployeeId = +this._activatRoute.snapshot.paramMap.get('idEmployeeViewed');
  }
}
