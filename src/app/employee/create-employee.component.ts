import { Component, OnInit, ViewChild } from '@angular/core';
import { Departement } from 'src/app/models/departement';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee';
import { EmployeeService } from '../shared/services/employee-handle-service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  @ViewChild('employeeForm', null) createEmployeeForm: NgForm;

  dateBirth = new Date(2018, 0, 1);
  // on besoin que d'une partie du BsDatepickerConfig => on utilise Parial
  // Date.now() https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html
  myDatepickerConfiger: Partial<BsDatepickerConfig>;
  departements: Departement[];
  previewPhoto = false;
  nameEmployeeToPreview: string;

  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: '',
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    department: '-1',
    isActive: false,
    photoPath: '../../assets/images/default.png',
    code: null,
    codeConfirm: null
  };

  constructor(private _employeeService: EmployeeService, private _router: Router) { }

  ngOnInit() {
    this.myDatepickerConfiger = {
      ...{
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        dateInputFormat: 'DD/YY/YYYY',
        minDate: new Date(1900, 0, 1),
        maxDate: new Date(2019, 11, 31)
      }
    };

    this.departements = [
      { id: -1, name: 'Select departement' },
      { id: 1, name: 'IT' },
      { id: 2, name: 'HR' },
      { id: 3, name: 'Payroll' },
      { id: 4, name: 'Help desk' }
    ];
  }

  pathEmployeeToPreview(): string {
    return `assets/images/${this.nameEmployeeToPreview}.png`;
  }

  previewPhotoToggle(): void {
    this.previewPhoto = !this.previewPhoto;
  }

  saveEmployee(): void {
    const newEmployee: Employee = {...this.employee};
    this._employeeService.postEmployee(newEmployee).subscribe((data: Employee) => console.log(data));
    this.createEmployeeForm.reset();
    this._router.navigate(['read']);
  }
}
