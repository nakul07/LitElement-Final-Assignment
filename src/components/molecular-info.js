import { LitElement, html, css } from 'lit';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-grid/vaadin-grid-column.js';

/**
 * MolecularInfo component for form.
 *
 * @extends LitElement
 * @see {@link https://lit-element.polymer-project.org/|LitElement}
 */

export class MolecularInfo extends LitElement {
  /**
   * Gets prperties.
   */
  static get properties() {
    return {
      /**
       * Molecular and Formula Weights.
       * Passed from parent component.
       *
       * @type {Array}
       */
      molecularInfo: { type: Array },
    };
  }
  /**
   * Constructor function.
   */
  constructor() {
    super();

    this.molecularInfo = [];
  }

  /**
   * Styles for the component.
   *
   * @returns {Array}
   */
  static get styles() {
    return css`
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
      <div class="molecular-info">
        <p>Molecular and Formula Weights</p>
        <vaadin-grid .items="${this.molecularInfo}">
          <vaadin-grid-column
            path="MW Drawn Structure"
            header="MW Drawn Structure"
          ></vaadin-grid-column>
          <vaadin-grid-column
            path="FW From Observed Mass"
            header="FW From Observed Mass"
          ></vaadin-grid-column>
          <vaadin-grid-column
            path="FW From Target Mass"
            header="FW From Target Mass"
          ></vaadin-grid-column>
        </vaadin-grid>
      </div>
    `;
  }
}

/**
 * Defines the element 'molecular-info'.
 */
customElements.define('molecular-info', MolecularInfo);
