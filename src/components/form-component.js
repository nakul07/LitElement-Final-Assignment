import { LitElement, html, css } from 'lit';
import './molecular-info.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-input/paper-textarea.js';
import {
  status,
  physicalState,
  saltName,
  materialStatus,
  sampleType,
} from '../data/dropdown-data.js';
import '../components/commons/drop-down.js';

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

      /**
       * Update Data.
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

    this.imageSrc = '../images/structure.png';
    this.molecularInfo = [
      {
        'MW Drawn Structure': 558.0252,
        'FW From Observed Mass': 5646.8,
        'FW From Target Mass': 5646.8,
      },
    ];
    this.items = {};
    this.newItems = {};
    this.clearField = () => {};
    this.isValid = true;
    this.updateData = () => {};
    this.checkValidation = this.checkValidation.bind(this);
    this.saveFunction = this.saveFunction.bind(this);
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

      paper-input {
        width: 48%;
        display: inline-block;
        margin-left: 10px;
      }

      paper-textarea {
        margin-left: 10px;
        width: 100%;
      }

      paper-input {
        display: inline-block;
      }
      .date-picker {
        border: none;
        border-bottom: 1px solid #001;

        margin-top: 10px;
      }
      .buttons {
        margin-top: 40px;
        border-top: 1px solid #ccc;
        padding-top: 20px;
        padding-left: 40px;
        margin-left: -40px;
      }
      .right {
        margin-left: 45px;
        width: 49%;
      }
      .left {
        width: 42%;
        margin-left: 10px;
      }
      .saveBtn {
        background-color: crimson;
        color: white;
      }
      .generateSdf {
        position: absolute;
        background-color: green;
        color: white;
        right: 90px;
      }
    `;
  }

  /**
   * Call the clear field function.
   *
   */
  callClearField() {
    this.clearField();
  }

  /**
   * Checks the validation of the input items.
   *
   */
  checkValidation() {
    const list = this.shadowRoot.querySelectorAll('.required');

    list.forEach((item) => {
      if (item.validate()) {
      } else {
        this.isValid = false;
      }
    });
    if (this.isValid) {
      this.saveFunction();
    }
  }

  /**
   * Save function.
   *
   */
  saveFunction() {
    const list = this.shadowRoot.querySelectorAll('.data-input');
    list.forEach((item) => {
      this.newItems[item.getAttribute('name')] = item.value;
    });
    this.newItems['id'] = this.items.id;
    //console.log(this.newItems.id);
    this.updateData(this.newItems);
    console.log(this.newItems);
  }

  /**
   * Renders html template.
   *
   * @returns {TemplateResult}
   */
  render() {
    this.isValid = true;
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
      <main>
        <div class="left-container">
          <img src="${this.imageSrc}" />
          <molecular-info
            .molecularInfo="${this.molecularInfo}"
          ></molecular-info>
        </div>

        <div class="right-container">
          <p>Compound Registration</p>

          <paper-input
            name="project"
            class="data-input"
            label="Project"
            placeholder=" "
            value="${this.items.project}"
          ></paper-input>

          <drop-down
            label="Status"
            class="data-input dropdown"
            name="status"
            .value="${status.indexOf(this.items.status)}"
            .options="${status}"
          >
          </drop-down>

          <drop-down
            label="Salt Name*"
            class="data-input drop-down dropdown"
            name="saltName"
            .value="${saltName.indexOf(this.items.saltName)}"
            .options="${saltName}"
          ></drop-down>

          <paper-input
            name="saltCoefficient"
            value="${this.items.saltCoefficient}"
            label="Salt Coefficient*"
            placeholder=" "
            class="data-input required"
            required
            auto-validate
            error-message="Can't be empty"
          ></paper-input>

          <paper-input
            name="projectCode"
            class="data-input"
            label="Project Code"
            placeholder=" "
            value="${this.items.projectCode}"
          ></paper-input>

          <paper-input
            name="metaCode"
            class="data-input"
            label="Meta Code"
            placeholder=" "
            value="${this.items.metaCode}"
          ></paper-input>

          <paper-input
            name="amount"
            class="data-input"
            placeholder="Amount(mg)"
            value="${this.items.amount}"
          ></paper-input>

          <paper-input
            name="purity"
            class="data-input"
            label="Purity(%)"
            placeholder=" "
            value="${this.items.purity}"
          ></paper-input>

          <paper-textarea
            name="notes"
            class="data-input"
            rows="5"
            label="Notes"
            value="${this.items.notes}"
          ></paper-textarea>
        </div>

        <div class="bottom-container">
          <p>Inventory</p>
          <iron-form>
            <form method="get" id="inventoryForm">
              <drop-down
                label="Material Status*"
                class="left data-input dropdown"
                name="materialStatus"
                .value="${materialStatus.indexOf(this.items.materialStatus)}"
                .options="${materialStatus}"
              ></drop-down>

              <paper-input
                value=${this.items.solvent}
                name="solvent"
                class="right data-input"
                label="Solvent*"
                placeholder=" "
                required
                auto-validate
                error-message="Can't be empty"
              ></paper-input>

              <input
                name="date"
                type="date"
                value="${this.items.date}"
                class="left date-picker data-input"
                placeholder="Dissolution date"
              />

              <drop-down
                label="Physical State*"
                class="right data-input dropdown"
                name="physicalState"
                .value="${physicalState.indexOf(this.items.physicalState)}"
                .options="${physicalState}"
              ></drop-down>

              <paper-input
                value=${this.items.concentration}
                name="concentration"
                class="left data-input"
                label="Concentration(mM)*"
                placeholder=" "
                required
                auto-validate
                error-message="Can't be empty"
              ></paper-input>

              <drop-down
                label="Sample Type*"
                class="right data-input dropdown"
                name="sampleType"
                .value="${sampleType.indexOf(this.items.sampleType)}"
                .options="${sampleType}"
              ></drop-down>

              <paper-input
                name="volume"
                value=${this.items.volume}
                class="left   data-input"
                label="Volume(uL)*"
                placeholder=" "
                required
                auto-validate
                error-message="Can't be empty"
              ></paper-input>

              <paper-input
                name="amountInMole"
                placeholder="Amount(nMol)"
                class="right data-input"
                value=${this.items.amountInMole}
              ></paper-input>
            </form>
          </iron-form>

          <div class="buttons">
            <paper-button
              class="saveBtn"
              @click="${this.checkValidation}"
              raised
              >Save</paper-button
            >
            <paper-button @click="${this.callClearField}">Cancel</paper-button>
            <paper-button class="generateSdf">Generate SDF</paper-button>
          </div>
        </div>
      </main>
    `;
  }
}

/**
 * Defines the element `form-component`.
 */
customElements.define('form-component', FormComponent);
