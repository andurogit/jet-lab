const data = webix
  .ajax("https://dummyjson.com/users")
  .then((data) => data.json().users);

export function sharedData(name) {
  return data.then((a) => {
    console.log(`sharedData ${a}`);
    switch (name) {
      case "grid":
        // return a.grid;
        return a;
      default:
        return [];
    }
  });
}
