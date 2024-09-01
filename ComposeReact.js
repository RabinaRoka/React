// Functional component that returns a list of fruits
const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };
  
  // Functional component that should return the TypesOfFruit component
  const Fruits = () => {
    return (
      <div>
        {/* Return the TypesOfFruit component */}
        <TypesOfFruit />
      </div>
    );
  };
  
  // Class component that should return the Fruits component
  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          {/* Return the Fruits component */}
          <Fruits />
        </div>
      );
    }
  }
  