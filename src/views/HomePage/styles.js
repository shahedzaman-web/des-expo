import {StyleSheet} from 'react-native';
import {ph, pw} from '../../constant/responsive';
import colors from '../../theme/colors';

const styles = StyleSheet.create({

  menu: {
    alignSelf: 'flex-end',
    marginRight: pw('5%'),
    position: 'absolute',
    top: ph('8%'),
    backgroundColor: colors.primary,
    zIndex: 2,
    width: pw('36%'),
    height: ph('10%'),
    alignItems: 'flex-start',
    right: pw('2.5%'),
    borderRadius: 5,
    justifyContent: 'center',
    elevation: 5,
  },
  menuText: {
    color: colors.white,
    fontWeight: 'bold',
    padding: 5,
  },
  menuLine: {
    width: pw('36%'),
    height: 1,
    backgroundColor: colors.white,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
  },

  img: {
    width: pw('60%'),
    height: ph('35%'),
    resizeMode: 'contain',
    alignSelf: 'center',
    padding: 5,
  },
  imageContainer: {
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },menuColor:{
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 10,
  }
});

export default styles;
