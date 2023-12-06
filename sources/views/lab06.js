import { JetView } from "webix-jet";

/**
 * lab06
 *
 * select tag
 */

// sample data
const options = [
  { id: "John Doe", value: "john@example.com" },
  { id: "Jane Smith", value: "jane@example.com" },
  { id: "Bob Johnson", value: "bob@example.com" },
  { id: "Alice Brown", value: "alice@example.com" },
  { id: "Charlie Wilson", value: "charlie@example.com" },
  { id: "Eva Davis", value: "eva@example.com" },
  { id: "Frank Miller", value: "frank@example.com" },
  { id: "Grace Lee", value: "grace@example.com" },
  { id: "Henry Turner", value: "henry@example.com" },
  { id: "Ivy Garcia", value: "ivy@example.com" },
];

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
      view: "form",
      elements: [
        { template: "Demo Combos" },
        { view: "combo", options: { data: options } },
      ],
    };
  }
}

export default class lab06 extends JetView {
  config() {
    return {
      rows: [DataTableSelectTag, OptionsView],
    };
  }
}
