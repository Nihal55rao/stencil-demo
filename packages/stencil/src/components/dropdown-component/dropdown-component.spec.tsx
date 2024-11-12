import { newSpecPage } from '@stencil/core/testing';
import { DropdownComponent } from './dropdown-component';

describe('input-element', () => {
    
  it('should render successfully', async () => {
    const page = await newSpecPage({
      components: [DropdownComponent],
      html: `<dropdown-component></dropdown-component>`,
    });
    expect(page.root).toBeTruthy();
  });

});