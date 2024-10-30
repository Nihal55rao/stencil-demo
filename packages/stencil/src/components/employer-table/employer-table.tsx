import { Component, State, h } from '@stencil/core';
import { MyService } from '../../services/my-service';

@Component({
  tag: 'employer-table',
  styleUrl: 'employer-table.css',
  shadow: true,
})
export class EmployerTable {
  @State() employerData: any[] = [];

  // Fetch data before the component renders
  async componentWillLoad() {
    this.employerData = await MyService.fetchEmployeesData();
  }

  render() {
    return (
      <div>
        <table-component employerData={this.employerData} apiFeature={true}></table-component>
      </div>
    );
  }
}
