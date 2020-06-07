import { ReplaySubject } from 'rxjs';

const subject = new ReplaySubject(30, 500);

subject.subscribe(
  (data) => addItem('Observer 1: ' + data),
  (err) => addItem(err),
  () => addItem('Observer 1 Completed')
);

let i = 1;
const int = setInterval(() => subject.next(i++), 100);

setTimeout( () => {
  const observer2 = subject.subscribe(
    (data) => addItem('Observer 2: ' + data)
  )
}, 500);

function addItem(val:any) {
  const node = document.createElement("li");
  const textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}