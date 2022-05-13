import { StyleSheet, ActivityIndicator, View } from "react-native";
import React from "react";
import colors from "../../theme/colors";

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center", flex: 1,backgroundColor:colors.secondaryDark },
});
