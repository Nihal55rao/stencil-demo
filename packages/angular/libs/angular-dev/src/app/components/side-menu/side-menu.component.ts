import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  menuItems = [
    { name: 'Home', route: '/' },
    { name: 'Employee', route: '/employee' },
    { name: 'Employeees Table', route: '/employees-table'}
  ];
}
