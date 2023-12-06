import { JetView } from "webix-jet";
import { data } from "../models/records";

/**
 * Lab 05 - 1
 * webix.ajax
 * waitData
 */

export default class lab05_01 extends JetView {
  config() {
    return {
      view: "datatable",
      //columns: [{ id: "id" }, { id: "firstName" }, { id: "lastName" }],
      autoConfig: true,
    };
  }

  // url: "https://dummyjson.com/users",
  init(view) {
    console.log("init");
    view.sync(data);
    data.waitData.then(() => {
      //   view.select(view.getFirstId());
    });
  }
}
