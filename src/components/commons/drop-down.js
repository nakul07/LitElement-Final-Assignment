import { LitElement, html, css } from 'lit';

import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import '@polymer/paper-listbox/paper-listbox';
import '@polymer/paper-item/paper-item';

/**
 * DropDown component for drop down.
 *
 * @extends LitElement
 * @see {@link https://lit-element.polymer-project.org/|LitElement}
 */
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

      /**
       * Name of the drop down
       *
       * @type {string}
       */
      name: { type: String },
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
        class="data-input"
        noink
        no-animations
        label=${this.getAttribute('label')}
        name=${this.name}
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
