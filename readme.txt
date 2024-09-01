###React is an Open Source view library created and maintained by Facebook. It's a great tool to render the User Interface (UI) of modern web applications.


###React uses a syntax extension of JavaScript called JSX that allows you to write HTML directly within JavaScript

###However, because JSX is not valid JavaScript, JSX code must be compiled into JavaScript. The transpiler Babel is a popular tool for this process.

##To put comments inside JSX, you use the syntax {/* */} to wrap around the comment text.

##With React, we can render this JSX directly to the HTML DOM using React's rendering API known as ReactDOM.


###One key difference in JSX is that you can no longer use the word class to define HTML classes. This is because class is a reserved word in JavaScript. Instead, JSX uses className


###In JSX, the rules are a little different. Any JSX element can be written with a self-closing tag, and every element must be closed. The line-break tag, for example, must always be written as <br /> in order to be valid JSX that can be transpiled.


##There are two ways to create a React component. The first way is to use a JavaScript function. Defining a component in this way creates a stateless functional component. The concept of state in an application will be covered in later challenges. For now, think of a stateless component as one that can receive data and render it, but does not manage or track changes to that data


###The other way to define a React component is with the ES6 class syntax. In the following example, Kitten extends React.Component:

##The other way to define a React component is with the ES6 class syntax. In the following example, Kitten extends React.Component:

##The constructor is a special method used during the initialization of objects that are created with the class keyword. It is best practice to call a component's constructor with super, and pass props to both. This makes sure the component is initialized properly.

##To compose these components together, you could create an App parent component which renders each of these three components as children. To render a component as a child in a React component, you include the component name written as a custom HTML tag in the JSX. For example, in the render method you could write: