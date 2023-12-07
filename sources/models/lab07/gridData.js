import { sharedData } from "./sharedData";

// 기본 생성
const gridData = new webix.DataCollection();

// 기본 데이터 인경우
gridData.parse(sharedData("grid"));

// promise 인 경우
// let data = sharedData("grid");

// data.then((d) => {
//   gridData.parse(d.value);
// });

export default gridData;
