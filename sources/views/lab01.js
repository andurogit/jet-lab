import { JetView } from "webix-jet";
import { getClients2 } from "../models/customers";
import CustomersData from "./lab01TestData";

/*
    01. config property value check 
    02. Class View instance
*/
export default class Lab01 extends JetView {
  config() {
    // 01
    // const mode = this.app.config.mode;
    // return {
    //   template: "Lab001" + mode,
    // };

    // 02.

    console.log("function call : ");
    return {
      rows: [new CustomersData(this.app, getClients2())],
    };
  }
}
