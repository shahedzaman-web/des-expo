import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const { width: wWidth, height: wHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
    information: { 
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    container: {
      flex: 1,
      backgroundColor: '#000',
      justifyContent: 'center'
    },
    cameraPreview: {
      flex: 1,
    },
  

  footerContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "black",
    width: wWidth,
    opacity: 0.4,
    height: wHeight * 0.15,
  },
  column: {
    flexDirection: "column",
    justifyContent: "center",
    width: wWidth,
  },
  alignCenter: {
    width: wWidth,
    alignItems: "center",
  },
  spaceBetween: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default styles;
