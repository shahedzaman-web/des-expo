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
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useSendPhotoForMeasurementMutation} from '../../store/services/api';

const BodyComponent = () => {
  const [modalVisibleFront, setModalVisibleFront] = React.useState(false);
  const [modalVisibleSide, setModalVisibleSide] = React.useState(false);
  const [frontImage, setFrontImage] = React.useState(null);
  const [sideImage, setSideImage] = React.useState(null);
  const [frontBase64, setFrontBase64] = React.useState(null);
  const [sideBase64, setSideBase64] = React.useState(null);
  const navigation = useNavigation();

  const storedUserInfo = useSelector(state => state.userInfo);
  const userInfo = useSelector(state => state.auth.userInfo);
  const storedImageFront = useSelector(state => state.camera.front);
  const storedFrontBase64 = useSelector(state => state.camera.frontBase64);
  const storedImageSide = useSelector(state => state.camera.side);
  const storedSideBase64 = useSelector(state => state.camera.sideBase64);
  const [sendPhotoForMeasurement, { isLoading}] =
    useSendPhotoForMeasurementMutation();
    React.useEffect(() =>{
      if( storedImageFront || storedFrontBase64 || storedImageSide || storedSideBase64 ){
        setFrontImage(storedImageFront)
        setFrontBase64(storedFrontBase64)
        setSideImage(storedImageSide)
        setSideBase64(storedSideBase64)
      }
    },[storedImageFront ,storedFrontBase64 , storedImageSide ,storedSideBase64 ])
    const choosePhotoFromGalleryFront = async() => {
      try{
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          base64: true, 
          quality: 1,
        });
        setModalVisibleFront(false)
        if (!result.cancelled) {
           setFrontBase64(result.base64);
          setFrontImage(result.uri)
          setModalVisibleFront(false);
        }
      }
      catch(err){
        console.log(err)
      }
    };
    const takePhotoFromCameraFront = () => {
      navigation.navigate("App", {
        screen: "Camera",
        params: { type: "front" },
      })
         setModalVisibleFront(false);

    };
    const choosePhotoFromGallerySide = async() => {
      try{
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        base64: true, 
        quality: 1,
      });
      setModalVisibleSide(false)
      if (!result.cancelled) {
         setSideBase64(result.base64);
        setSideImage(result.uri)
        setModalVisibleSide(false);
      }
    }
    catch(err){
      console.log(err)
    }
    };
    const takePhotoFromCameraSide = () => {
      navigation.navigate("App", {
        screen: "Camera",
        params: { type: "side" },
      })
         setModalVisibleSide(false);
  
    };

  const handleSubmit = async () => {
    if(storedUserInfo.gender ==="" || storedUserInfo.date_of_birth ==="" || storedUserInfo.height_unit ==="" || storedUserInfo.weight_unit==="" || storedUserInfo.height ===""   ){
      Alert.alert("Please Fill the info section first.")
    }
    else{
      const data = {
        height: storedUserInfo.height,
        front_image: frontBase64,
        side_image: sideBase64,
        user_id: userInfo.id,
        user_relative_id: userInfo.user_relative_id,
        gender: storedUserInfo.gender,
        date_of_birth: storedUserInfo.date_of_birth,
        height_unit: storedUserInfo.height_unit,
        weight_unit: storedUserInfo.weight_unit,
        client_id: userInfo.client_id,
      };
      try {
        const res = await sendPhotoForMeasurement(data);
        //  console.log(JSON.stringify(res))
        if (res?.data?.success) {
          Alert.alert(res?.data?.message);
        } else {
          Alert.alert(res?.error?.data?.message);
        }
      } catch (error) {
        Alert.alert("Something went wrong!");
        console.log({error});
      }
    }
  
  };
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleFront}
        onRequestClose={() => {
          setModalVisibleFront(!modalVisibleFront);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity 
            onPress={choosePhotoFromGalleryFront}
            style={styles.modalBtn}>
              <Text style={styles.modalBtnText}>Choose Photo From Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={takePhotoFromCameraFront}
            style={styles.modalBtn}>
              <Text  style={styles.modalBtnText}>Take Photo </Text>
            </TouchableOpacity>
            <Pressable
              style={[styles.modalBtn, styles.buttonClose]}
              onPress={() => setModalVisibleFront(false)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleSide}
        onRequestClose={() => {
          
          setModalVisibleSide(!modalVisibleSide);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity 
            onPress={choosePhotoFromGallerySide}
            style={styles.modalBtn}>
              <Text style={styles.modalBtnText}>Choose Photo From Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={takePhotoFromCameraSide}
            style={styles.modalBtn}>
              <Text  style={styles.modalBtnText}>Take Photo </Text>
            </TouchableOpacity>
            <Pressable
              style={[styles.modalBtn, styles.buttonClose]}
              onPress={() => setModalVisibleSide(!modalVisibleSide)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => navigation.navigate('App', {screen: 'InstructionBody'})}
        style={styles.btn}>
        <Text style={styles.btnText}>Read Instruction First</Text>
      </TouchableOpacity>
      <View style={styles.imageBtnContainer}>
        <TouchableOpacity
          onPress={()=>setModalVisibleFront(true)}
          style={styles.imageBtn}>
          {!frontImage ? (
            <>
              <AntDesign name="camera" size={pw('12%')} color={colors.white} />
              <Text style={styles.imageBtnText}>Front</Text>
            </>
          ) : (
            <Image
              style={styles.image}
              source={{uri: frontImage}}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>setModalVisibleSide(true)}
          
          style={styles.imageBtn}>
          {!sideImage ? (
            <>
              <AntDesign name="camera" size={pw('12%')} color={colors.white} />
              <Text style={styles.imageBtnText}>Side</Text>
            </>
          ) : (
            <Image
              style={styles.image}
              source={{uri: sideImage}}
            />
          )}
        </TouchableOpacity>
      </View>

      {frontImage && sideImage && (
        <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
          {isLoading ? (
            <ActivityIndicator size="small" color={colors.white} />
          ) : (
            <Text style={styles.btnText}>Submit</Text>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default BodyComponent;

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
    width: pw('90%'),
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
    height: ph('18%'),
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
  imageBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
  },
  imageBtnText: {
    color: colors.white,
  },image:{
    resizeMode: 'contain',
    height: ph('16%'),
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
