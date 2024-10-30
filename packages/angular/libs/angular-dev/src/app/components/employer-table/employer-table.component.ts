import { Component } from '@angular/core';
import { StencilWrapperModule } from 'stencil-wrapper';

@Component({
  selector: 'app-employer-table',
  standalone: true,
  imports: [StencilWrapperModule],
  templateUrl: './employer-table.component.html',
  styleUrl: './employer-table.component.css'
})
export class EmployerTableComponent {

}
