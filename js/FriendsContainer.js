// https://tylermcginnis.com/reactjs-tutorial-a-comprehensive-guide-to-building-
// apps-with-react/
import React from 'react';
import PropTypes from 'prop-types';

export default class FriendsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Tyler Mcginnis',
      friends: ['Jake Lingwall', 'Sarah Drasner', 'Merrick Christensen']
    };
    this.addFriend = this
      .addFriend
      .bind(this);
  }
  componentDidMount() {
    console.log('FriendsContainer componentDidMount');
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('FriendsContainer getDerivedStateFromProps');
    return prevState;
  }
  componentWillUnmount() {
    console.log('never componentWillUnmount');
  }
  addFriend(friend) {
    console.log(friend, typeof(friend))
    this.setState((state) => ({
      friends: state
        .friends
        .concat([friend])
    }));
  }
  render() {
    return (
      <div>
        <h3>Name: {this.state.name}</h3>
        <AddFriend addNew={this.addFriend}/>
        <ShowList names={this.state.friends}/>
      </div>
    )
  }
}

class AddFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newFriend: ''
    };
    this.updateNewFriend = this
      .updateNewFriend
      .bind(this);
    this.handleAddNew = this
      .handleAddNew
      .bind(this);
  }
  updateNewFriend(e) {
    this.setState({newFriend: e.target.value});
  }
  handleAddNew() {
    this
      .props
      .addNew(this.state.newFriend);
    this.setState({newFriend: ''})
  }
  componentDidMount() {
    console.log('AddFriend componentDidMount');
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('AddFriend getDerivedStateFromProps');
    return prevState;
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.newFriend} onBlur={this.handleAddNew} /* will add an additional empty string to friend */
          /* when click the add Friend button */
          /* because it handleAddNew is triggered twice - onClick in button and onBlur in input */
          onKeyPress={(e) => {
          var keycode = e.which || e.keyCode;
          if (keycode == 13) {
            this.handleAddNew();
          }
        }} onChange={this.updateNewFriend}/>
        <button onClick={this.handleAddNew}>Add Friend</button>
      </div>
    )
  }
}

AddFriend.propTypes = {
  addNew: PropTypes.func.isRequired
}

class ShowList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('ShowList componentDidMount');
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('ShowList getDerivedStateFromProps');
    return prevState;
  }
  render() {
    let Li = (names) => {
      let key = 0;
      return names.map((friend) => <li key={key++}>{friend}</li>)
    }
    return (
      <div>
        <h3>Friends</h3>
        <ul>
          {Li(this.props.names)}
        </ul>
      </div>
    )
  }
}

ShowList.defaultProps = {
  names: []
}

// class HelloWorld extends React.Component {   constructor(props) {
// super(props);     this.state = {       username: 'tylermcginnis'     }
// this.handleChange = this .handleChange       .bind(this);   } handleChange(e)
// { this.setState({username: e.target.value})   } render() {     const {color,
// bgcolor} = this.props;     return (       <div className={color + " " +
// bgcolor + "-bg"}>         <div>Hello, {this.props.name}</div>         Hello
// {this.state.username}         <br/> Change Name:         <input type="text"
// value={this.state.username} onChange={this.handleChange}/>       </div>     )
//     // return React.createElement("div", {     className: 'blue grey-bg' },
// "Hello     // World");   } } ReactDom.render(   <HelloWorld name="Tyler"
// color='white' bgcolor='blue'/>, document.getElementById('root'));