import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StencilWrapperModule } from 'stencil-wrapper';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [StencilWrapperModule],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class HomeComponentComponent {
  title = 'angular-dev';
}
