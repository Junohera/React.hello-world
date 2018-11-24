import React, { Component } from 'react';

class MyName extends Component {
  render() {
      return (
          <div>
              Hi, my Name is <b>{this.props.name}</b> 입니다.
          </div>
      );
  }
}

MyName.defaultProps = {
    name : "최준호"
}

export default MyName;