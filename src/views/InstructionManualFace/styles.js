import { StyleSheet } from "react-native";

import colors from "../../theme/colors";
const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
  },
  btnText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10,
  },
  container: {
    margin: 12,
    padding: 6,
    paddingVertical:24,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  header: {
    fontWeight: "bold",
    fontSize: 18,
    color:  colors.secondaryDark,
    paddingBottom: 4,
  },
  divider: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
    marginTop: 6,
    marginBottom: 12,
  },subTitle:{
    fontSize:18,
    fontWeight:"bold",
    paddingVertical:12,
    color: colors.black
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
  },
  textCounterContainer: {
    backgroundColor: colors.primary,
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 6,
  },

  textCounter: {
    fontSize: 16,
    color: colors.white,
  },
  imgContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    resizeMode: "contain",
    marginVertical: 12,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 12,
    textAlign: "center",
    color: colors.secondaryDark,

  },
  titleDanger: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 12,
    textAlign: "center",
    color: colors.danger,
  },
  text:{
    fontSize:14,
    width:"90%",
    color: colors.black,
    fontWeight: "500"
  },
  padding: {
    paddingVertical: 12,
    marginBottom: 12,
  },
  textCounterContainerDanger: {
    backgroundColor: colors.danger,
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 6,
  },
});

export default styles;
