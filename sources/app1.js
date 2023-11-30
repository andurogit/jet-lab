import { JetApp, JetView } from "webix-jet";

const app1Temp = {
  template: "TestApp",
};

class TopView extends JetView {
  config() {
    return {
      type: "wide",
      cols: [{ view: "form", width: 200, rows: [{}] }, { $subview: true }],
    };
  }
}

const app = new JetApp({
  id: "windows",
  start: "/top/app1Temp",
  views: {
    top: TopView,
    app1Temp: app1Temp,
  },
});

export default app;

// export default class JetLabApp1 extends JetApp {
//   constructor(config) {
//     const defaults = {
//       id: "JetLabApp1",
//       start: "/top",
//       views: {
//         tt: app1Temp,
//       },
//     };
//     super({ ...defaults, ...config });
//   }
// }
