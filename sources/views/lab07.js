import { JetView } from "webix-jet";
import { getClients, getUsers } from "../models/customers";

/**
 * lab07
 * data parsing
 * component + DataCollection sync
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

// 컴포넌트와 데이터컬렉션 동기화
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
    view.sync(dataCollectionW);
  }
  removeRecord(id) {
    dataCollection.remove(id);
  }
}

// DataCollection
const userData = getUsers().then((user) => {
  return new webix.DataCollection({
    data: user,
  });
});

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
    // const data = getUsers();
    // console.log(data);
    // console.log(dataCollection);
    // view.parse(getClients());
    // view.sync(dataCollection());
    // view.sync(dataCollection());
    view.sync(userData);
    // dataCollection().then((a) => {
    //   console.log(a);
    //   view.sync(a.value);
    // });
  }
}

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

export default class lab07 extends JetView {
  config() {
    return {
      rows: [dataParseView, dataSyncView, dataSyncView2],
    };
  }
}
