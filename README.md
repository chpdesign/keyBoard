keyBoard
========

An additional class for manage the key events in javascript

Fast example:
========
```javascript
var keyboard = new keyBoard(/*undefined*/); /* Automatically binds to the document. */
console.log(keyboard); /* return with the keyboard object */
keyboard.addEvent(keyboard.events.KeyDown,function(){
	console.log(arguments); /* see the arguments */
});
console.log(keyboard.getLast()); /* get the last action with other stuff */
```
Methods & others
========
1. events

<table>
<tr>
  <th></th><th>Info</th>
</tr>
<tr>
  <td>KeyDown</td><td>When a key is down.</td>
</tr>
<tr>
  <td>KeyUP</td><td>When a key is up.</td>
</tr>
<tr>
  <td>KeyPress</td><td>When a key is press.</td>
</tr>
</table>

2. methods

<table>
<tr>
  <th></th><th>Info</th>
</tr>
<tr>
  <td>addEvent(callback) : int</td><td>Bind an event to an action.</td>
</tr>
<tr>
  <td>removeEvent(int) : void</td><td>unBind an event.</td>
</tr>
<tr>
  <td>getLast() : {...data...}</td><td>Returns with the last event with some extra data.</td>
</tr>
</table>

Examples
=======
```javascript
/* returns int like this
12445765678 it's a uniqe int for indetify the events
*/
console.log(keyboard.addEvent(keyboard.events.KeyDown,function(){});
/* remove the event with id */
console.log(keyboard.removeEvent(keyboard.events.KeyDown,12445765678));
/* returns an object like this:
{
  alt:false,
  ctrl:false,
  event:undefined,
  key:undefined,
  keyCode:undefined,
  lastEvent: undefined,
  shift: false,
}
*/
console.log(keyboard.getLast());
/* OR an other returns
{
  alt:false,
  ctrl:false,
  event:"KeyUp",
  key:"",
  keyCode:16,
  lastEvent:keyup charCode=0, keyCode=16,
  shift:true
}
*/
```
