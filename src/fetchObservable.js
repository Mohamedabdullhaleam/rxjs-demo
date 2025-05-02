import { Observable, share } from "rxjs";

const URL = "https://jsonplaceholder.typicode.com/todos";

function fetchData(URL) {
  return new Observable((obs) => {
    const res = fetch(URL)
      .then((response) => {
        const res2 = response.json();
        return res2;
      })
      .then((res) => {
        obs.next(res);
        obs.complete();
      })
      .catch((err) => {
        console.log(obs.error);
      });
  });
}

const observable = fetchData(URL);
const instance = observable.pipe(share());
instance.subscribe((val) => {
  console.log(val);
});
