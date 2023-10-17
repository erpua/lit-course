
import { LitElement, html, css } from 'lit-element';

export class DwMessage extends LitElement {

  static styles = css`
  :host {
    display: block;
  }
  `;

  render() {
    return html`
      <div>Hello from Lit component</div>
    `;
  }
}
customElements.define('dw-message', DwMessage);