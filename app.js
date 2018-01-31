// var Milk = () => (
//   <li>Milk</li>
// );
//
// var Eggs = () => (
//   <li>Eggs</li>
// );

// var GroceryList = () => (
//   <ul>
//     <GroceryListItem groceryItems={['Milk']} />
//     <GroceryListItem groceryItems={['Eggs']} />
//   </ul>
// );

// var GroceryListItem = (props) => (
//   <li>{props.groceryItems}</li>
// );

class GroceryListItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      hovered: false
    }
  }

  onGroceryListItemHover (){
    this.setState({
      hovered: !this.state.hovered
    })
  }

  render(){
    var style = {
      fontWeight: this.state.hovered ? 'bold' : 'normal'
    }

    return (
      <li style={style} onMouseOver={this.onGroceryListItemHover.bind(this)}>{this.props.groceryItem}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(groceryItem =>
      <GroceryListItem groceryItem={groceryItem} />
    )}
  </ul>
);

ReactDOM.render(<GroceryList groceryItems={["Milk", "Eggs"]}/>, document.getElementById("app"));
