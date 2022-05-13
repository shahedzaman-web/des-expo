import {View, Text, } from 'react-native';
import React from 'react';
import styles from './styles';
import { MaterialIcons,FontAwesome5, Entypo} from '@expo/vector-icons';

import HomeTab from './HomeTab';
import colors from '../../theme/colors';

import {useLogoutUserMutation} from '../../store/services/authApi';
import {useSelector} from 'react-redux';
import Screen from '../../component/Screen';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {ph} from '../../constant/responsive';
const HomePage = ({navigation}) => {
  const userInfo = useSelector(state => state.auth.userInfo);
  const [logoutUser] = useLogoutUserMutation();
  const handleLogout = async () => {
    const data = {
      client_id: userInfo.client_id,
      user_id: userInfo.id,
    };

    const response = await logoutUser(data);
    // console.log({response});
    if (response.data.success) {
      navigation.replace('Login');
    } else {
      alert('Something went wrong');
    }
  };
  return (
    <Screen>
      <View style={styles.header}>
        <View />
        <Menu>
          <MenuTrigger>
            <Entypo
              name="dots-three-vertical"
              size={24}
              color={colors.primary}
            />
          </MenuTrigger>
          <MenuOptions customStyles={optionsStyles}>
            <MenuOption
              onSelect={() =>
                navigation.navigate('App', {
                  screen: 'BeforeStart',
                })
              }>
              <FontAwesome5 name="edit" size={16} color={colors.white} />
              <Text style={styles.menuColor}>Edit Info</Text>
            </MenuOption>
            <MenuOption onSelect={handleLogout}>
              <MaterialIcons name="logout" size={16} color={colors.white} />
              <Text style={styles.menuColor}>Logout </Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
      <HomeTab />
    </Screen>
  );
};

export default HomePage;
const optionsStyles = {
  optionsContainer: {
    backgroundColor: colors.primary,
    padding: 5,
    marginTop: ph('4%'),
    evaluation: 5,
    flexDirection: 'row',
  },
  optionsWrapper: {
    backgroundColor: colors.primary,
    width: '100%',
  },
  optionWrapper: {
    backgroundColor: colors.primary,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionTouchable: {
    underlayColor: colors.green,
    activeOpacity: 70,
  },
  optionText: {
    color: 'brown',
  },
};
