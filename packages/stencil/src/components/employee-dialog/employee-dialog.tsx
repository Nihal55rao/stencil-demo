import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'employee-dialog',
  styleUrl: 'employee-dialog.css',
  shadow: true,
})
export class EmployeeDialog {
  @Event() closeEmployeeDialog: EventEmitter<any>;
  @Prop() employeeData: any = [];
  @Prop() isOpen: boolean = false;

  closeDialog = () => {
    this.isOpen = false;
    this.closeEmployeeDialog.emit(this.isOpen);
  }

  componentWillLoad(){
    console.log('employeeData',this.employeeData)
  }

  render() {
    return (
      <div class={`dialog ${this.isOpen ? 'open' : ''}`}>
        <div class="dialog-content">
          <span class="close" onClick={this.closeDialog}>&times;</span>
          <h1>Employee Details</h1>
          <div>
          <p>Employee Name: {this.employeeData.name}</p>
            <p>Employee ID: {this.employeeData.employeeId}</p>
            <p>Employee Role: {this.employeeData.role}</p>
            <p>Employee Salary: {this.employeeData.salary}</p>
            <p>Joining Date: {new Date(this.employeeData.joiningDate).toLocaleDateString()}</p>
          </div>
          </div>
      </div>
    );
  }
}
