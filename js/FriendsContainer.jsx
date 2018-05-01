// https://tylermcginnis.com/reactjs-tutorial-a-comprehensive-guide-to-building-
// apps-with-react/
import React from 'react';
import PropTypes from 'prop-types';
import AddFriend from './AddFriend';
import ShowList from './ShowList';

const propTypes = {
  className: PropTypes.string.isRequired,
};

export default class FriendsContainer extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('FriendsContainer getDerivedStateFromProps');
    return prevState;
  }
  constructor(props) {
    super(props);
    this.state = {
      name: 'Tyler Mcginnis',
      friends: ['Jake Lingwall', 'Sarah Drasner', 'Merrick Christensen'],
    };
    this.addFriend = friend => {
      console.log(friend, typeof friend);
      this.setState(state => ({
        friends: state.friends.concat([friend]),
      }));
    };
  }
  componentDidMount() {
    console.log('FriendsContainer componentDidMount');
  }
  componentWillUnmount() {
    console.log('never componentWillUnmount');
  }
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <h3>Name: {this.state.name}</h3>
        <AddFriend addNew={this.addFriend} />
        <ShowList names={this.state.friends} />
      </div>
    );
  }
}

FriendsContainer.propTypes = propTypes;

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
