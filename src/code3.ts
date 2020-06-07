import { Observable, fromEvent } from 'rxjs';

const observable = fromEvent(document, 'mousemove')

setTimeout(() => {
  const subscription = observable.subscribe(
    (x:any) => addItem(x)
  )
}, 2000)


function addItem(val:any) {
  const node = document.createElement("li");
  const textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}