import { JetView } from "webix-jet";

/**
 * Life Cycle
 */

class ChildView extends JetView {
  config() {
    webix.message("Child config");
    return {
      template: "child",
    };
  }
  init() {
    webix.message("Child init");
  }
  urlChange() {
    webix.message("Child urlChange");
  }
  ready() {
    webix.message("Child ready");
  }
}

export default class ParentView extends JetView {
  config() {
    webix.message("Top config");
    return {
      rows: [
        { template: "Main part" },
        { $subview: ChildView },
        // { $subview:true },
      ],
    };
  }
  init() {
    webix.message("Top init");
  }
  urlChange() {
    webix.message("Top urlChange");
  }
  ready() {
    webix.message("Top ready");
  }
}
