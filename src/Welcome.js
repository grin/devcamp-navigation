import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Hello {this.props.name}!
        </Text>
      </View>
    );
  }
}
