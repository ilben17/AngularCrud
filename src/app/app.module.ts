import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employee/list-employees.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';
// for datepicker
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {SelectRequiredValidator} from './shared/directives/select-required-validator.directive';
import {CompareControlsMatchingValidator} from './shared/directives/compare-match-validator.directive';
import { DisplayEmployeeComponent } from './employee/display-employee.component';
import {EmployeeService} from '../app/shared/services/employee-handle-service';
import {CreateEmployeeCanDeactivateGuardServiceService} from '../app/shared/services/create-employee-can-deactivate-guard-service.service';
import { DisplayEmployeeDetailsComponent } from './employee/display-employee-details.component';


const appRoutes: Routes = [
  {path: 'read' , component: ListEmployeesComponent},
  {path: 'read/:id' , component: DisplayEmployeeDetailsComponent},
  {path: 'create' , component: CreateEmployeeComponent, canDeactivate: [CreateEmployeeCanDeactivateGuardServiceService]},
  {path: '' , redirectTo : '/read', pathMatch : 'full'},
  {path: '**' , redirectTo : '/read', pathMatch : 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidator,
    CompareControlsMatchingValidator,
    DisplayEmployeeComponent,
    DisplayEmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BsDatepickerModule.forRoot()
  ],
  providers: [EmployeeService, CreateEmployeeCanDeactivateGuardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
