import { from } from 'rxjs';
import { pluck } from 'rxjs/operators'

const observable = from([
  { first: 'Gary', last: 'Simon', age : '34'},
  { first: 'Jane', last: 'Daniel', age : '23'},
  { first: 'John', last: 'Justin', age : '40'},
]).pipe(pluck('first'))
  .subscribe((x:any) => addItem(x))


function addItem(val:any) {
  const node = document.createElement("li");
  const textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}