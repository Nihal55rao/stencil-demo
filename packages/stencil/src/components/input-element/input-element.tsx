import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'input-element',
  styleUrl: 'input-element.css',
  shadow: true,
})
export class InputElement {
  @Prop() label: any;
  @Prop() type:any;
  @Prop() name: any;
  @Prop() value: any;

  @Event() inputChanged: EventEmitter<{ name: string; value: string }>;

  handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.inputChanged.emit({ name: target.name, value: target.value });
  }
  render() {
    return (
      <div class='input-element'>
          <label class='input-label'>{this.label}:</label>
            <input
              type={this.type}
              name={this.name}
              value={this.value}
              onInput={(event) => this.handleInput(event)}
              required
            />
        </div>
    );
  }
}
