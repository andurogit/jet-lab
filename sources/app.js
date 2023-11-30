// app config
import { JetApp } from "webix-jet";
// import TopView from "./views/top";

// .env 값
const VITE_BUILD_AS_MODULE = false;
const PRODUCTION = false;

// dynamic import of views
const modules = import.meta.glob("./views/**/*.js");
const views = (name) => modules[`./views/${name}.js`]().then((x) => x.default);

// Document in view default function example
/*
const views = (url) => {
  url = url.replace(/\./g, "/");
  let view = require("jet-views/" + url);
  if (view.__esModule) {
    view = view.default;
  }
  return view;
};
*/

export default class JetLabApp extends JetApp {
  constructor(config) {
    const defaults = {
      mode: "readonly",
      id: "JetLabApp",
      // router: HashRouter,
      start: "/top",
      debug: !PRODUCTION,
      // routes 를 사용하면 url 을 간략하게 만들 수 있다.
      /* routes: {
        "/shorts": "/top/start",
        "/lab01": "/top/lab01",
      }, */
      //views
      // views: { top: TopView },
      views,
    };
    super({ ...defaults, ...config });
  }
}

// import app1 from "./app1";

// const appSamples = new webix.DataCollection({
//   data: [{ group: 1, value: "app1", app: app1, id: "app1" }],
// });

if (!VITE_BUILD_AS_MODULE) {
  webix.ready(() => {
    new JetLabApp().render();
    // console.log(appSamples.getItem("app1"));
    // const app1 = appSamples.getItem("app1");
    // const app = app1.app;
    // app1.render();
  });
}
