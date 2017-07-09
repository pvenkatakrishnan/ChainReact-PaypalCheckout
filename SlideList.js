import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ListView
} from 'react-native';

class SlideList extends Component {

  constructor(props) {
    console.info('called into slidelist constructore');
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }).cloneWithRows(props.entries),
    };
  }

  renderRow(data) {
    return (
      <Text>{`\u2022 ${data}`}</Text>
    );
  }

  render() {
    return (
      <ListView
        style={{margin: 40}}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}