import { newSpecPage } from '@stencil/core/testing';
import { TableComponent } from './table-component';

describe('table-component', () => {
  const EmployeeData = [
    { name: 'Nihal', employeeId: 1255, role: 'SDE', salary: 900000, joiningDate: '2024-01-01' },
    { name: 'Employee demo', employeeId: 1232, role: 'QA', salary: 1000000, joiningDate: '2023-03-01' },
  ];

  it('renders successfully', async () => {
    const page = await newSpecPage({
      components: [TableComponent],
      html: `<table-component></table-component>`,
    });
    expect(page.root).toBeTruthy();
  });

  it('displays table rows based on employerData', async () => {
    const page = await newSpecPage({
      components: [TableComponent],
      html: `<table-component></table-component>`,
    });

    page.rootInstance.employerData = EmployeeData;
    await page.waitForChanges();

    const rows = page.root.shadowRoot.querySelectorAll('tbody tr');
    expect(rows.length).toBe(EmployeeData.length);
    expect(rows[0].textContent).toContain('Nihal');
    expect(rows[1].textContent).toContain('Employee demo');
  });

 
});
