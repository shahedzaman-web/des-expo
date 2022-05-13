import {StyleSheet, ActivityIndicator, View, Text, Image} from 'react-native';
import React from 'react';
import {useGetMeasurementQuery} from './../../store/services/api';
import {useSelector} from 'react-redux';
import colors from '../../theme/colors';
import MeasurementTab from './MeasurementTab';
import {ph, pw} from '../../constant/responsive';
const MyMeasurements = () => {
  const userInfo = useSelector(state => state.auth.userInfo);

  const {error, isFetching, data} = useGetMeasurementQuery(userInfo);

  return (
    <View style={styles.container}>
      <>
        {isFetching && (
          <ActivityIndicator size="large" color={colors.primary} />
        )}
      </>
      <>
        {!error && !isFetching && (
          <>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: data?.data?.user_measurement_photo?.front_image_url,
                }}
                alt="Front Image"
              />
              <Image
                style={styles.image}
                source={{
                  uri: data?.data?.user_measurement_photo?.side_image_url,
                }}
                alt="Side Image"
              />
            </View>
            <MeasurementTab />
          </>
        )}
      </>
      <View>
        {error && <Text style={styles.errorText}>{error?.data?.message}</Text>}
      </View>
    </View>
  );
};

export default MyMeasurements;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: colors.secondary,
    flex: 1,
    height: '100%',
    width: '100%',
  },
  errorText: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  image: {
    width: pw('50%'),
    height: ph('20%'),
    resizeMode: 'contain',
  },
});
