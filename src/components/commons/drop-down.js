import { LitElement, html, css } from 'lit';

import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import '@polymer/paper-listbox/paper-listbox';
import '@polymer/paper-item/paper-item';

export class DropDown extends LitElement {
  static get styles() {
    return css`
      paper-dropdown-menu {
        display: inline-block;
        width: 48%;
        margin-left: 10px;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * Drop down options
       *
       * @type {Array}
       */
      options: { type: Array },
      /**
       * The value to be set
       *
       * @type {string}
       */
      value: { type: String },
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <paper-dropdown-menu
        required
        error-message="Can't be empty"
        class="input-data"
        noink
        no-animations
        label=${this.getAttribute('label')}
      >
        <paper-listbox
          slot="dropdown-content"
          class="dropdown-content"
          selected="${this.value}"
        >
          ${this.options.map(
            (option) => html`<paper-item>${option}</paper-item>`
          )}
        </paper-listbox>
      </paper-dropdown-menu>
    `;
  }
}

customElements.define('drop-down', DropDown);
