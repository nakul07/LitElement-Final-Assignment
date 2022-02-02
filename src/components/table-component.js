import { render, nothing } from 'lit-html';
import { LitElement, html, css } from 'lit';
import { styleMap } from 'lit-html/directives/style-map.js';

import '@vaadin/vaadin-grid/vaadin-grid-selection-column.js';
import '@vaadin/vaadin-grid/vaadin-grid-sort-column.js';
import '@polymer/paper-dialog/paper-dialog.js';
//import '@vaadin/grid/vaadin-grid.js';

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

      /**
       * Delete function.
       * Passed from parent.
       *
       * @type {Function}
       */
      deleteFunction: { type: Function },

      /**
       * Active item.
       *
       * @type {Object}
       */
      itemList: { type: Object },

      // /**
      //  * X coordinates of click event
      //  *
      //  * @type {Number}
      //  */
      // xCoordinates: { type: Number },

      // /**
      //  * Y coordinates of click event
      //  *
      //  * @type {Number}
      //  */
      // yCoordinates: { type: Number },

      /**
       * Style for popup
       *
       * @type {Object}
       */
      styles: { type: Object },

      /**
       * Menu coordinates
       *
       * @type {Object}
       */
      menuCoordinates: { type: Object },

      /**
       * Update menu coordinates.
       *
       * @type {Function}
       */
      updateMenuCoordinates: { type: Function },
    };
  }

  /**
   * Constructor function.
   */
  constructor() {
    super();

    this.items = [];
    this.itemList = {};
    this.formItems = {};
    this.menuCoordinates = {};
    this.updateData = () => {};
    this.deleteFunction = () => {};
    this.updateMenuCoordinates = () => {};
    this.openDialog = this.openDialog.bind(this);
    this.menuRenderer = this.menuRenderer.bind(this);
    this.callDeleteFunction = this.callDeleteFunction.bind(this);
    this.handleMenuPosition = this.handleMenuPosition.bind(this);

    this.styles = {};
  }

  // updated(changedProperties) {
  //   if (changedProperties.has('menuCoordinates')) {
  //     console.log(this.menuCoordinates);
  //   }
  // }

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
      paper-dialog {
        position: absolute;
      }
    `;
  }

  /**
   * Renders the structure column.
   *
   * @param {Object} root
   * @param {Object} column
   * @param {Object} item
   *
   * @returns {TemplateResult}
   */

  structureRenderer(root, column, item) {
    const innerHTML = html`
      <div>
        <img src="../images/structure-1.png" height="30px" />
      </div>
    `;

    render(innerHTML, root);
  }

  /**
   * Renders the header for menu column.
   *
   * @param {Object} root
   */
  menuHeaderRenderer(root) {
    const innerHTML = html`
      <div>
        <paper-button>
          <iron-icon src="../images/p.png"></iron-icon>
        </paper-button>
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
    // console.log(items);
    //this.checkList(item);
    let itemList = item.item;
    const innerHTML = html`
      <div>
        <paper-button
          @click="${(event) => {
            this.handleMenuPosition(event, itemList);
          }}"
          ><iron-icon src="../images/p.png"></iron-icon
        ></paper-button>
      </div>
    `;

    render(innerHTML, root);
  }
  // /**
  //  * Create the list of checked rows for the table.
  //  *
  //  */
  // checkList(items) {
    
  // }

  /**
   * Handle menu position
   *
   * @param {Object} event
   * @param {Object} item
   */
  handleMenuPosition(event, itemList) {
    //this.updateMenuCoordinates(event);
    this.itemList = itemList;
    const popUp = this.shadowRoot.querySelector('#dialog');
    popUp.style.left = event.clientX + 'px';
    popUp.style.top = event.clientY + 'px';
    this.openDialog();
  }

  /**
   * Calls the delete function.
   *
   */
  callDeleteFunction() {
    this.deleteFunction(this.itemList.id);
  }

  /**
   * Opens the dialog
   *
   */
  openDialog() {
    this.shadowRoot.querySelector('#dialog').toggle();
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
        itemList.status === 'In Progress' || itemList.status === 0
          ? 'brown'
          : itemList.status === 'Queued' || itemList.status === 1
          ? 'red'
          : 'green',
    };

    if (itemList.status === 'In Progress' || itemList.status === 0) {
      innerHTML = html`
        <span style="${styleMap(styles)}">&#8226; In Progress</span>
      `;
    } else if (itemList.status === 'Queued' || itemList.status === 1) {
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
      // console.log("clicked");
    }
  }

  /**
   * Generates classes according to the status.
   *
   * @param {Object} column
   * @param {Object} model
   *
   * @returns {String}
   *
   */
  cellClassNameGenerator(column, model) {
    const item = model.item;
    let classes = '';

    if (item.status === 'In Progress') {
      classes += 'in-progress';
    } else if (item.status === 'Completed') {
      classes += 'completed';
    } else {
      classes += 'queued';
    }
    //  console.log(classes);
    return classes;
  }

  /**
   * Renders html template.
   *
   * @returns {TemplateResult}
   */
  render() {
    //console.log(this.xCoordinates);
    // let styles = {
    //   top: this.menuCoordinates.y + 'px',
    //   left: this.menuCoordinates.x + 'px',
    // };
    // console.log(styles);
    return html`
      <main>
        <div dialog-confirm>
          <vaadin-grid
            id="grid"
            .cellClassNameGenerator="${this.cellClassNameGenerator}"
            .items="${this.items}"
            @active-item-changed="${(e) =>
              this.activeItemChanged(e.detail.value)}"
            theme="column-borders"
          >
            <vaadin-grid-selection-column></vaadin-grid-selection-column>
            <vaadin-grid-column
              flex-grow="0"
              auto-width
              .headerRenderer="${this.menuHeaderRenderer}"
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

        <paper-dialog id="dialog" modal>
          <div class="cross-button">
            <paper-button dialog-confirm @click="${this.callDeleteFunction}">
              Delete
            </paper-button>
          </div>
        </paper-dialog>
      </main>
    `;
  }
}

/**
 * Defines the element `table-component`.
 */
customElements.define('table-component', TableComponent);
