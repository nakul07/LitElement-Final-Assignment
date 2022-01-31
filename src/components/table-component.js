import { LitElement, html, css } from 'lit';
import '@vaadin/vaadin-grid/vaadin-grid-selection-column.js';
import '@vaadin/vaadin-grid/vaadin-grid-sort-column.js';
import { styleMap } from 'lit-html/directives/style-map.js';
import { render, nothing } from 'lit-html';

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
    return {
      /**
       * Items.
       * Passed from parent.
       *
       * @type {Array}
       */
      items: { type: Array },

      /**
       * Form items.
       * Passed from parent.
       *
       * @type {Object}
       */
      formItems: { type: Object },

      /**
       * Update data function.
       * Passed from parent.
       *
       * @type {Function}
       */
      updateData: { type: Function },
    };
  }

  /**
   * Constructor function.
   */
  constructor() {
    super();

    this.items = [];
    this.formItems = {};
    this.updateData = () => {};
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
   * Renders the structure column.
   *
   *  @param {Object} root
   * @param {Object} column
   * @param {Object} item
   *
   * @returns {TemplateResult}
   */

  structureRenderer(root, column, item) {
    const innerHTML = html`
      <div>
        <img src="../images/close.png" height="10px" />
      </div>
    `;

    render(innerHTML, root);
  }

  /**
   * Renders the menu column.
   *
   * @param {Object} root
   * @param {Object} column
   * @param {Object} item
   *
   * @returns {TemplateResult}
   */
  menuRenderer(root, column, item) {
    const innerHTML = html`
      <div>
        <img src="../images/p.png" height="10px" />
      </div>
    `;

    render(innerHTML, root);
  }

  /**
   * Renders the status.
   *
   * @param {Object} root
   * @param {Object} column
   * @param {Object} item
   *
   * @returns {TemplateResult}
   */
  statusRenderer(root, column, item) {
    let innerHTML;
    const itemList = item.item;
    const styles = {
      color:
        itemList.status === 0
          ? 'brown'
          : itemList.status === 1
          ? 'red'
          : 'green',
    };

    if (itemList.status === 0) {
      innerHTML = html`
        <span style="${styleMap(styles)}">&#8226; In Progress</span>
      `;
    } else if (itemList.status === 1) {
      innerHTML = html`
        <span style="${styleMap(styles)}">&#8226; Queued</span>
      `;
    } else {
      innerHTML = html`
        <span style="${styleMap(styles)}">&#8226; Completed</span>
      `;
    }

    render(innerHTML, root);
  }

  /**
   * Active item changed.
   *
   * @param {Object} item
   */
  activeItemChanged(item) {
    if (item) {
      this.updateData(item.id);
    }
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
          <vaadin-grid
            .items="${this.items}"
            @active-item-changed="${(e) =>
              this.activeItemChanged(e.detail.value)}"
          >
            <vaadin-grid-selection-column></vaadin-grid-selection-column>
            <vaadin-grid-column
              flex-grow="0"
              auto-width
              .renderer="${this.menuRenderer}"
            ></vaadin-grid-column>
            <vaadin-grid-sort-column
              header="Project"
              path="project"
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
              .renderer="${this.structureRenderer}"
            ></vaadin-grid-column>
            <vaadin-grid-column
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
