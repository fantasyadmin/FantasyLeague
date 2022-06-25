import React from "react";
import {
  VictoryChart,
  VictoryTheme,
  VictoryGroup,
  VictoryArea,
  VictoryPolarAxis,
  VictoryLabel,
} from "victory-native";

// const characterData = [
//   {
//     ["Attack"]: 1,
//     ["Goalie"]: 250,
//     ["Team Player"]: 1,
//     ["Player Score"]: 40,
//     // charisma: 50,
//   },
//   {
//     ["Attack"]: 1.5,
//     ["Goalie"]: 2.5,
//     ["Team Player"]: 12,
//     ["Player Score"]: 4,
//     // charisma: 50,
//   },
// ];

class Radar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <VictoryChart polar theme={VictoryTheme.material} domain={{ y: [0, 1] }}>
        <VictoryGroup
          colorScale={["orange", "tomato"]}
          style={{
            data: { fillOpacity: 0.1, strokeWidth: 2 }
          }}
        >
          {this.props.data.map((data, i) => {
            return <VictoryArea key={i} data={data} />;
          })}
        </VictoryGroup>
        {Object.keys(this.props.maxima).map((key, i) => {
          return (
            <VictoryPolarAxis
              key={i}
              dependentAxis
              style={{
                axisLabel: { padding: 10 },
                axis: { stroke: "white", strokeWidth: 0.25, opacity: 0.4 },
                grid: { stroke: "white", strokeWidth: 0.25, opacity: 0.4 },
              }}
              tickLabelComponent={<VictoryLabel labelPlacement="vertical" />}
              labelPlacement="perpendicular"
              axisValue={i + 1}
              label={key}
              tickFormat={(t) => Math.ceil(t * this.props.maxima[key])}
            //tickValues={[0.25, 0.5, 0.75]}
            />
          );
        })}
        <VictoryPolarAxis
          labelPlacement="parallel"
          tickFormat={() => ""}
          style={{
            axis: { stroke: "none" },
            grid: { stroke: "white", opacity: 0.5 },
          }}
        />
      </VictoryChart>
    );
  }
}

export default Radar;
