import * as React from "react";
import {
  Dimensions,
  Animated,
  Pressable,
  View,
  StyleSheet,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import colors from "../../theme/colors";

import LinearTabMenu from "./LinearTabMenu";
import VolumetricTabMenu from "./VolumetricTabMenu";


const initialLayout = {
  width: Dimensions.get("window").width,
};
const renderScene = SceneMap({
  first: LinearTabMenu,
  second: VolumetricTabMenu,

});

const MeasurementTab = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "first",
      title: "Linear",
    },
    {
      key: "second",
      title: "Volumetric",
    },
   
  ]);

  const renderTabBar = (props,) => {
    return (
      <View style={styles.container}>
        {props.navigationState.routes.map((route, i) => {
          const color = index === i ? colors.white : colors.primary;
          const backgroundColor =
            index === i ? colors.primary : colors.secondary;
          const fontWeight = index === i ? "bold" : "normal";
          
          return (
            <View
              style={{
                ...styles.tabBarItem,
                backgroundColor,
                color,
                
              }}
            >
              <Pressable
               style={{
                width: '100%',
                height: 28,
                justifyContent: 'center',
                alignItems: 'center',
              }}
                onPress={() => {
               
                  setIndex(i);
                }}
              >
                <Animated.Text
                  style={{
                    width: '100%',
                    color,
                    fontSize: 16,
                    fontWeight,
                    textAlign: 'center',
                  }}
                >
                  {route.title}
                </Animated.Text>
              </Pressable>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <TabView
      navigationState={{
        index,
        routes,
      }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

export default MeasurementTab;

const styles = StyleSheet.create({
    container:{
      flexDirection: 'row',
      backgroundColor: colors.secondary,
      borderWidth: 1,
      borderColor: colors.primary,
      borderRadius: 5,
        marginTop: 12
    },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 5,

    textAlign: 'center',
  },
});
