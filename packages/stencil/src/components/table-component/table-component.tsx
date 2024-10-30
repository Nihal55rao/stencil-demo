import { Component, h, Listen, Prop, State } from '@stencil/core';
import { MyService } from '../../services/my-service';


@Component({
  tag: 'table-component',
  styleUrl: 'table-component.css',
  shadow: true,
})

export class TableComponent {
  @Prop() employerData: any[] = [];
  @Prop() apiFeature: boolean = false;
  @State() EmployeeData: any = [];
  @State() isDialogOpen: boolean = false;
 
  openView = async (id: any) => {
    this.EmployeeData = await MyService.getEmployeeDataById(id);
    console.log('EmployeeData Open View', this.EmployeeData)
    this.isDialogOpen = true;
  }

  @Listen('closeEmployeeDialog', {target: 'body'})
  closeEmployeeDialog (event: CustomEvent<any>) {
    this.isDialogOpen = event.detail;
    this.EmployeeData = []
  }

  refreshData = async () => {
    this.employerData = await MyService.fetchEmployeesData();
  }

  deleteEmployee = async (id: number) => {
    await MyService.deleteEmployeeData(id);
    this.refreshData();
  }
  

  render() {
    console.log('employer data in stencil table:', this.employerData)
    return (
      <div>
        {this.apiFeature && (
          <div>
            <button onClick={() => this.refreshData()}>Refresh</button>
          </div>
        )}
        
        <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Employee ID</th>
            <th>Employee Role</th>
            <th>Employee Salary</th>
            <th>Joining Date</th>
            {this.apiFeature && (
          <div>
            <th>Update</th>
            <th>Delete</th>
          </div>
          )}
          </tr>
        </thead>
        <tbody>
          {this.employerData.map((data) => (
            <tr>
              <td>{data.name}</td>
              <td>{data.employeeId}</td>
              <td>{data.role}</td>
              <td>{data.salary !== null ? data.salary : 'N/A'}</td>
              <td>{data.joiningDate}</td>
              
              {this.apiFeature && (
                <div>
                  <td><button onClick={() => this.openView(data.employeeId)}>View</button></td>
                  <td><button onClick={() => this.deleteEmployee(data.employeeId)}>Delete</button></td>
                </div>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <employee-dialog 
          employeeData={this.EmployeeData} 
          isOpen={this.isDialogOpen}>
        </employee-dialog>
      </div>
    );
  }
}
