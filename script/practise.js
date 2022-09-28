const obj = {
  count: 25,
  next: "google.com",
  previous: "nodejs.org",
  results: [
    { name: "Theresa", age: 15, height: 165, gender: "female" },
    { name: "Freke", age: 17, height: 167, gender: "female" },
    { name: "Oluwaseyi", age: 20, height: 170, gender: "female" },
  ],
};

// console.log(key);
// console.log(obj.results[0].name);
// console.log(obj.results[1].name);
// console.log(obj.results[2].name);

// for (let i = 0; i < obj.results.length; i++) {
//   console.log(
//     obj.results[i].name,
//     obj.results[i].height,
//     obj.results[i].gender
//   );
// }

const myWebApi = async () => {
  const response = await fetch("https://swapi.dev/api/people");
  const data = await response.json();
  for (let val of data.results) {
    console.log(val.name, val.height, val.mass);
  }
  return true;
};
myWebApi();

// const myWebApi = () => {
//   let data = fetch("https://swapi.dev/api/people")
//     .then((res) => res.json())
//     .then((res) => {
//       data = res;
//       return data.results;
//     });
//   return data;
// };
// myWebApi();
