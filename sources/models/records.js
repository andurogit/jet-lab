const dummyDataCall = () => {
  new Promise((resolve, reject) => {
    webix.ajax("https://dummyjson.com/users", (_, data) => {
      if (data) {
        resolve(data.json().users);
      } else {
        reject("Error fetching clients data");
      }
    });
  });
};

export const data = new webix.DataCollection({
  // url: "https://dummyjson.com/users",'
  url: dummyDataCall,
});

export function getData() {
  return webix
    .ajax("https://dummyjson.com/users")
    .then((data) => data.json().users);
}

export function getStorageData() {
  return webix.storage.local.get("data");
}

// 이벤트가 일어날 때마다 호출???
// 그냥 이 3개 파리미터가 정해져 있는 것이였다.
export function saveData(id, operation, data) {
  console.log("Call SaveData function!!");
  if (operation == "update") return webix.ajax().post("save url", data);
  if (operation == "add") return webix.ajax().post("add url", data);
}
