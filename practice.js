var groceryItems = ['apples', 'oranges','bananas'];

class GroceryListItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      hovering: false,
      clicked: false
    };
  }

  onClick () {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  onMouseEnter () {
    this.setState({
      hovering: true
    });
  }

  onMouseLeave () {
    this.setState({
      hovering: false
    });
  }

  render () {
    var style = {
      'fontWeight': this.state.hovering ? 'bold' : 'normal',
      'textDecoration': this.state.clicked ? 'line-through' : 'none'
  };

    return (
      <li
        style={style}
        onMouseEnter={this.onMouseEnter.bind(this)}
        onMouseLeave={this.onMouseLeave.bind(this)}
        onClick={this.onClick.bind(this)}>
        {this.props.items}
      </li>
      )
  }
}


var GroceryList = () => (
  <ul>
    {groceryItems.map(items =>
      <GroceryListItem items={items} />
      )}
  </ul>
);


var App = () => (
  <div>
    <h3>GroceryList</h3>
    <GroceryList />
  </div>
  )

ReactDOM.render(<App />, document.getElementById('app'));
