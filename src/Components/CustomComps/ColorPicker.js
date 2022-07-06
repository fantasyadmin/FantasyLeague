import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';
import { StatusColorPicker } from 'react-native-status-color-picker';


export default class ColorPicking extends Component {
  state = {
    visible: false,
    colors: [
      "black", "blue", "seagreen",
      "red", "yellow", "grey", "whitesmoke"],
    selectedColor: 'white',
    teamNo: 1,
  };

  team = (teamId) => {
    this.setState({ teamNo: teamId });
  };


  ok = data => {
    this.setState({ selectedColor: data.selectedColor });
    this.props.tellPapa(data.selectedColor, this.props.team);
    this.close();
  };

  close = () => {
    this.setState({ visible: false });
  };

  render() {

    return (
      <View style={styles.container}>
        <Icon
          name="shirt"
          style={{ fontSize: 40, color: this.state.selectedColor, borderColor: 'black', borderWidth: 21, borderRadius: 20, padding: 5 }}
          onPress={() => this.setState({ visible: true })}
        />
        <StatusColorPicker
          visible={this.state.visible}
          colors={this.state.colors}
          selectedColor={this.state.selectedColor}
          onOk={this.ok}
          onCancel={this.close}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});