class StatefulComponent extends React.Component {
    constructor(props) {
      super(props);
      // Initialize state with firstName property
      this.state = {
        firstName: 'Rabina' // Replace 'YourName' with your actual name
      };
    }
  
    render() {
      return (
        <div>
          <h1>{this.state.firstName}</h1>
        </div>
      );
    }
  }

  
  //another state
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      return (
        <div>
          { /* Change code below this line */ }
         <h1>{this.state.name}</h1>
  
          { /* Change code above this line */ }
        </div>
      );
    }
  };


  //render state another method
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      // Change code below this line
      const name=this.state.name
  
      // Change code above this line
      return (
        <div>
          { /* Change code below this line */ }
          <h1>{name}</h1>
  
  
          { /* Change code above this line */ }
        </div>
      );
    }
  };

  //setSate
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'Initial State'
      };
      // Bind handleClick method to this component
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      // Update the component state using this.setState()
      this.setState({
        name: 'React Rocks!'
      });
    }
  
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>Click Me</button>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  }

  
  //another state
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: "Hello"
      };
      // Bind handleClick method to this component
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState({
        text: "You clicked!"
      });
    }
  
    render() {
      return (
        <div>
          {/* Add click handler to the button */}
          <button onClick={this.handleClick}>Click Me</button>
          <h1>{this.state.text}</h1>
        </div>
      );
    }
  }
  