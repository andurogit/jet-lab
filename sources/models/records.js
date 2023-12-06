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
