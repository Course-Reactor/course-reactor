import { LitElement, TemplateResult, customElement, html } from "lit-element";

@customElement("page-home")
export default class PageHome extends LitElement {
  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <h1>Hello, world!</h1>
    `;
  }
}
