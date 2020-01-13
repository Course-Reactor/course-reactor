import { LitElement, TemplateResult, customElement, html } from "lit-element";

@customElement("page-404")
export default class Page404 extends LitElement {
  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <h1>404</h1>
    `;
  }
}
