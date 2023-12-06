import { HashRouter, JetApp, JetView } from "webix-jet";

/**
 * View 생성 로직 Lab
 * index.html 에서 appViewLogic 을 연결해 줘야 한다.
 */

const options = [
  { id: "John Doe", value: "john@example.com", phone: "555-1234" },
  { id: "Jane Smith", value: "jane@example.com", phone: "555-5678" },
  { id: "Bob Johnson", value: "bob@example.com", phone: "555-9876" },
  { id: "Alice Brown", value: "alice@example.com", phone: "555-4321" },
  { id: "Charlie Wilson", value: "charlie@example.com", phone: "555-8765" },
  { id: "Eva Davis", value: "eva@example.com", phone: "555-2345" },
  { id: "Frank Miller", value: "frank@example.com", phone: "555-6543" },
  { id: "Grace Lee", value: "grace@example.com", phone: "555-7890" },
  { id: "Henry Turner", value: "henry@example.com", phone: "555-3456" },
  { id: "Ivy Garcia", value: "ivy@example.com", phone: "555-8765" },
];

class TopView extends JetView {
  config() {
    return {
      rows: [{ template: "Demo details", height: 80 }, { $subview: true }],
    };
  }
}

class DataTableSelectTag extends JetView {
  config() {
    return {
      view: "datatable",
      data: [{ categoryId: 1 }], // test 용
      editable: true,
      columns: [
        { id: "categoryId", editor: "richselect", collection: options },
      ],
    };
  }
}

class OptionsView extends JetView {
  config() {
    return {
      rows: [
        {
          view: "form",
          elements: [
            { template: "Demo Combos" },
            { view: "combo", options: { data: options } },
          ],
        },
        DataTableSelectTag,
      ],
    };
  }
}

export default class ViewLogics extends JetApp {
  constructor(config) {
    const defaults = {
      router: HashRouter,
      start: "/top/layout",
      views: {
        // start: "demo.details",
        top: TopView, //"demo.details",
        layout: OptionsView,
      },
    };
    super({ ...defaults, ...config });
  }
}

webix.ready(() => new ViewLogics().render());

// const app = new JetApp({
//   id: "windows",
//   start: "/top/layout",
//   views: {
//     top: TopView,
//   },
// });

// export default app;
