import { Component, h, State, Event, EventEmitter } from '@stencil/core';
import { MyService } from '../../services/my-service';

@Component({
  tag: 'form-component',
  styleUrl: 'form-component.css',
  shadow: true,
})
export class FormComponent {
  @Event() sendEmployerData: EventEmitter<any[]>;
  @State() name: string = '';
  @State() id: string = '';
  @State() salary: number | null = null;
  @State() joiningDate: string = '';
  @State() employerData: Array<any> = [];
  @State() selectedRole: string = 'SDE';
  @State() rolesOptions: string[] = ['SDE', 'QA', 'HR', 'Scrum master'];

  private handleValueChange(newValue: string) {
    this.selectedRole = newValue;
  }

  resetForm() {
    this.name = '';
    this.selectedRole = '';
    this.id = null;
    this.salary = null;
    this.joiningDate = '';
  }

  handleInputChange({ detail: { name, value } }: any) {
    if (name === 'salary') {
      this.salary = value ? parseFloat(value) : null;
    } else if (name === 'name') {
      this.name = value;
    }  else if (name === 'role') {
      this.selectedRole = value;
    } else if (name === 'id') {
      this.id = value;
    } else if (name === 'joiningDate') {
      this.joiningDate = value;
    }
    
  }

  handleSubmit = (event: Event) => {
    event.preventDefault();
    const newEmployer = {
      name: this.name,
      role: this.selectedRole,
      employeeId: this.id,
      salary: this.salary,
      joiningDate: this.joiningDate,
    };
    console.log('Employer Data:', this.employerData);
    MyService.createEmployeeData(newEmployer);
    this.employerData = [...this.employerData, newEmployer];
    this.sendEmployerData.emit(this.employerData);
    this.resetForm();
  };

  render() {
    console.log('Hello from console, with custom input');
    return (
      <div>
        <div>Employer form</div>
        <form onSubmit={this.handleSubmit}>
          <input-element label="Employee Name" type="text" name="name" value={this.name} onInputChanged={event => this.handleInputChange(event)}></input-element>

          <input-element label="Employer ID" type="text" name="id" value={this.id} onInputChanged={event => this.handleInputChange(event)}></input-element>

          <dropdown-component
            label="Employee Role"
            name="role"
            options={this.rolesOptions}
            selectedValue={this.selectedRole}
            onValueChange={(event: CustomEvent) => this.handleValueChange(event.detail)}
          ></dropdown-component>

          <input-element
            label="Employee Salary"
            type="number"
            name="salary"
            value={this.salary?.toString() || ''}
            onInputChanged={event => this.handleInputChange(event)}
          ></input-element>

          <input-element label="Joining Date" type="date" name="joiningDate" value={this.joiningDate} onInputChanged={event => this.handleInputChange(event)}></input-element>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
