import { LitElement, html, css } from 'lit';
import '@vaadin/vaadin-grid/vaadin-grid-selection-column.js';
import '@vaadin/vaadin-grid/vaadin-grid-sort-column.js';

/**
 * TableComponent component for table.
 *
 * @extends LitElement
 * @see {@link https://lit-element.polymer-project.org/|LitElement}
 */

export class TableComponent extends LitElement {
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

    this.items = [
      {
        delLineage: 'abcdef',
        structure: 'abcdef',
        compoundName: 'abcdef',
        plateNames: 'abcdef',
        well: 'abcdef',
        program: 'abcdef',
        contract: 'abcdef',
      },
      {
        delLineage: 'abcdef',
        structure: 'abcdef',
        compoundName: 'abcdef',
        plateNames: 'abcdef',
        well: 'abcdef',
        program: 'abcdef',
        contract: 'abcdef',
      },
      {
        delLineage: 'abcdef',
        structure: 'abcdef',
        compoundName: 'abcdef',
        plateNames: 'abcdef',
        well: 'abcdef',
        program: 'abcdef',
        contract: 'abcdef',
      },
    ];
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
        <div>
          <vaadin-grid .items="${this.items}">
            <vaadin-grid-selection-column></vaadin-grid-selection-column>
            <vaadin-grid-sort-column
              header="DEL Lineage"
              path="delLineage"
              flex-grow="0"
              auto-width
            ></vaadin-grid-sort-column>
            <vaadin-grid-column
              path="structure"
              header="Structure"
              auto-width
            ></vaadin-grid-column>
            <vaadin-grid-sort-column
              header="Compound Name"
              path="compoundName"
              auto-width
            ></vaadin-grid-sort-column>
            <vaadin-grid-column
              path="plateNames"
              auto-width
              header="Plate Name"
            ></vaadin-grid-column>
            <vaadin-grid-column
              path="well"
              auto-width
              header="Well"
            ></vaadin-grid-column>
            <vaadin-grid-sort-column
              path="program"
              auto-width
              header="Program"
            ></vaadin-grid-sort-column>
            <vaadin-grid-sort-column
              path="contract"
              auto-width
              header="Contract"
            ></vaadin-grid-sort-column>
          </vaadin-grid>
        </div>
      </main>
    `;
  }
}

/**
 * Defines the element `table-component`.
 */
customElements.define('table-component', TableComponent);
