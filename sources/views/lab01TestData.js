import { JetView } from "webix-jet";

export default class CustomersData extends JetView {
  constructor(app, data) {
    super(app);
    console.log("instance Data : " + data);
    this._componentData = data;
  }

  config() {
    return {
      view: "datatable",
      columns: [
        {
          id: "name",
          header: ["Name", { content: "textFilter" }],
          sort: "text",
          fillspace: true,
        },
        { id: "email", header: "Email", sort: "text", adjust: "data" },
        { id: "phone", header: "Phone", sort: "text", width: 120 },
      ],
    };
  }

  init(view) {
    view.parse(this._componentData);
  }
}
