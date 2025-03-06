// const dateString = "2025-03-03T00:00:00.000";
// const date = new Date(dateString);

// console.log(date);

const aray = "";
const link = "https://data.cityofnewyork.us/resource/k46n-sa2m.json?$limit=500";
async function s() {
  let a = await fetch(link);
  let b = await a.json();
  aray = b;
}
s();
aray.sort();
console.log(aray);
