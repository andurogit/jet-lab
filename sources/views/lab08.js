import { JetView } from "webix-jet";
import { getData, getStorageData, saveData } from "../models/records";

/**
 * lab08
 *
 * bin data for dynamic data
 */

const buttons = {
  view: "toolbar",
  elements: [
    {
      view: "button",
      value: "Add Row",
      click: function () {
        // eslint-disable-next-line no-undef
        $$("$datatable1").add({});
      },
    },
  ],
};

// 그냥 일반적인 처린데... 뭐가 다른가????
class parseDataView extends JetView {
  config() {
    return {
      view: "datatable",
      autoConfig: true,
      save: saveData,
      // insert: function (view, params, dp) {
      //   console.log(params);
      //   console.log("insert Ok");
      // },
      //   },
    };
  }
  init(view) {
    view.parse(getData());
    view.define("save", saveData);
  }
}

class locStarageDataView extends JetView {
  config() {
    return {
      view: "datatable",
      localId: "overay",
      autoConfig: true,
      //   on: {
      //     onAfterLoad: function () {
      //       if (!this.count()) {
      //         console.log("tttt");
      //         this.showOverlay("Sorry, there is no data");
      //       } else this.hideOverlay();
      //     },
      //   },
    };
  }
  init(view) {
    const data = getStorageData() || [];

    console.log("Tis");
    this.$$("overay").showOverlay("Loading...");

    console.log(data);
    if (data && Object.keys(data).length === 0) {
      console.log("No data");
      view.showOverlay("No data available");
    } else {
      view.parse(data, "json");
    }
  }
}

export default class lab08 extends JetView {
  config() {
    return {
      rows: [buttons, parseDataView, locStarageDataView],
    };
  }
}
