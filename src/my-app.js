import { LitElement, html, css } from 'lit';
import './components/registration-details.js'; // import { FormComponent } from './components/form-component';

export class MyApp extends LitElement {
  /**
   * Constructor function.
   */
  constructor() {
    super();
  }
  /**
   * Renders html
   *
   * @returns {TemplateResult}
   */
  render() {
    return html` <registration-details></registration-details> `;
  }
}
customElements.define('my-app', MyApp);
