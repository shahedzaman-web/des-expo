import React from 'react';
import {StyleSheet,SafeAreaView,StatusBar} from 'react-native';

import colors from '../theme/colors';
const Screen = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
    {children}
    </SafeAreaView>
  );
};
export default Screen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary,
        paddingTop: StatusBar.currentHeight,
        }
});