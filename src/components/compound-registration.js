import { LitElement, html, css } from 'lit';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-input/paper-textarea.js';

/**
 * CompoundRegistration component for form.
 *
 * @extends LitElement
 * @see {@link https://lit-element.polymer-project.org/|LitElement}
 */

export class CompoundRegistration extends LitElement {
  /**
   * Gets prperties.
   */
  static get properties() {
    return {
      /**
       * Items.
       * @type {Object}
       *
       */
      items: { type: Object },
    };
  }
  /**
   * Constructor function.
   */
  constructor() {
    super();

    this.items = {};
  }

  /**
   * Styles for the component.
   *
   * @returns {Array}
   */
  static get styles() {
    return css`
      paper-input {
        width: 48%;
        display: inline-block;
        margin-left: 10px;
      }
      paper-dropdown-menu {
        display: inline-block;
        width: 48%;
        margin-left: 10px;
      }
      paper-textarea {
        margin-left: 10px;
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
      <custom-style>
        <style>
          paper-textarea {
            --iron-autogrow-textarea: {
              box-sizing: border-box;
              border: 1px solid #ccc;
              border-radius: 3px;
            }
            --paper-input-container-underline: {
              display: none;
              height: 0;
            }
            --paper-input-container-underline-focus: {
              display: none;
            }
            --paper-input-container-label: {
              top: -22px;
            }
          }
        </style>
      </custom-style>
      <div>
        <p>Compound Registration</p>

        <paper-input
          label="Project"
          placeholder=" "
          value="${this.items.project}"
        ></paper-input>

        <paper-dropdown-menu label="Status">
          <paper-listbox
            slot="dropdown-content"
            class="dropdown-content"
            selected="${this.items.status}"
          >
            <paper-item>In Progress</paper-item>
            <paper-item>Queued</paper-item>
            <paper-item>Completed</paper-item>
          </paper-listbox>
        </paper-dropdown-menu>
        <paper-dropdown-menu label="Salt Name*">
          <paper-listbox
            slot="dropdown-content"
            class="dropdown-content"
            selected="${this.items.saltName}"
          >
            <paper-item>Allosaurus</paper-item>
            <paper-item>Brontosaurus</paper-item>
            <paper-item>Carcharodontosaurus</paper-item>
            <paper-item>Diplodocus</paper-item>
          </paper-listbox>
        </paper-dropdown-menu>
        <paper-input
          value="${this.items.saltCoefficient}"
          label="Salt Coefficient*"
          placeholder=" "
          required
          auto-validate
          error-message="Can't be empty"
        ></paper-input>
        <paper-input
          label="Project Code"
          placeholder=" "
          value="${this.items.projectCode}"
        ></paper-input>
        <paper-input
          label="Meta Code"
          placeholder=" "
          value="${this.items.metaCode}"
        ></paper-input>
        <paper-input
          placeholder="Amount(mg)"
          value="${this.items.amount}"
        ></paper-input>
        <paper-input
          label="Purity(%)"
          placeholder=" "
          value="${this.items.purity}"
        ></paper-input>
        <paper-textarea
          rows="5"
          label="Notes"
          value="${this.items.notes}"
        ></paper-textarea>
      </div>
    `;
  }
}

/**
 * Defines the element 'compound-registration'.
 */
customElements.define('compound-registration', CompoundRegistration);
