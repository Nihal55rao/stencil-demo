import { newSpecPage } from '@stencil/core/testing';
import { EmployerTable } from './employer-table';

describe('input-element', () => {
    
  it('should render successfully', async () => {
    const page = await newSpecPage({
      components: [EmployerTable],
      html: `<employer-table></employer-table>`,
    });
    expect(page.root).toBeTruthy();
  });

});