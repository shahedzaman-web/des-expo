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
    padding: 12,
    paddingVertical: 24,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  header: {
    fontWeight: "bold",
    fontSize: 18,
    color: colors.secondaryDark,
    paddingBottom: 4,
  },
  divider: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
    marginTop: 6,
    marginBottom: 12,
  },  text:{
    fontSize:14,
    width:"92%",
    color: colors.black,
    fontWeight:"500"
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
  
  },img:{
   
        resizeMode: "contain",
  },
  
  title:{
    fontSize:20,
    fontWeight:'bold',
    marginVertical:12,
    textAlign:'center',
    color:colors.secondary
  },titleDanger:{
    fontSize:16,
    fontWeight:'bold',

    textAlign:'center',
    color:colors.danger
  },
  padding:{
    marginVertical:20,
  },textCounterContainerDanger:{
    backgroundColor: colors.danger,
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 6,
  }
});

export default styles;
