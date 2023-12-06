import { JetView } from "webix-jet";

/**
 * lab05 is async View
 * webix.ajax()
 *
 * data call
 */

/**
 * 기본적인 webix.ajax 구조
 */
class defaultAjax extends JetView {
  config() {
    return this.webix.ajax("https://dummyjson.com/users").then((data) => {
      console.log(data.json());
      const dataTable = {
        view: "datatable",
        //columns: [{ id: "id" }, { id: "firstName" }, { id: "lastName" }],
        autoConfig: true,
        data: data.json().users,
      };
      // const users = data.json();
      return dataTable;
    });
  }
}

/**
 * res rej 구조
 * customers model 에서 getClients 가 이거네?
 */
// class promiseAjax extends JetView {
//   config() {
//     // ???
//     new Promise((res, rej) => {
//       this.webix.ajax("https://dummyjson.com/users", (text, res) => {
//         const dataTable = {
//           view: "datatable",
//           //columns: [{ id: "id" }, { id: "firstName" }, { id: "lastName" }],
//           autoConfig: true,
//           data: res.json().users,
//         };
//         res(dataTable);
//       });
//     });
//   }
// }

export default class lob05 extends JetView {
  config() {
    // return defaultAjax;
    return {
      rows: [defaultAjax],
    };
  }
}
