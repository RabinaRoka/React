class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "CamperBot"
      };
    }
    render() {
      return (
        <div>
          // Here we will call this.state.name in order to pass the value of
          CamperBot // to the NavBar component
          <Navbar name={this.state.name} />
        </div>
      );
    }
  }
  
  class Navbar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          // Since we passed in the CamperBot state value into the the NavBar
          component above // the h1 element below will render the value passed
          from state
          <h1>Hello, my name is: {this.props.name}</h1>
        </div>
      );
    }
  }