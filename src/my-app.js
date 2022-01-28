import { LitElement, html, css } from 'lit';
import './components/form-component'; // import { FormComponent } from './components/form-component';
import './components/table-component'; // import { TableComponent } from './components/table-component';

/**
 * MyApp component for dialog box.
 */
export class MyApp extends LitElement {
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
   *
   * @returns {TemplateResult}
   */
  render() {
    return html`
      <div>
        <table-component></table-component>
      </div>

      <div>
        <form-component></form-component>
      </div>
    `;
  }
}

/**
 * Defines the element `my-app`.
 */
customElements.define('my-app', MyApp);
