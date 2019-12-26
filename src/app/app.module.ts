import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employee/list-employees.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';
// for datepicker
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';


const appRoutes: Routes = [
  {path: 'read' , component: ListEmployeesComponent},
  {path: 'create' , component: CreateEmployeeComponent},
  {path: '' , redirectTo : '/read', pathMatch : 'full'},
  {path: '**' , redirectTo : '/read', pathMatch : 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
