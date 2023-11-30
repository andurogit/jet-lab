import { JetView } from "webix-jet";

/*
    window body 는 sample 활용
    버튼을 사용하여 window 와 popup 을 띄우는 테스트
    this 의 사용 방법과 주의사항
*/

// body layout
// this 사용 불가.
// const lab03Body = {
//   margin: 10,
//   padding: 0,

//   rows: [
//     {
//       cols: [
//         {},
//         {
//           view: "button",
//           width: 220,
//           value: "Window Open",
//           //click: function () {
//           click: () => {
//             webix.message("Click this");
//             this.win1.showWin();
//           },
//         },
//         {
//           view: "button",
//           width: 220,
//           value: "Window Hide",
//           click: () => {
//             webix.message("Click this");
//             this.win1.showWin();
//           },
//         },
//         {
//           view: "button",
//           width: 230,
//           value: "Popup Open",
//           click: () => {
//             webix.message("Click this");
//           },
//         },
//       ],
//     },
//   ],
// };

export default class Lab03 extends JetView {
  config() {
    return {
      rows: [
        {
          view: "scrollview",
          // body: lab03Body,
          body: {
            margin: 10,
            padding: 0,

            rows: [
              {
                cols: [
                  {},
                  {
                    view: "button",
                    width: 220,
                    value: "Window Open",
                    //click: function () {
                    click: () => {
                      webix.message("Click this");
                      this.win1.showWin();
                    },
                  },
                  {
                    view: "button",
                    width: 220,
                    value: "Window Hide",
                    click: () => {
                      webix.message("Click this");
                      this.win1.hideWin();
                    },
                  },
                  {
                    view: "button",
                    width: 230,
                    value: "Popup Open",
                    click: () => {
                      webix.message("Click this");
                      this.win2.show();
                    },
                  },
                ],
              },
            ],
          },
        },
        // {},
        {
          view: "button",
          value: "windowOpen",
          // width: 200,
          click: () => {
            webix.message("Window Open");
            this.win1.showWin();
          },
        },
      ],
    };
  }
  init() {
    console.log("Window lab03");
    this.win1 = this.ui(WindowSample);
    // this.win1.showWin();
    this.win2 = this.ui(win2);
  }
}

class WindowSample extends JetView {
  config() {
    return {
      view: "window",
      position: "center", // 위치 중앙으로
      body: {
        view: "carousel",
        width: 464,
        height: 275,
        cols: [
          {
            css: "image",
            template: img,
            data: {
              src: "http://docs.webix.com/samples/26_carousel/imgs/image001.jpg",
            },
          },
          {
            css: "image",
            template: img,
            data: {
              src: "http://docs.webix.com/samples/26_carousel/imgs/image002.jpg",
            },
          },
        ],
      },
    };
  }
  showWin(target) {
    // show 메소드는 Root 에서만 수행할 수 있다?
    this.getRoot().show(target);
  }
  hideWin(target) {
    this.getRoot().hide(target);
  }
}

function img(obj) {
  return (
    '<img src="' + obj.src + '" class="content" ondragstart="return false"/>'
  );
}

// popup view
const win2 = {
  view: "popup",
  position: "center",
  body: {
    template: "Popup Text",
  },
};
