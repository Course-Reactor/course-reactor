import { Router } from "@vaadin/router";
import routes from "./routes";

export default {
  attach: (root: Node) => {
    const router = new Router(root);
    router.setRoutes(routes as []);
  }
};
