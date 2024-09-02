class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          {/* Change code below this line */}
          <Fruits />
          <Vegetables />
          {/* Change code above this line */}
        </div>
      );
    }
  }
  
  // Change code below this line
  ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));

  
  ////next Mycomponent from scratch
  // Change code below this line

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render(){
    return (
      <div>
      <h1>My First React Component!</h1>
      </div>
    );
   }
  }
  
  ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));


  //more props
  const List = (props) => {
    // Ensure props.tasks is an array and render as comma-separated list
    return <p>{Array.isArray(props.tasks) ? props.tasks.join(", ") : "No tasks available"}</p>;
  };
  
  class ToDo extends React.Component {
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          {/* Pass an array with at least 2 items */}
          <List tasks={["walk dog", "workout"]} />
          <h2>Tomorrow</h2>
          {/* Pass an array with at least 3 items */}
          <List tasks={["buy groceries", "clean the house", "read a book"]} />
        </div>
      );
    }
  }
  