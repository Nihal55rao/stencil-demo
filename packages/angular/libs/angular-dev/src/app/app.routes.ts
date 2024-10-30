import { Routes } from '@angular/router';
import { EmployerComponentComponent } from './components/employer-component/employer-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { EmployerTableComponent } from './components/employer-table/employer-table.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponentComponent },
    { path: 'employee', component: EmployerComponentComponent },
    { path: 'employees-table', component: EmployerTableComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
