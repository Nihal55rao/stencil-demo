import { newSpecPage } from '@stencil/core/testing';
import { EmployeeDialog } from './employee-dialog';

describe('input-element', () => {
    
  it('should render successfully', async () => {
    const page = await newSpecPage({
      components: [EmployeeDialog],
      html: `<employee-dialog></employee-dialog>`,
    });
    expect(page.root).toBeTruthy();
  });

});