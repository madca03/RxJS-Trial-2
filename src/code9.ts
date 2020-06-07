import { merge, Observable } from 'rxjs';

const observable = Observable.create((observer:any) => {
  observer.next('Hey guys')
});

const observable2 = Observable.create((observer:any) => {
  observer.next('How is it going')
});


const newObs = merge(observable, observable2);

newObs.subscribe((x:any) => addItem(x));

function addItem(val:any) {
  const node = document.createElement("li");
  const textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}