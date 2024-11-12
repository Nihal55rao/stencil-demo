import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';
import { h } from '@stencil/core';

describe('my-component', () => {
  it('should render successfully', async () => {
    const page = await newSpecPage({
      components: [MyComponent],
      html: `<my-component></my-component>`,
    });
    expect(page.root).toBeTruthy();
  });

  it('should render my component with full name', async () => {
    const page = await newSpecPage({
      components: [MyComponent],
      html: `<my-component first="Nihal" middle="Rao" last="Ramagiri"></my-component>`,
    });
    expect(page.root).toEqualHtml(`
      <my-component first="Nihal" middle="Rao" last="Ramagiri">
        <mock:shadow-root>
          <div>
            <div>Hello,World I'm Nihal Rao Ramagiri</div>
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });

  it('renders with props', async () => {
    const page = await newSpecPage({
      components: [MyComponent],
      html: `<my-component first="Nihal" last="Ramagiri"></my-component>`,
    });
    expect(page.root.shadowRoot.textContent).toContain("Hello,World I'm Nihal Ramagiri");
  });


});
