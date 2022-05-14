import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';
import { StatusColorPicker } from 'react-native-status-color-picker';


export default class ColorPicking extends Component {
  state = {
    visible: false,
    colors: ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E", "#607D8B"],
    selectedColor: '#F44336',
    teamNo: 1,
  };

  team = (teamId) => {
    this.setState({ teamNo: teamId });
  };


  btnTellPapa = () => {
    this.props.tellPapa(this.selectedColor , this.teamNo);
  }

  ok = data => {
    this.setState({ selectedColor: data.selectedColor, text: data.text });
    this.btnTellPapa;
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
          style={{ fontSize: 30, color: this.state.selectedColor }}
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