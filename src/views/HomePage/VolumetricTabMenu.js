import {StyleSheet, Text, View, ScrollView, RefreshControl} from 'react-native';
import React from 'react';
import colors from '../../theme/colors';
import {useGetMeasurementQuery} from '../../store/services/api';
import {useSelector} from 'react-redux';

const VolumetricTabMenu = () => {
  const userInfo = useSelector(state => state.auth.userInfo);
  const [refreshing, setRefreshing] = React.useState(false);
  const {data, error, isFetching, refetch} = useGetMeasurementQuery(userInfo);
  const {
    BustGirth,
    CalfGirth,
    ForeArmGirth,
    HipGirth,
    NeckGirth,
    NeckGirthFromChest,
    ThighGirth,
    UpperArmGrith,
    UpperHipGirth,
    WaistGirth,
  } = data?.data?.measurement?.volumetric;
  const onRefresh = React.useCallback(() => {
    refetch();

    isFetching ? setRefreshing(true) : setRefreshing(false);
  }, []);

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {error !== 'undefined' && !isFetching && data && (
        <>
          <View style={styles.linearTab}>
            <Text style={styles.linearTabText}>BustGirth</Text>

            <Text style={styles.linearTabValue}>{BustGirth}</Text>
          </View>
          <View style={styles.linearTab}>
            <Text style={styles.linearTabText}>CalfGirth</Text>

            <Text style={styles.linearTabValue}>{CalfGirth}</Text>
          </View>
          <View style={styles.linearTab}>
            <Text style={styles.linearTabText}>ForeArmGirth</Text>

            <Text style={styles.linearTabValue}>{ForeArmGirth}</Text>
          </View>
          <View style={styles.linearTab}>
            <Text style={styles.linearTabText}>HipGirth</Text>

            <Text style={styles.linearTabValue}>{HipGirth}</Text>
          </View>
          <View style={styles.linearTab}>
            <Text style={styles.linearTabText}>NeckGirth</Text>

            <Text style={styles.linearTabValue}>{NeckGirth}</Text>
          </View>
          <View style={styles.linearTab}>
            <Text style={styles.linearTabText}>NeckGirthFromChest</Text>

            <Text style={styles.linearTabValue}>{NeckGirthFromChest}</Text>
          </View>
          <View style={styles.linearTab}>
            <Text style={styles.linearTabText}>ThighGirth</Text>

            <Text style={styles.linearTabValue}>{ThighGirth}</Text>
          </View>
          <View style={styles.linearTab}>
            <Text style={styles.linearTabText}>UpperArmGrith</Text>

            <Text style={styles.linearTabValue}>{UpperArmGrith}</Text>
          </View>
          <View style={styles.linearTab}>
            <Text style={styles.linearTabText}>UpperHipGirth</Text>

            <Text style={styles.linearTabValue}>{UpperHipGirth}</Text>
          </View>
          <View style={styles.linearTab}>
            <Text style={styles.linearTabText}>WaistGirth</Text>

            <Text style={styles.linearTabValue}>{WaistGirth}</Text>
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default VolumetricTabMenu;

const styles = StyleSheet.create({
  container: {
    padding: 2,

    margin: 5,
    marginVertical: 12,
    borderRadius: 5,
  },
  linearTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    fontWeight: 'bold',
    fontSize: 18,
    width: '60%',
  },
  linearTabValue: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
    width: '40%',
    textAlign: 'right',
  },
});
