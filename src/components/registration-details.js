import { LitElement, html, css } from 'lit';
import './form-component'; // import { FormComponent } from './components/form-component';
import './table-component'; // import { TableComponent } from './components/table-component';

/**
 * MyApp component for dialog box.
 */
export class RegistrationDetails extends LitElement {
  static get properties() {
    return {
      /**
       * Items.
       *
       * @type {Array}
       */
      items: { type: Array },

      /**
       * Form items.
       *
       * @type {Object}
       */
      formItems: { type: Object },

      /**
       * Menu coordinates.
       *
       * @type {Object}
       */
      menuCoordinates: { type: Object },
    };
  }

  /**
   * Styles for the component.
   *
   * @returns {Array}
   */
  static get styles() {
    return css`
      div {
        border: 2px solid #ccc;
        margin: 20px;
        border-radius: 3px;
      }
    `;
  }
  /**
   *Constructor function.
   *
   */
  constructor() {
    super();

    this.items = [
      {
        id: 1,
        project: 'abcdef',
        contract: 'abcdef',
        varient: 'abcdef',
        concept: 'abcdef',
        target1: 'abcdef',
        target2: 'abcdef',
        series: 'abcdef',
        metadataCode: 'abcdef',
        delLineage: 'abcdef',
        structure: 'abcdef',

        status: 'In Progress',
        saltName: "abc",
        saltCoefficient: 'abcdef',
        projectCode: 'abcdef',
        metaCode: 'abcdef',
        amount: 'abcdef',
        purity: 'abcdef',
        notes: 'abcdef',
        materialStatus: 3,
        solvent: 'abcdef',
        date: 'abcdef',
        physicalState: 0,
        concentration: 'abcdef',
        sampleType: 0,
        volume: 'abcdef',
        amountInMole: 'abcdef',
      },
      {
        id: 2,
        project: 'row 2',
        contract: 'row 2',
        varient: 'row 2',
        concept: 'row 2',
        target1: 'row 2',
        target2: 'row 2',
        series: 'row 2',
        metadataCode: 'row 2',
        delLineage: 'row 2',
        structure: 'row 2',

        status: "Completed",
        saltName: 1,
        saltCoefficient: 'row 2',
        projectCode: 'row 2',
        metaCode: 'row 2',
        amount: 'row 2',
        purity: 'row 2',
        notes: 'row 2',
        materialStatus: 1,
        solvent: 'row 2',
        date: 'row 2',
        physicalState: 1,
        concentration: 'row 2',
        sampleType: 1,
        volume: 'row 2',
        amountInMole: 'row 2',
      },
      {
        id: 3,
        project: 'row 3',
        contract: 'row 3',
        varient: 'row 3',
        concept: 'row 3',
        target1: 'row 3',
        target2: 'row 3',
        series: 'row 3',
        metadataCode: 'row 3',
        delLineage: 'row 3',
        structure: 'row 3',

        status: "Queued",
        saltName: 0,
        saltCoefficient: 'row 3',
        projectCode: 'row 3',
        metaCode: 'row 3',
        amount: 'row 3',
        purity: 'row 3',
        notes: 'row 3',
        materialStatus: 0,
        solvent: 'row 3',
        date: 'row 3',
        physicalState: 2,
        concentration: 'row 3',
        sampleType: 2,
        volume: 'row 3',
        amountInMole: 'row 3',
      },
    ];
    this.formItems = {};
    this.menuCoordinates = {
      x: 0,
      y: 0,
    };
  }

  /**
   * Updates data.
   *
   * @param {String} id
   */
  updateData(id) {
    this.items.filter((item) => {
      if (item.id === id) {
        this.formItems = item;
      }
    });
  }

  /**
   * Updates the menu coordinates.
   *
   * @param {Object} event
   *
   */
  updateMenuCoordinates(event) {
    this.menuCoordinates = {
      ...this.menuCoordinates,
      x: event.clientX,
      y: event.clientY,
    };
   // console.log(this.menuCoordinates);
  }

  /**
   * Clear field.
   *
   */
  clearField() {
    this.formItems = {};
  }

  /**
   * Delete the item.
   * @param {String} id
   *
   */
  deleteItem(id) {
    //console.log(id)
    this.items = this.items.filter((item) => item.id !== id);
  }

  /**
   * Updates form Data .
   *
   */
  updateFormData(newItems) {
    //console.log('called');
    this.items.map((item) => {
      if (item.id === newItems.id) {
        item = { ...newItems };
        this.items[item.id - 1] = { ...item };
      }
    });
    // console.log(this.items);
  }

  /**
   *
   * @returns {TemplateResult}
   */
  render() {
    return html`
      <div>
        <table-component
          .items="${this.items}"
          .formItems="${this.formItems}"
          .updateData="${(id) => this.updateData(id)}"
          .deleteFunction="${(id) => this.deleteItem(id)}"
          .updateMenuCoordinates="${(event) =>
            this.updateMenuCoordinates(event)}"
          .menuCoordinates="${this.menuCoordinates}"
        ></table-component>
      </div>

      <div>
        <form-component
          .items="${this.formItems}"
          .clearField=${() => this.clearField()}
          .updateData="${(newItems) => this.updateFormData(newItems)}"
        ></form-component>
      </div>
    `;
  }
}

/**
 * Defines the element `my-app`.
 */
customElements.define('registration-details', RegistrationDetails);
