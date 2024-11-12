import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'dropdown-component',
  styleUrl: 'dropdown-component.css',
  shadow: true,
})
export class DropdownComponent {
  @Prop() label: string = '';
  @Prop() name: string = '';
  @Prop() options: string[];
  @Prop() selectedValue: string;

  @Event() valueChange: EventEmitter<string>;

  private handleChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.valueChange.emit(selectElement.value);
  }
  render() {
    return (
      <div class="input-element">
        <label class="input-label">{this.label}</label>
         <select class="select" name={this.name} onInput={(event) => this.handleChange(event)}>
        {this.options?.map(option => (
          <option value={option}  selected={option === this.selectedValue}>
            {option}
          </option>
        ))}
      </select>
      </div>
    );
  }
}
