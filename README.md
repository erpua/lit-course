# lit-course

# LitElement
- Lit - is transversion component
- LitElement just updating content(property), where it is needed, NOT making re-render of the entire web page

# SETUP
- mkdir folder (or clone from git)
- cd folder
- npm init -y (yes for all)
- npm i lit
- touch index.html => add element and import with script =>
  <dw-message></dw-message>
  <script src="./index.js" type="module"></script>
- mkdir components
- touch dw-message.js => 

import { LitElement, html } from 'lit';

class DwMessage extends LitElement {
  render() {
    return html `
      <div>Hello from dw-message component</div>
    `;
  }
};

customElements.define('dw-message', DwMessage);

- touch index.js
- in index.js => import './components/dw-message'; 

# RUNNING through npm (Web Dev Server page )
 - https://modern-web.dev/docs/dev-server/overview/

 - 1. Install Web Dev Server: npm i --save-dev @web/dev-server
 - 2. Then add the following to the "scripts" section in package.json:
 "start": "web-dev-server --node-resolve --open --watch"
 - 3. npm run start

# EXTENSIONS:
- Code Runner
- lit-html
- LitElement Snippet
- Live Preview
- Material Icon Theme

# EXTRAS
- Shift + Command + / => commenting with double slash: //

- Observed attributes: static get properties() { return { label: { type: String }, name: { type: String, attribute: 'fullname' },

CHECK UPDATE COMPLETE method in litelement for api

updated is method, when template is being updated

- `` => back ticks - comillas invertidas