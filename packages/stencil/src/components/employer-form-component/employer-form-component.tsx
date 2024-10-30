import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'employer-form-component',
  styleUrl: 'employer-form-component.css',
  shadow: true,
})
export class EmployerFormComponent {
  @State() employerData: Array<any> = [];

  render() {
    return (
      <div>
      <table-component employerData={this.employerData}></table-component>
      </div>
    );
  }
}
