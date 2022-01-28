import { LitElement, html, css } from 'lit';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item';
import '@polymer/paper-listbox/paper-listbox.js';
//import '@vaadin/date-picker';
import '@polymer/paper-button/paper-button.js';

/**
 * Inventory component for form.
 *
 * @extends LitElement
 * @see {@link https://lit-element.polymer-project.org/|LitElement}
 */

export class InventoryComponent extends LitElement {
  /**
   * Gets prperties.
   */
  static get properties() {
    return {};
  }
  /**
   * Constructor function.
   */
  constructor() {
    super();
  }

  /**
   * Styles for the component.
   *
   * @returns {Array}
   */
  static get styles() {
    return css`
      paper-dropdown-menu {
        display: inline-block;
      }
      paper-input {
        display: inline-block;
      }
      .date-picker {
        border: none;
        border-bottom: 1px solid #001;
        width: 42%;
        margin-top: 10px;
      }
      .buttons {
        margin-top: 40px;
        border-top: 1px solid #ccc;
        padding-top: 20px;
        padding-left: 40px;
        margin-left: -40px;
      }
      .right {
        margin-left: 45px;
        width: 49%;
      }
      .left {
        width: 42%;
      }
      .saveBtn {
        background-color: crimson;
        color: white;
      }
      .generateSdf {
          position: absolute;
          background-color: green;
          color: white;
            right: 90px;
      }
    `;
  }

  /**
   * Renders html template.
   *
   * @returns {TemplateResult}
   */
  render() {
    return html`
      <div>
        <p>Inventory</p>

        <paper-dropdown-menu label="Material Status*" class="left">
          <paper-listbox slot="dropdown-content" class="dropdown-content">
            <paper-item>allosaurus</paper-item>
            <paper-item>brontosaurus</paper-item>
            <paper-item>carcharodontosaurus</paper-item>
            <paper-item>diplodocus</paper-item>
          </paper-listbox>
        </paper-dropdown-menu>

        <paper-input
          class="right"
          label="Solvent*"
          placeholder=" "
          required
          auto-validate
          error-message="Can't be empty"
        ></paper-input>

        <input type="date" class="date-picker" placeholder="Dissolution date" />

        <paper-dropdown-menu label="Physical State*" class="right">
          <paper-listbox slot="dropdown-content" class="dropdown-content">
            <paper-item>Solid</paper-item>
            <paper-item>Liquid</paper-item>
            <paper-item>Gas</paper-item>
          </paper-listbox>
        </paper-dropdown-menu>

        <paper-input
          class="left"
          label="Concentration(mM)*"
          placeholder=" "
          required
          auto-validate
          error-message="Can't be empty"
        ></paper-input>

        <paper-dropdown-menu label="Sample Type*" class="right">
          <paper-listbox slot="dropdown-content" class="dropdown-content">
            <paper-item>Solid</paper-item>
            <paper-item>Liquid</paper-item>
            <paper-item>Gas</paper-item>
          </paper-listbox>
        </paper-dropdown-menu>

        <paper-input
          class="left"
          label="Volume(uL)*"
          placeholder=" "
          required
          auto-validate
          error-message="Can't be empty"
        ></paper-input>

        <paper-input
         
          placeholder="Amount(nMol)"
          class="right"
        ></paper-input>
      </div>
      <div class="buttons">
        <paper-button class="saveBtn" raised>Save</paper-button>
        <paper-button>Cancel</paper-button>
        <paper-button class="generateSdf">Generate SDF</paper-button>
      </div>
    `;
  }
}

/**
 * Defines the element 'inventory-component'.
 */
customElements.define('inventory-component', InventoryComponent);
