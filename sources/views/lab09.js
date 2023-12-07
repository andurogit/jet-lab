import { JetView } from "webix-jet";

/**
 * lab09
 *
 * Navigation
 *
 * 메뉴 이동은 여러가지 방법이 있는데
 *
 *
 */

// 01. route prop
// JetView 를 사용할 필요없다.
// class 일 필요도 없음.
const routeSampleView = {
  template: '<span route="/top/lab08"> route Sample </span>',
};

// 02. Button route
class buttonRouteView extends JetView {
  config() {
    return {
      view: "button",
      value: "List",
      route: "lab01",
      //   click: () => {
      click: function () {
        // $scope 는 this 에 View 이 $scope 는 function 으로 사용할 때 쓰는것.
        this.$scope.show(this.config.route);
      },
    };
  }
}

// Contents Layout
export default class lab09 extends JetView {
  config() {
    return {
      rows: [routeSampleView, buttonRouteView],
    };
  }
}
