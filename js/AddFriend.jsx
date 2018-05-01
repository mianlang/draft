import React from 'react';
import PropTypes from 'prop-types';

class AddFriend extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('AddFriend getDerivedStateFromProps');
    return prevState;
  }
  constructor(props) {
    super(props);
    this.state = {
      newFriend: '',
    };
    this.updateNewFriend = this.updateNewFriend.bind(this);
    this.handleAddNew = this.handleAddNew.bind(this);
  }
  componentDidMount() {
    console.log('AddFriend componentDidMount');
  }
  updateNewFriend(e) {
    this.setState({ newFriend: e.target.value });
  }
  handleAddNew() {
    this.props.addNew(this.state.newFriend);
    this.setState({ newFriend: '' });
  }
  render() {
    return (
      <div>
        {/* 回车或点击添加按钮生效 */}
        <input
          type="text"
          value={this.state.newFriend}
          onKeyPress={e => {
            const keycode = e.which || e.keyCode;
            if (keycode === 13) {
              this.handleAddNew();
            }
          }}
          onChange={this.updateNewFriend}
        />
        <button onClick={this.handleAddNew}>Add Friend</button>
      </div>
    );
  }
}

AddFriend.propTypes = {
  addNew: PropTypes.func.isRequired,
};

export default AddFriend;
