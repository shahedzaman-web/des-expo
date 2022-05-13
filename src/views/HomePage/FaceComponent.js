import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
  Modal,Pressable
} from 'react-native';
import React from 'react';
import colors from '../../theme/colors';
import {ph, pw} from '../../constant/responsive';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import {useSendFacegenMutation} from '../../store/services/api';
const FaceComponent = () => {

  const [modalVisible, setModalVisible] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const [base64, setBase64] = React.useState(null);
  const navigation = useNavigation();


  const userInfo = useSelector(state => state.auth.userInfo);
  const storedImage = useSelector(state => state.camera.face);
  const storedBase64 = useSelector(state => state.camera.faceBase64);
  const gender = useSelector(state => state.userInfo.gender);

  const [sendFacegen, {isLoading}] = useSendFacegenMutation();
  React.useEffect(() =>{
    if( storedImage || storedBase64 ){
      setImage(storedImage)
      setBase64(storedBase64)
    }
  },[storedImage,storedBase64])
  const handleSubmit = async () => {
    if(gender===""){
      Alert.alert("Please Fill the info section first.")
    }
    else{
      const data = {
        user_id: userInfo.id,
        client_id: userInfo.client_id,
        user_relative_id: userInfo.user_relative_id,
        gender: gender,
        image: base64,
      };
  
      try {
        const response = await sendFacegen(data);
   
        console.log(JSON.stringify(response));
        if (response?.data?.success) {
          Alert.alert(response?.data?.message);
        } else {
   
          Alert.alert(response?.error?.data?.exception?.message);
        }
      } catch (err) {
         Alert.alert("Something went wrong!");
        console.log("error----------------->",err);
      }
    }
   
  };
  const choosePhotoFromGallery = async() => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        base64: true, 
        quality: 1,
      });
      setModalVisible(false)
      if (!result.cancelled) {
        setImage(result.uri);
        setModalVisible(false)
        setBase64(result.base64);
      }
  };
  const takePhotoFromCamera = () => {
  
      navigation.navigate("App", {
        screen: "Camera",
        params: { type: "face" },
      })
      setModalVisible(false)
  };
  return (
    <View style={styles.container}>
   <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity 
            onPress={choosePhotoFromGallery}
            style={styles.modalBtn}>
              <Text style={styles.modalBtnText}>Choose Photo From Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={takePhotoFromCamera}
            style={styles.modalBtn}>
              <Text  style={styles.modalBtnText}>Take Photo </Text>
            </TouchableOpacity>
            <Pressable
              style={[styles.modalBtn, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('App', {screen: 'InstructionFace'})
        }
        style={styles.btn}>
        <Text style={styles.btnText}>Read Instruction First</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>setModalVisible(true)}
        style={styles.imageBtn}>
        {!image ? (
          <AntDesign name="camera" size={pw('12%')} color={colors.white} />
        ) : (
          <Image
            style={styles.image}
            source={{uri: image}}
          />
        )}
      </TouchableOpacity>
      {image   && (
        <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
          {isLoading ? (
            <ActivityIndicator size="large" color={colors.white} />
          ) : (
            <Text style={styles.btnText}>Submit</Text>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default FaceComponent;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: colors.secondary,
    flex: 1,
    height: '100%',
    width: '100%',
  },
  btn: {
    backgroundColor: colors.primary,
    width: pw('92%'),
    height: ph('7%'),
    marginVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
  imageBtn: {
    borderWidth: 1,
    borderColor: colors.primary,
    width: pw('45%'),
    height: ph('16%'),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    marginVertical: 12,
  },
  btnText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    borderWidth: 1,
    borderColor: colors.primary,
  },image:{
    resizeMode: 'contain',
    height:ph("15%"),
    width: pw('42%'),
  }, modalView: {
    margin: 20,
    marginTop: ph("40%"),
    backgroundColor: "white",
    borderRadius: 5,
    padding: 35,
    justifyContent:"center",
    alignItems: "center",
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },

  buttonClose: {
    backgroundColor:  colors.blue
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },modalBtn:{
    width: pw("80%"),
    height: ph("6%"),
    backgroundColor: colors.secondaryDark,
    marginVertical:6,
    alignItems:"center",
    justifyContent:"center",
    borderRadius: 5
  },modalBtnText:{
    color: colors.white,
    fontWeight: "bold",
    fontSize:16
  }
});
