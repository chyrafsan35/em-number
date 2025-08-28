1. getElementById is used for selecting Id's where getElementsByClassName is used for selecting classes. Also there can be similar elements with same classes, so you need to loop for individual usage. But Id's are unique. 

querySelector selects first element that matches a CSS selector where querySelectorAll selects all elements with same css selector. Also querySelectorAll returns a node list where querySelector returns single element.

2. To create we use - document.createElement()
  To insert a new element into the DOM we use - appendChild()

3. Event Bubbling is a process of occuring  functions/events to elements and it goes upwards simultaneously. Like it starts from child and then goes up to parents, grandparents etc.

It works like this - When you click/hit an event , it occurs to the corresponding element and then bubbles up to higher or parent orders until it reaches document.

4. So if you have some children and you don't wanna create events for individual child and so you target this with parent and it does the rest , therefore the process is Event Delegation.

It works like this - when an event happens on a child element, it bubbles up to parent element. Then it detects the corresponding child element and which triggered the event and therefore handles the event for appropriate child.

5. preventDefault() does not stop bubbling stopPropagation() where stops the event from bubbling up. Also stopPropagation() does not prevent default behaviour where preventDefault() does the opposite.