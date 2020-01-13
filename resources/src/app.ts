import { LitElement, customElement } from "lit-element";
import router from "./router";

@customElement("course-reactor")
export default class CourseReactor extends LitElement {
  constructor() {
    super();
    router.attach(this.shadowRoot);
  }
}
