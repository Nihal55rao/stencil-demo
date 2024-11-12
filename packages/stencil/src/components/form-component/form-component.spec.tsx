import { newSpecPage } from '@stencil/core/testing';
import { FormComponent } from './form-component';

describe('input-element', () => {
    
  it('should render successfully', async () => {
    const page = await newSpecPage({
      components: [FormComponent],
      html: `<form-component></form-component>`,
    });
    expect(page.root).toBeTruthy();
  });

});