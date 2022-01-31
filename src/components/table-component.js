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
        program: 'abcdef',
        contract: 'abcdef',
        varient: 'abcdef',
        concept: 'abcdef',
        target1: 'abcdef',
        target2: 'abcdef',
        series: 'abcdef',
        metadataCode: 'abcdef',
        delLineage: 'abcdef',
        structure: 'abcdef',
        status: 'abcdef',
        Available: true,
      },
      {
        program: 'abcdef',
        contract: 'abcdef',
        varient: 'abcdef',
        concept: 'abcdef',
        target1: 'abcdef',
        target2: 'abcdef',
        series: 'abcdef',
        metadataCode: 'abcdef',
        delLineage: 'abcdef',
        structure: 'abcdef',
        status: 'abcdef',
      },
      {
        program: 'abcdef',
        contract: 'abcdef',
        varient: 'abcdef',
        concept: 'abcdef',
        target1: 'abcdef',
        target2: 'abcdef',
        series: 'abcdef',
        metadataCode: 'abcdef',
        delLineage: 'abcdef',
        structure: 'abcdef',
        status: 'abcdef',
      },
      {
        program: 'abcdef',
        contract: 'abcdef',
        varient: 'abcdef',
        concept: 'abcdef',
        target1: 'abcdef',
        target2: 'abcdef',
        series: 'abcdef',
        metadataCode: 'abcdef',
        delLineage: 'abcdef',
        structure: 'abcdef',
        status: 'abcdef',
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
              header="Program"
              path="program"
              flex-grow="0"
              auto-width
            ></vaadin-grid-sort-column>
            <vaadin-grid-column
              path="contract"
              header="Contract"
              auto-width
            ></vaadin-grid-column>
            <vaadin-grid-sort-column
              header="Varient"
              path="varient"
              auto-width
            ></vaadin-grid-sort-column>
            <vaadin-grid-column
              path="concept"
              auto-width
              header="Concept"
            ></vaadin-grid-column>
            <vaadin-grid-column
              path="target1"
              auto-width
              header="Target 1"
            ></vaadin-grid-column>
            <vaadin-grid-sort-column
              path="target2"
              auto-width
              header="Target 2"
            ></vaadin-grid-sort-column>
            <vaadin-grid-sort-column
              path="series"
              auto-width
              header="Series"
            ></vaadin-grid-sort-column>
            <vaadin-grid-column
              path="metadataCode"
              auto-width
              header="Metadata Code"
            ></vaadin-grid-column>
            <vaadin-grid-column
              path="delLineage"
              auto-width
              header="Del Lineage"
            ></vaadin-grid-column>
            <vaadin-grid-column
              path="structure"
              auto-width
              header="Structure"
            ></vaadin-grid-column>
            <vaadin-grid-column
              path="status"
              auto-width
              .renderer="${this.statusRenderer}"
              header="Status"
            ></vaadin-grid-column>
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
