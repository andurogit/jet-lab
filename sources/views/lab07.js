import { JetView } from "webix-jet";
import { getClients, getUsers } from "../models/customers";
import gridData from "../models/lab07/gridData";

/**
 * lab07
 * data parsing
 * component + DataCollection sync
 * sharedDat
 *
 * 컴포넌트에서 데이터를 사용하려면 init() 함수에서 데이터를 파싱한다.
 */

// const dataCollection = new webix.DataCollection(getClients());

async function dataCollection() {
  const clientsData = await getClients();
  console.log(clientsData);
  return new webix.DataCollection(clientsData);
}

const dataCollectionW = new webix.DataCollection({
  url: "https://docs.webix.com/samples/server/films",
  save: "rest->//docs.webix.com/samples/server/films",
});

// 02. 컴포넌트와 데이터컬렉션 동기화
class dataSyncView extends JetView {
  config() {
    return {
      id: "sync01",
      view: "datatable",
      autoConfig: true,
      editable: true,
    };
  }
  init(view) {
    // console.log(dataCollection);
    // view.parse(getClients());
    // view.sync(dataCollection());
    // 이거는 정적데이터기 때문에 된다.
    view.sync(dataCollectionW);
  }
  removeRecord(id) {
    dataCollection.remove(id);
  }
}

// DataCollection sample Variable is not working. Not To Using
// const userData = getUsers().then((user) => {
//   return new webix.DataCollection({
//     data: user,
//   });
// });

class dataSyncView2 extends JetView {
  config() {
    return {
      id: "sync02",
      view: "datatable",
      autoConfig: true,
      editable: true,
    };
  }
  // fail
  init(view) {
    getUsers().then((userData) => {
      // 이거는 비동기 데이터기 때문에 sync를 쓰면 안된다.
      view.parse(userData);
    });

    // const data = getUsers();
    // console.log(data);
    // console.log(dataCollection);
    // view.parse(getClients());
    // view.sync(dataCollection());
    // view.sync(dataCollection());

    // dataCollection().then((a) => {
    //   console.log(a);
    //   view.sync(a.value);
    // });
  }
}

// 01. Data parse
class dataParseView extends JetView {
  config() {
    return {
      view: "datatable",
      autoConfig: true,
      editable: true,
    };
  }
  init(view) {
    view.parse(getClients());
  }
}

// 03. sharedData
class sharedData extends JetView {
  config() {
    return {
      view: "datatable",
      localId: "grid",
      autoConfig: true,
    };
  }

  // 데이터 구조를 알아야 넣을수 있긴한데 잘 동작한다.
  init() {
    this.$$("grid").sync(gridData);
  }
}

// wrong example
// class sharedDataFormView extends JetView {
//   config() {
//     return {
//       view: "form",
//       localId: "form",
//       // elements: [...]
//     };
//   }
//   init() {
//     this.$$("form").setValues(gridData.getItem(id));
//   }
// }

export default class lab07 extends JetView {
  config() {
    return {
      rows: [
        dataParseView,
        dataSyncView,
        dataSyncView2,
        sharedData,
        // sharedDataFormView,
      ],
    };
  }
}
