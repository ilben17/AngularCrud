import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Departement} from 'src/app/models/departement';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  dateBirth = new Date(2019, 1, 1);
  // on besoin que d'une partie du BsDatepickerConfig => on utilise Parial
  // Lecture --> https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html
  myDatepickerConfiger: Partial<BsDatepickerConfig>;
  departements: Departement[];
  defaultDepartement: number;

  constructor() { }

  ngOnInit() {
    this.myDatepickerConfiger = {...{containerClass: 'theme-dark-blue',
                                      showWeekNumbers : false,
                                      dateInputFormat: 'DD/YY/YYYY',
                                      minDate: new Date(2018, 1, 1),
                                      maxDate: new Date(2019, 12, 31)
                                    }
                                };

    this.departements = [
      { id: 1, name: 'IT' },
      { id: 2, name: 'HR' },
      { id: 3, name: 'Payroll' },
      { id: 4, name: 'Help desk' }
    ];
    this.defaultDepartement = 2;
  }

  saveEmployee(employeeForm: NgForm): void {
    console.log(employeeForm.value);
  }

}
