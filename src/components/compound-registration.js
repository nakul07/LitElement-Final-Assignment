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
        <paper-input label="Project" placeholder=" "></paper-input>
        <paper-input label="Source" placeholder=" "></paper-input>
        <paper-dropdown-menu label="Salt Name*">
          <paper-listbox slot="dropdown-content" class="dropdown-content">
            <paper-item>allosaurus</paper-item>
            <paper-item>brontosaurus</paper-item>
            <paper-item>carcharodontosaurus</paper-item>
            <paper-item>diplodocus</paper-item>
          </paper-listbox>
        </paper-dropdown-menu>
        <paper-input
          label="Salt Coefficient*"
          placeholder=" "
          required
          auto-validate
          error-message="Can't be empty"
        ></paper-input>
        <paper-input label="Project Code" placeholder=" "></paper-input>
        <paper-input label="Meta Code" placeholder=" "></paper-input>
        <paper-input placeholder="Amount(mg)"></paper-input>
        <paper-input label="Purity(%)" placeholder=" "></paper-input>
        <paper-textarea rows="5" label="Notes"></paper-textarea>
      </div>
    `;
  }
}

/**
 * Defines the element 'compound-registration'.
 */
customElements.define('compound-registration', CompoundRegistration);
