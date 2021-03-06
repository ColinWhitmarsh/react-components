var groceryItems = ['oranges', 'grapes'];

class GroceryListItem extends React.Component {
  constructor(props) {
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

  onMouseEnter() {
    this.setState({
      hovering: true
    });
  }

  onMouseLeave() {
    this.setState({
      hovering: false
    });
  }

  render() {
    var style = {
      fontWeight: this.state.hovering ? 'bold' : 'normal'
    };

    return( 
      <li 
        style={style} 
        onMouseLeave={this.onMouseLeave.bind(this)}
        onMouseEnter={this.onMouseEnter.bind(this)}
        onClick={this.onClick.bind(this)}>
        {this.props.items}
      </li>
    )
  }
};


var GroceryList = () => (
  <ul>
    {groceryItems.map(items =>
      <GroceryListItem items={items} />
      )}
  </ul>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));

