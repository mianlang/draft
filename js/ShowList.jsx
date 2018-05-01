import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
};

class ShowList extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('ShowList getDerivedStateFromProps');
    return prevState;
  }
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    console.log('ShowList componentDidMount');
  }
  render() {
    const { names } = this.props;
    const Li = items => {
      let key = 0;
      return items.map(friend => {
        key += 1;
        return <li key={key}>{friend}</li>;
      });
    };
    return (
      <div>
        <h3>Friends</h3>
        <ul>{Li(names)}</ul>
      </div>
    );
  }
}

ShowList.propTypes = propTypes;

export default ShowList;
