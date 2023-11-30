import { JetView } from "webix-jet";

/*
Ref View
*/

export default class Toolbar extends JetView {
  config() {
    const demoView = {
      view: "toolbar",
      elements: [
        { view: "label", label: "Demo" },
        // toobar scope 에서 호출 ( arrow function 사용)
        {
          view: "button",
          value: "details",
          click: () => {
            this.show("details");
          },
        },
        // function 사용으로 $scope 에서 호출
        {
          view: "button",
          value: "details",
          click: function () {
            this.$scope.show(this.getValue());
          },
        },
        // app 참조에서 호출
        {
          view: "button",
          value: "details",
          click: () => {
            this.app.show("/top/details"); // demo 엡에 details?
          },
        },
      ],
    };

    const formView = {
      view: "form",
      localId: "form01",
      elements: [
        { view: "text", name: "email", required: true, label: "Email" },
        {
          view: "button",
          value: "save",
          click: () => {
            console.log("save");
            const form = this.getRoot().queryView({ view: "form" });
            if (form.validate()) this.show("details");
          },
        },
      ],
    };

    // 이렇게 넣으면 Root 가 layout 이되는건가???
    return {
      view: "layout",
      rows: [demoView, formView, {}],
    };
  } // config() end

  init(ui, url) {
    console.log("ttttt" + url);
    if (url.length > 1) {
      //this.$$("form01")
      console.log("tttt");
    }
  }
}
