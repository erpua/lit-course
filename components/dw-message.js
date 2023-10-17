
import { LitElement, html, css } from 'lit-element';

export class DwMessage extends LitElement {

  // :host (applying styles on behalf of father element)
  // all custom elements have display inline, so need to add block
  static styles = css`
    :host {
      display: block;
      padding: 10px;
      border: 1px solid grey;
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 0;
    }
    div {
      padding: 4px;
      border: 10px;
      background-color: teal;
      color: white;
    }
    button {
      margin-top: 10px;
    }
  `;

  static properties = {
    msg: {
      type: String,
    },
  };

  constructor(){
    super();
    this.msg = "Welcome to Lit Element";
  };

  render() {
    return html`
      <div>Hello from Lit component</div>
      <p>Another tag p </p>
      <div>${this.msg}</div>
      <button @click=${this.changePropertyValue}>Click me to change prop value</button>
    `;
  };

  changePropertyValue() {
    this.msg = "New message";
  };


}
customElements.define('dw-message', DwMessage);