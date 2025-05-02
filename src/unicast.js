import { Observable, pipe, share, shareReplay } from "rxjs";

const callBack = (obs) => {
  obs.next(Math.random());

  obs.next(2);
  obs.next(1);
};

// multicasttttt

const obs = new Observable(callBack);
const onlyOneCast = obs.pipe(share());
const multiCast = obs.pipe(shareReplay());

multiCast.subscribe((val) => {
  console.log(val);
  console.log("ammar");
});

multiCast.subscribe((val) => {
  console.log(val);
  console.log("mohamed");
});
