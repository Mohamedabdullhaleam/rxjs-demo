import { Observable } from "rxjs";

// const promise = new Promise((resolve, reject) => {
//   resolve();
// });
// promise.then(() => {
//   console.log("promise resolved");
// });

// const observable = new Observable(callBack);
// observable.subscribe();

// function callBack() {
//   console.log("haleem speaking");
// }

url = "https://jsonplaceholder.typicode.com/posts";

const observable = new Observable((obs) => {
  obs.next(1);
  obs.fetch(url);
  obs.next(2);
});

console.log("oneeee");
observable.subscribe((val) => {
  console.log(val);
});
console.log("twoooo");
