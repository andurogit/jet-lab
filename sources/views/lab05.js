import { JetView } from "webix-jet";

/**
 * lab05 is async View
 * webix.ajax()
 *
 * data call
 */

export default class lob05 extends JetView {
  config() {
    return this.webix.ajax("https://dummyjson.com/users").then((data) => {
      console.log(data.json());
      const dataTable = {
        view: "datatable",
        columns: [{ id: "id" }, { id: "firstName" }, { id: "lastName" }],
        data: data.json().users,
      };
      // const users = data.json();
      return dataTable;
    });
  }
}
