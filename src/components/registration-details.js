import { LitElement, html, css } from 'lit';
import './form-component'; // import { FormComponent } from './components/form-component';
import './table-component'; // import { TableComponent } from './components/table-component';
import { items } from '../data/dropdown-data.js';
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

    this.items = items;
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
