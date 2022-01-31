import { LitElement, html, css } from 'lit';
import './molecular-info.js';
import './compound-registration.js';
import './inventory-component.js';

/**
 * FormComponent component for form.
 *
 * @extends LitElement
 * @see {@link https://lit-element.polymer-project.org/|LitElement}
 */

export class FormComponent extends LitElement {
  /**
   * Gets prperties.
   */
  static get properties() {
    return {
      /**
       * Source of the image.
       *
       */
      imageSrc: { type: String },
      /**
       * Items list.
       * Passed from parent.
       *
       * @type {Object}
       */
      items: { type: Object },

      /**
       * Clear field.
       * Passed from parent.
       *
       * @type {Function}
       */
      clearField: { type: Function },
    };
  }
  /**
   * Constructor function.
   */
  constructor() {
    super();

    this.imageSrc = '../images/structure.png';
    this.molecularInfo = [
      {
        'MW Drawn Structure': 558.0252,
        'FW From Observed Mass': 5646.8,
        'FW From Target Mass': 5646.8,
      },
    ];
    this.items = {};
    this.clearField = () => {};
  }

  /**
   * Styles for the component.
   *
   * @returns {Array}
   */
  static get styles() {
    return css`
      main {
        width: 97%;
        margin: 20px;
      }
      .left-container {
        width: 42%;
        float: left;
        margin: 20px;
      }
      .right-container {
        width: 50%;
        float: left;
        margin: 20px;
      }
      .bottom-container {
        width: 100%;
        margin: 20px;
      }
      img {
        width: 100%;
      }
      .molecular-info {
        margin-top: 20px;
      }
      vaadin-grid {
        height: 100px;
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
      <main>
        <div class="left-container">
          <img src="${this.imageSrc}" />
          <molecular-info
            .molecularInfo="${this.molecularInfo}"
          ></molecular-info>
        </div>
        <div class="right-container">
          <compound-registration .items="${this.items}"></compound-registration>
        </div>
        <div class="bottom-container">
          <inventory-component
            .items=${this.items}
            .clearField="${this.clearField}"
          ></inventory-component>
        </div>
      </main>
    `;
  }
}

/**
 * Defines the element `form-component`.
 */
customElements.define('form-component', FormComponent);
