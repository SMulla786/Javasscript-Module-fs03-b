# DOM Contd.

# At the end of the session , you will be able to : 
- Understand the different types of events that can occur in a web application, including user interactions such as mouse clicks and keyboard input.

- Implement event listeners in JavaScript using the addEventListener method.
- Implement different types of event handlers in JavaScript, including onchange, onkeypress, onmouseenter, onmouseleave, and onmouseover.
- Understand how to use event handlers to create dynamic and interactive web applications that respond to user interactions.
## onchange:

- The onchange event is triggered when the value of an input element is changed. This event is commonly used in forms when you want to execute some code when the user selects a new option or enters a new value in a form field. The onchange event is supported by most HTML elements, including text fields, select boxes, and checkboxes.

Here is an example of how you can use the onchange event in HTML:

```js
<!DOCTYPE html>
<html>
<head>
    <title>onchange Example</title>
</head>
<body>
    <label for="myInput">Enter a value:</label>
    <input id="myInput" type="text">

    <p id="result"></p>

    <script>
        const myInput = document.getElementById("myInput");
        const result = document.getElementById("result");

        myInput.onchange = function() {
            result.textContent = "You entered: " + myInput.value;
        };
    </script>
</body>
</html>

```

In this example, we have an HTML input element with an id of myInput. We use JavaScript to attach an onchange event listener to the input using the onchange property.

When the user enters a value in the input field and then moves the focus away from the field (either by clicking outside of it or by pressing the tab key), the onchange event will be fired. In this example, the event listener function will be called, and it will set the content of the result element to display the value entered in the input field.

You can use the onchange event to perform a variety of tasks, such as updating the content of other elements on the page, submitting a form, or triggering an AJAX request to fetch data from the server.

## onkeypress:

The onkeypress event is triggered when a key is pressed down and held down on the keyboard. This event is commonly used in forms when you want to execute some code when the user types a character into a text field. The onkeypress event is supported by most HTML elements, including text fields, textareas, and contenteditable elements.

Here is an example of how you can use the onkeypress event in HTML:

```js
<!DOCTYPE html>
<html>
<head>
    <title>onkeypress Example</title>
</head>
<body>
    <input type="text" id="inputField">

    <script>
        const inputField = document.getElementById("inputField");

        inputField.onkeypress = function(event) {
            // Get the pressed key code
            const keyCode = event.keyCode || event.which;

            // Check if the pressed key is "Enter"
            if (keyCode === 13) {
                console.log("Enter key was pressed.");
            }
        };
    </script>
</body>
</html>

```

In this example, we have an HTML input field with an id of inputField. We use JavaScript to attach an onkeypress event listener to the input field using the onkeypress property.

When the user presses a key while the input field has focus, the event listener function will be called with the event object as an argument. The event object contains information about the event, including the code of the key that was pressed.

We get the key code from the event object using the keyCode property (which is not supported in all browsers, so we also check the which property as a fallback). Then we check if the pressed key is "Enter" (which has a key code of 13). If it is, we log a message to the console.

This is just a simple example, but you can use the onkeypress event to perform a variety of tasks, such as validating user input, navigating between form fields, or triggering an action when a specific key combination is pressed.

## onmouseenter:

The onmouseenter event is triggered when the mouse pointer enters the boundaries of an HTML element. This event is commonly used to change the appearance of an element when the user hovers over it with the mouse. The onmouseenter event is supported by most HTML elements.

Here is an example of how you can use the onmouseenter event in HTML:

```js
<!DOCTYPE html>
<html>
<head>
    <title>onmouseenter Example</title>
</head>
<body>
    <div id="myDiv" style="width: 200px; height: 200px; background-color: gray;"></div>

    <script>
        const myDiv = document.getElementById("myDiv");

        myDiv.onmouseenter = function() {
            myDiv.style.backgroundColor = "red";
        };

        myDiv.onmouseleave = function() {
            myDiv.style.backgroundColor = "gray";
        };
    </script>
</body>
</html>

```

In this example, we have an HTML div element with an id of myDiv. We use JavaScript to attach an onmouseenter event listener to the div using the onmouseenter property.

When the mouse pointer enters the boundaries of the div element, the event listener function will be called. In this example, the event listener function changes the background color of the div to red.

We also attach an onmouseleave event listener to the div using the onmouseleave property. When the mouse pointer leaves the boundaries of the div element, the event listener function will be called, and we reset the background color to gray.

This is just a simple example, but you can use the onmouseenter event to perform a variety of tasks, such as changing the appearance of an element, displaying a tooltip, or triggering an animation.

## onmouseover:

The onmouseover event is similar to the onmouseenter event, but it is triggered when the mouse pointer enters the boundaries of an HTML element and also when the mouse pointer moves over the element. This event is commonly used to change the appearance of an element when the user hovers over it with the mouse. The onmouseover event is supported by most HTML elements.

Here is an example of how you can use the onmouseover event in HTML:

```js
<!DOCTYPE html>
<html>
<head>
    <title>onmouseover Example</title>
</head>
<body>
    <div id="myDiv" style="width: 200px; height: 200px; background-color: gray;"></div>

    <script>
        const myDiv = document.getElementById("myDiv");

        myDiv.onmouseover = function() {
            myDiv.style.backgroundColor = "red";
        };

        myDiv.onmouseout = function() {
            myDiv.style.backgroundColor = "gray";
        };
    </script>
</body>
</html>

```

In this example, we have an HTML div element with an id of myDiv. We use JavaScript to attach an onmouseover event listener to the div using the onmouseover property.

When the mouse pointer moves over the div element, the event listener function will be called. In this example, the event listener function changes the background color of the div to red.

We also attach an onmouseout event listener to the div using the onmouseout property. When the mouse pointer moves out of the div element, the event listener function will be called, and we reset the background color to gray.

This is just a simple example, but you can use the onmouseover event to perform a variety of tasks, such as displaying a tooltip, triggering an animation, or changing the appearance of an element.

## onmouseleave:

The onmouseleave event is triggered when the mouse pointer leaves the boundaries of an HTML element. This event is commonly used to change the appearance of an element back to its original state when the user stops hovering over it with the mouse. The onmouseleave event is supported by most HTML elements.

Here is an example of how you can use the onmouseleave event in HTML:

```js
<!DOCTYPE html>
<html>
<head>
    <title>onmouseleave Example</title>
</head>
<body>
    <div id="myDiv" style="width: 200px; height: 200px; background-color: gray;"></div>

    <script>
        const myDiv = document.getElementById("myDiv");

        myDiv.onmouseenter = function() {
            myDiv.style.backgroundColor = "red";
        };

        myDiv.onmouseleave = function() {
            myDiv.style.backgroundColor = "gray";
        };
    </script>
</body>
</html>
```

In this example, we have an HTML div element with an id of myDiv. We use JavaScript to attach an onmouseenter event listener to the div using the onmouseenter property.

When the mouse pointer enters the boundaries of the div element, the event listener function will be called. In this example, the event listener function changes the background color of the div to red.

We also attach an onmouseleave event listener to the div using the onmouseleave property. When the mouse pointer moves out of the div element, the event listener function will be called, and we reset the background color to gray.

This is just a simple example, but you can use the onmouseleave event to perform a variety of tasks, such as changing the appearance of an element, hiding a tooltip, or triggering an animation.
