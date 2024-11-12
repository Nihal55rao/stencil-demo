import { newSpecPage } from '@stencil/core/testing';
import { EmployerFormComponent } from './employer-form-component';

describe('input-element', () => {
    
  it('should render successfully', async () => {
    const page = await newSpecPage({
      components: [EmployerFormComponent],
      html: `<employer-form-component></employer-form-component>`,
    });
    expect(page.root).toBeTruthy();
  });

});