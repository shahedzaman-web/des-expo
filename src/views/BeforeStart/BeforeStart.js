import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView
} from 'react-native';
import React from 'react';
import styles from './styles';
import {Dropdown} from 'react-native-element-dropdown';

import { FontAwesome } from '@expo/vector-icons';
import colors from '../../theme/colors';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';

import {storeUserInfo} from '../../store/slices/userInfoSlice';
import {genderField, heightUnitField, weightUnitField} from './data';
import Screen from '../../component/Screen';

const BeforeStart = ({navigation}) => {
  const [isGenderFocus, setIsGenderFocus] = React.useState(false);
  const [isHeightFocus, setIsHeightFocus] = React.useState(false);
  const [isWeightFocus, setIsWeightFocus] = React.useState(false);
  const userInfo = useSelector(state => state.auth.userInfo);
  const dispatch = useDispatch();

  const [date, setDate] = React.useState(
    moment(new Date()).format('DD-MM-YYYY'),
  );
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [selectedGender, setSelectedGender] = React.useState(null);
  const [selectedHeightUnit, setSelectedHeightUnit] = React.useState('');
  const [selectedWeightUnit, setSelectedWeightUnit] = React.useState('');
  const [height, setHeight] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const handleConfirm = date => {
    setDate(moment(date).format('DD-MM-YYYY'));
    setDatePickerVisibility(false);
  };

  const handleConfirmBtn = () => {
    if (
      !date ||
      !selectedGender ||
      !selectedHeightUnit ||
      !selectedWeightUnit ||
      !height ||
      !weight
    ) {
      Alert.alert('Please fill all the fields');
    } else {
      dispatch(
        storeUserInfo({
          date,
          height,
          weight,
          selectedGender,
          selectedHeightUnit,
          selectedWeightUnit,
        }),
      );
      navigation.navigate('HomePage');
    }
  };
  const _renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.value}</Text>
      </View>
    );
  };

  return (
    <ScrollView  style = {styles.mainContainer}>
    <KeyboardAvoidingView
    style = {{ flex: 1 }}
    {...(Platform.OS === 'ios' && { behavior: 'padding' })}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

          <View style={styles.container}>
            <Text style={styles.title}>Hello {userInfo.name}!</Text>
            <Text style={styles.subTitle}>
              Please Fill up these information in order to proceed{' '}
            </Text>
            <View style={styles.selectGenderContainer}>
              <Text style={styles.selectGenderText}>Select Gender</Text>
              <Dropdown
                style={[
                  styles.dropdown,
                  isGenderFocus && {borderColor: colors.primary},
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                data={genderField}
                maxHeight={84}
                labelField="label"
                valueField="value"
                placeholder={!isGenderFocus ? 'Select Gender' : '...'}
                renderItem={item => _renderItem(item)}
                value={selectedGender}
                onFocus={() => setIsGenderFocus(true)}
                onBlur={() => setIsGenderFocus(false)}
                onChange={item => {
                  setSelectedGender(item.value);
                  setIsGenderFocus(false);
                }}
              />
            </View>
            <View style={styles.dateFormContainer}>
              <Text style={styles.formLevel}>Your Birth Date</Text>
              <View style={styles.calendarTextContainer}>
                <TouchableOpacity
                  onPress={() => setDatePickerVisibility(true)}
                  style={styles.calendarBtn}>
                  <FontAwesome name="calendar" size={24} color={colors.white} />
                </TouchableOpacity>
                <Text style={styles.calendarText}>{date}</Text>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={() => setDatePickerVisibility(false)}
                />
              </View>
            </View>
            <View style={styles.formContainer}>
              <Text style={styles.formLevel}>Your Height</Text>
              <View style={styles.center}>
                <TextInput
                  onChangeText={text => setHeight(text)}
                  value={height}
                  style={styles.input}
                  placeholderTextColor={colors.white}
                  placeholder="Your Height"
                />
                <Dropdown
                  style={[
                    styles.dropdown,
                    isHeightFocus && {borderColor: colors.primary},
                  ]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  iconStyle={styles.iconStyle}
                  data={heightUnitField}
                  maxHeight={84}
                  labelField="label"
                  valueField="value"
                  placeholder={!isHeightFocus ? 'Select Height' : '...'}
                  renderItem={item => _renderItem(item)}
                  value={selectedHeightUnit}
                  onFocus={() => setIsHeightFocus(true)}
                  onBlur={() => setIsHeightFocus(false)}
                  onChange={item => {
                    setSelectedHeightUnit(item.value);
                    setIsHeightFocus(false);
                  }}
                />
              </View>
            </View>
            <View style={styles.formContainer}>
              <Text style={styles.formLevel}>Your Weight</Text>
              <View style={styles.center}>
                <TextInput
                  onChangeText={text => setWeight(text)}
                  value={weight}
                  style={styles.input}
                  placeholderTextColor={colors.white}
                  placeholder="Your Weight"
                />
                <Dropdown
                  style={[
                    styles.dropdown,
                    isWeightFocus && {borderColor: colors.primary},
                  ]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  iconStyle={styles.iconStyle}
                  data={weightUnitField}
                  maxHeight={84}
                  labelField="label"
                  valueField="value"
                  placeholder={!isWeightFocus ? 'Select Weight' : '...'}
                  renderItem={item => _renderItem(item)}
                  value={selectedWeightUnit}
                  onFocus={() => setIsWeightFocus(true)}
                  onBlur={() => setIsWeightFocus(false)}
                  onChange={item => {
                    setSelectedWeightUnit(item.value);
                    setIsWeightFocus(false);
                  }}
                />
              </View>
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                onPress={handleConfirmBtn}
                style={styles.confirmBtn}>
                <Text style={styles.confirmBtnText}>Confirm</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('HomePage')}
                style={styles.confirmBtn}>
                <Text style={styles.confirmBtnText}>Skip</Text>
              </TouchableOpacity>
            </View>
          </View>
  
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default BeforeStart;
