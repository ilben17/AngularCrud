import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Departement} from 'src/app/models/departement';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import {Employee} from '../models/employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  dateBirth = new Date(2018, 0, 1);
  // on besoin que d'une partie du BsDatepickerConfig => on utilise Parial
  // Date.now() https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html
  myDatepickerConfiger: Partial<BsDatepickerConfig>;
  departements: Departement[];
  previewPhoto = false;
  nameEmployeeToPreview: string;
  employee: Employee = {
    id : null,
    name : null,
    gender : null,
    email : '',
    phoneNumber : null,
    contactPreference : null,
    dateOfBirth : null,
    department : '-1',
    isActive : false,
    photoPath : null,
    password : null,
    passwordConfirm: null
  };

  constructor() { }

  ngOnInit() {
    this.myDatepickerConfiger = {...{containerClass: 'theme-dark-blue',
    showWeekNumbers : false,
    dateInputFormat: 'DD/YY/YYYY',
    minDate: new Date(1900, 0, 1),
    maxDate: new Date(2019, 11, 31)}};

    this.departements = [
      { id: -1, name: 'Select departement'},
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

  saveEmployee(employeeForm: NgForm): void {
    console.log(employeeForm.value);
  }
}
