const JSXX = <h1>Hello JSX!</h1>;
const JSXx = <div>
<h1></h1>
<p></p>
<ul>
<li></li>
<li></li>
<li></li>

</ul>

</div>

const JSXxx = (
    {/*
    <div>
      <h1>This is a block of JSX</h1>
      <p>Here's a subtitle</p>
    </div>
    */}
  );


  const JSXs = (

    <div>
    
      <h1>This is a block of JSX</h1>
      <p>Here's a subtitle</p>
      {/* */} 
    </div>
    
    
  );


  const JSX = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  // Add your code below this line
  
  ReactDOM.render(JSX, document.getElementById('challenge-node'));


  //Define a html class
  const JSXh = (
    <div className="myDiv">
      <h1>Add a class to this div</h1>
    </div>
  );


  //self closing JSX Tags
  const JSXS = (
    <div>
      <h2>Welcome to React!</h2> <br />
      <p>Be sure to close all tags!</p>
      <hr />
    </div>
  );