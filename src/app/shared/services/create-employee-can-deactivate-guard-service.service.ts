import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreateEmployeeComponent } from 'src/app/employee/create-employee.component';

@Injectable({
  providedIn: 'root'
})
export class CreateEmployeeCanDeactivateGuardServiceService implements CanDeactivate<CreateEmployeeComponent> {

  canDeactivate(component: CreateEmployeeComponent): boolean {
    if (component.createEmployeeForm.dirty) {
      return confirm('If you quit you will loose form informations');
    }
    return true;
  }


  constructor() { }
}
