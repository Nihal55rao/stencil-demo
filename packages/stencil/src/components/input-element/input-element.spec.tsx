import { newSpecPage } from '@stencil/core/testing';
import { InputElement } from './input-element';

describe('input-element', () => {
    
  it('should render successfully', async () => {
    const page = await newSpecPage({
      components: [InputElement],
      html: `<input-element></input-element>`,
    });
    expect(page.root).toBeTruthy();
  });

  it('render with label, type, name, and value prop', async () => {
    const page = await newSpecPage({
      components: [InputElement],
      html: `<input-element label="Name" type="text" name="username" value="Nihal"></input-element>`,
    });

    const labelElement = page.root.shadowRoot.querySelector('.input-label');
    const inputElement = page.root.shadowRoot.querySelector('input');

    expect(labelElement.textContent).toBe('Name:');
    expect(inputElement.getAttribute('type')).toBe('text');
    expect(inputElement.getAttribute('name')).toBe('username');
    expect(inputElement.getAttribute('value')).toBe('Nihal');
  });

  it('emit on inputChanged with correct payload', async () => {
    const page = await newSpecPage({
      components: [InputElement],
      html: `<input-element label="Email" type="email" name="email" value="test@example.com"></input-element>`,
    });

    const inputElement = page.root.shadowRoot.querySelector('input');
    const inputChangedSpy = jest.fn();
    page.root.addEventListener('inputChanged', inputChangedSpy);

    inputElement.value = 'new@example.com';
    inputElement.dispatchEvent(new Event('input'));

    await page.waitForChanges();

    expect(inputChangedSpy).toHaveBeenCalledTimes(1);
    expect(inputChangedSpy).toHaveBeenCalledWith(expect.objectContaining({
      detail: { name: 'email', value: 'new@example.com' }
    }));
  });
});
