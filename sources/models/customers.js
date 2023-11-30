export const data = [
  { name: "John Doe", email: "john@example.com", phone: "555-1234" },
  { name: "Jane Smith", email: "jane@example.com", phone: "555-5678" },
  { name: "Bob Johnson", email: "bob@example.com", phone: "555-9876" },
  { name: "Alice Brown", email: "alice@example.com", phone: "555-4321" },
  { name: "Charlie Wilson", email: "charlie@example.com", phone: "555-8765" },
  { name: "Eva Davis", email: "eva@example.com", phone: "555-2345" },
  { name: "Frank Miller", email: "frank@example.com", phone: "555-6543" },
  { name: "Grace Lee", email: "grace@example.com", phone: "555-7890" },
  { name: "Henry Turner", email: "henry@example.com", phone: "555-3456" },
  { name: "Ivy Garcia", email: "ivy@example.com", phone: "555-8765" },
];

export function getClients2() {
  return data;
}

export function getClients() {
  return new Promise((resolve, reject) => {
    webix.ajax("https://dummyjson.com/users", (_, data) => {
      if (data) {
        resolve(data.json());
      } else {
        reject("Error fetching clients data");
      }
    });
  });

  //   return webix.ajax("https://dummyjson.com/users", (_, data) => {
  //     // console.log(data.json());
  //     return data.json();
  //   });

  // json() 처리해야 읽어와 짐
  //   webix
  //     .ajax()
  //     .get("https://docs.webix.com/samples/server/packages", (text, data) => {
  //       console.log(data.json());
  //       // expect(data.json().length).to.be.above(0);
  //       // done();
  //     });

  //   webix
  //     .ajax(
  //       "https://docs.webix.com/samples/server/packages",
  //       function (text, data) {
  //         console.log(data.json());
  //       }
  //     );
  //   webix
  //     .ajax()
  //     .get(
  //       "https://jsonplaceholder.typicode.com/todos/1",
  //       function (text, data, xhr) {
  //         // 성공 시 실행되는 콜백 함수
  //         console.log(data); // 여기에서 데이터가 출력됩니다.
  //         processData(data); // 데이터 처리 함수 호출
  //       }
  //     )
  //     .fail(function (xhr) {
  //       // 실패 시 실행되는 콜백 함수
  //       console.error("AJAX 요청 실패", xhr);
  //     });

  //   function processData(data) {
  //     // 데이터 처리 로직을 이곳에 작성하세요
  //     console.log("Processing data:", data);
  //   }

  //   webix
  //     .ajax()
  //     .headers({ "Content-Type": "application/json" })
  //     .get("https://dummyjson.com/users", "")
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .fail((error) => {
  //       const response = JSON.parse(error.response);
  //       console.log(response);
  //     })
  //     .finally(() => {});

  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error("Fetch 오류:", error);
  //     });
}
