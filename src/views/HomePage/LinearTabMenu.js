import { StyleSheet, Text, View,ScrollView ,RefreshControl} from "react-native";
import React from "react";

import colors from "../../theme/colors";
import { useGetMeasurementQuery } from "../../store/services/api";
import { useSelector } from "react-redux";

const LinearTabMenu = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const [refreshing, setRefreshing] = React.useState(false);
  const { data, error,isFetching ,refetch}=useGetMeasurementQuery(userInfo)

    const { ArmLengthFull,ChestWidth,HeadSize,InsideLegTillAnkle,InsideLegTillHeel,LowerArmLength,OutsideLegUpperHipToAnkle,OutsideLegUpperHipToHeel,ShoulderWidth,UpperArmLength} = data?.data?.measurement?.linear;
    const onRefresh = React.useCallback(() => {
      refetch();
  
      isFetching ? setRefreshing(true) : setRefreshing(false);
    }, []);
  
    return (
    <ScrollView style={styles.container}
     showsVerticalScrollIndicator={false}
     refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
     { (error !== "undefined" && !isFetching && data   )&&
     <>

      <View style={styles.linearTab}>
        <Text style={styles.linearTabText}>ArmLengthFull</Text>
        
        <Text style={styles.linearTabValue}>{ArmLengthFull}</Text>
      </View>
      <View style={styles.linearTab}>
        <Text style={styles.linearTabText}>ChestWidth</Text>
        
        <Text style={styles.linearTabValue}>{ChestWidth}</Text>
      </View>
      <View style={styles.linearTab}>
        <Text style={styles.linearTabText}>HeadSize</Text>
        
        <Text style={styles.linearTabValue}>{HeadSize}</Text>
      </View>
      <View style={styles.linearTab}>
        <Text style={styles.linearTabText}>InsideLegTillAnkle</Text>
        
        <Text style={styles.linearTabValue}>{InsideLegTillAnkle}</Text>
      </View>
      <View style={styles.linearTab}>
        <Text style={styles.linearTabText}>InsideLegTillHeel</Text>
        
        <Text style={styles.linearTabValue}>{InsideLegTillHeel}</Text>
      </View>
       <View style={styles.linearTab}>
        <Text style={styles.linearTabText}>LowerArmLength</Text>
        
        <Text style={styles.linearTabValue}>{LowerArmLength}</Text>
      </View>
      <View style={styles.linearTab}>
        <Text style={styles.linearTabText}>OutsideLegUpperHipToAnkle</Text>
        
        <Text style={styles.linearTabValue}>{OutsideLegUpperHipToAnkle}</Text>
      </View>
      <View style={styles.linearTab}>
        <Text style={styles.linearTabText}>OutsideLegUpperHipToHeel</Text>
        
        <Text style={styles.linearTabValue}>{OutsideLegUpperHipToHeel}</Text>
      </View>
      <View style={styles.linearTab}>
        <Text style={styles.linearTabText}>ShoulderWidth</Text>
        
        <Text style={styles.linearTabValue}>{ShoulderWidth}</Text>
      </View>
      <View style={styles.linearTab}>
        <Text style={styles.linearTabText}>UpperArmLength</Text>
        
        <Text style={styles.linearTabValue}>{UpperArmLength}</Text>
      </View>
      </>}
    


    </ScrollView>
  );
};

export default LinearTabMenu;

const styles = StyleSheet.create({
  container: {
    padding: 2,

    margin: 5,
    marginVertical: 12,
    borderRadius: 5,
  },
  linearTab: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderColor: colors.primary,
    margin: 5,
    marginVertical: 12,
    borderRadius: 5,
  },
  linearTabText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
    width: "75%",
  },
 linearTabValue:{
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
    width: "25%",
    alignItems: "center",
    textAlign: "right",
  }
});
