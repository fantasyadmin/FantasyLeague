import { StyleSheet, Text, View, Button, styles, TouchableOpacity } from 'react-native';
import React from 'react';

export default function BottomMenu() {
  return (
    <View style={styles2.press}>

      <TouchableOpacity style={styles2.button} onPress={''}>
        <Text>Menu</Text>
      </TouchableOpacity>

      <Text>      </Text>

      <TouchableOpacity style={styles2.button} onPress={''}>
        <Text>My Team</Text>
      </TouchableOpacity>

      <Text>       </Text>

      <TouchableOpacity style={styles2.button} onPress={''}>
        <Text>Create Game</Text>
      </TouchableOpacity>

      <Text>       </Text>

      <TouchableOpacity style={styles2.button} onPress={''}>
        <Text>League Chart</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles2 = StyleSheet.create({
  press: {
    justifyContent: "center",
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
})