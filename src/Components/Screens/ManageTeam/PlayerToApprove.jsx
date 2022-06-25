import React, { useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import ModalResult from "../../CustomComps/Modal";

const PlayerToApprove = ({ player, approvals }) => {
  const [playerResult] = useMemo(
    () => approvals.filter((approve) => approve.user_id === player.user_id),
    [approvals]
  );
  console.log({ playerResult, player });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {playerResult ? (
          <ModalResult data={playerResult} player={player} />
        ) : (
          <Text style={styles.noResults}>אין תוצאות</Text>
        )}
      </Text>
      <Text style={styles.text3}>{player.nickname}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "baseline",
    justifyContent: "space-around",
    padding: 0,
    backgroundColor: "#4472c4",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    paddingHorizontal: 5,
    marginVertical: 5,
    width: 320,
  },
  text: {
    flex: 1,
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
    // paddingHorizontal: 10,
    // marginVertical: 5,
  },
  text3: {
    flex: 1,
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "flex-end",
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  noResults: {
    backgroundColor: "red",
  },
});

export default PlayerToApprove;
