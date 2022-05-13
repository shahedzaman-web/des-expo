import {StyleSheet} from 'react-native';
import {ph, pw} from '../../constant/responsive';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:colors.secondaryDark
  },
  
  container: {
    padding: 12,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.white,
    marginVertical: 12,
  },
  subTitle: {
    fontSize: 16,
    color: colors.white,
    marginBottom: 12,
  },
  selectGenderContainer: {
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectGenderText: {
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
  },
  dateFormContainer: {
    marginVertical: 6,
  },
  formContainer: {
    marginVertical: 6,
  },
  formLevel: {
    fontSize: 18,
    color: colors.white,
    marginVertical: 12,
    fontWeight: 'bold',
  },
  input: {
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 2,
    backgroundColor: colors.secondaryDark,
    padding: 10,
    color: colors.white,
    width: pw('50%'),
  },
  pickerSelect: {
    width: pw('15%'),
  },

  calendarTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarText: {
    paddingLeft: 5,
    fontSize: 18,
    color: colors.white,

    fontWeight: 'bold',
  },
  confirmBtn: {
    width: pw('95%'),
    height: ph('7%'),
    backgroundColor: colors.primary,
    borderRadius: 1,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmBtnText: {
    textTransform: 'uppercase',
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdown: {
    width: pw('40%'),
    height: 50,
    borderColor: colors.white,
    backgroundColor: colors.secondaryDark,
    borderWidth: 1,
    borderRadius: 2,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: colors.white,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: colors.white,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  label: {
    position: 'absolute',
    backgroundColor: colors.primary,
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  item: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    padding: 4,
  },
  textItem: {
    fontSize: 16,
    color: colors.white,
  },btnContainer:{
    paddingVertical: pw("5%"),
  }
});

export default styles;
