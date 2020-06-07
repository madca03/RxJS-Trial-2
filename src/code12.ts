import { Observable, Subject, interval } from 'rxjs';
import { skipUntil } from 'rxjs/operators'

const observable1 = Observable.create((data:any) => {
  let i = 1;
  setInterval(() => {
    data.next(i++)
  }, 1000)
});

const observable2 = new Subject();

setTimeout(() => {
  observable2.next('Hey!')
}, 5000);

const newObs = observable1.pipe(skipUntil(observable2));

newObs.subscribe(
  (x:any) => addItem(x)
);


function addItem(val:any) {
  const node = document.createElement("li");
  const textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}