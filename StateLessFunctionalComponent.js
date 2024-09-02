const CurrentDate = (props) => {
    return (
      <div>
        { /* Change code below this line */ }
        <p>The current date is: {props.date}</p>
        { /* Change code above this line */ }
      </div>
    );
  };
  
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          { /* Change code below this line */ }
          <CurrentDate date={Date()} />
          { /* Change code above this line */ }
        </div>
      );
    }
  };
  

  //using this keyword
  class App extends React.Component {
    render() {
      return (
        <div>
          { /* Change code below this line */ }
          <Welcome name="John" />
          { /* Change code above this line */ }
        </div>
      );
    }
  }
  
  class Welcome extends React.Component {
    render() {
      return (
        <div>
          { /* Change code below this line */ }
          <p>Hello, <strong>{this.props.name}</strong>!</p>
          { /* Change code above this line */ }
        </div>
      );
    }
  }

  
  //review
  class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper/>
        </div>
      );
    }
  };
  // Change code below this line
  const Camper = props => <p>{props.name}</p>;
  
  Camper.defaultProps = {
    name: "CamperBot"
  };
  
  Camper.propTypes = {
    name: PropTypes.string.isRequired
  };