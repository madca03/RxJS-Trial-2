import { Observable } from 'rxjs';
import { share } from 'rxjs/operators'

const observable = Observable.create((observer:any) => {
  try {
    observer.next('Hey guys!');
    observer.next('How are you');
    setInterval(() => {
      observer.next('I am good');
    }, 2000);
  } catch (err) {
    observer.error(err)
  }
}).pipe(share());

const observer = observable.subscribe(
  (x:any) => addItem(x),
  (error:any) => addItem(error),
  () => addItem('Completed')
);

setTimeout(() => {
  const observer2 = observable.subscribe(
    (x:any) => addItem('Subscriber 2: ' + x)
  )
}, 1000);

function addItem(val:any) {
  const node = document.createElement("li");
  const textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}