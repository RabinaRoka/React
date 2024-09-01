class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      // Change code below this line
      return (
         <div>
      <h1>Hello React! </h1>
      </div>
      );
     
  
  
  
      // Change code above this line
    }
  };



  //component with composition

  const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };
  
  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>I am the Parent Component</h1>
          {/* Second child: ChildComponent */}
          <ChildComponent />
        </div>
      );
    }
  };