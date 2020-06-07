import { Observable } from 'rxjs';

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
});

const observer = observable.subscribe(
  (x:any) => addItem(x),
  (error:any) => addItem(error),
  () => addItem('Completed')
);

const observer2 = observable.subscribe(
  (x:any) => addItem(x)
);

observer.add(observer2);

setTimeout(() => {
  observer.unsubscribe()
}, 6001);

function addItem(val:any) {
  const node = document.createElement("li");
  const textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}