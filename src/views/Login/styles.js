import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import {ph, pw} from '../../constant/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryDark,
  },
  logo: {
    marginTop: ph("10%"),
    width: pw('100%'),
    height: ph('18%'),
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.darkGrey,
  },
  formContainer: {
    padding: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.darkGrey,
  },
  inputContainer: {
    marginTop: 20,
    borderRadius: 10,
  },
  passInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: colors.primary,
    backgroundColor: colors.secondaryDark,
    borderWidth: 1,
    color: colors.white,
    padding: 2,
    borderRadius: 6,
  },
  inputLabel: {
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  input: {
    borderColor: colors.primary,
    backgroundColor: colors.secondaryDark,
    borderWidth: 1,
    color: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 10,
    height: ph('6%'),
    borderRadius: 5,
  },
  inputPass: {
    borderWidth: 0,
    backgroundColor: colors.secondaryDark,
    paddingVertical: 10,
    paddingHorizontal: 10,
    height: ph('6%'),
    color: colors.white,
    width:"80%",
  },
  eyeBtn: {
    paddingHorizontal: 5,
  },
  button: {
    marginTop: 20,
    width: pw('90%'),
    height: ph('8%'),
    backgroundColor: colors.primary,
    borderRadius: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 2,
  },
  buttonText: {
    textTransform: 'uppercase',
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default styles;
