import { Component, CUSTOM_ELEMENTS_SCHEMA ,OnInit } from '@angular/core';
import { StencilWrapperModule } from 'stencil-wrapper';

@Component({
  selector: 'app-employer-component',
  standalone: true,
  imports: [StencilWrapperModule],
  templateUrl: './employer-component.component.html',
  styleUrl: './employer-component.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class EmployerComponentComponent implements OnInit {
  employerData: any[] = [];
  
  ngOnInit() {
   
  }

  onsendEmployerData(data: any) {
    this.employerData = data.detail;
    console.log('employerData from stencil to angular',this.employerData)
  }
}
