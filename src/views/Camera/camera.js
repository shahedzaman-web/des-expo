import { Camera } from "expo-camera";

import React, {
  useEffect,
  useReducer,
  useRef,
  useState,
  Platform,
  Dimensions,
} from "react";
import { Text, View } from "react-native";
import { useDispatch } from "react-redux";

import {
  storeFaceImage,
  storeFrontImage,
  storeSideImage,
} from "../../store/slices/cameraSlice";
import styles from "./styles";
import IconButton from "./IconButton";

const initialState = {
  whbalance: "auto",
  cameraType: "back",
  flash: "off",
  zoomValue: 0,
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "@type/CAMERA_BACK":
      return { ...state, cameraType: action.payload };
    case "@type/CAMERA_FRONT":
      return { ...state, cameraType: action.payload };
    default:
      return { ...state };
  }
}

const CameraScreen = ({ route, navigation }) => {
  const reduxDispatch = useDispatch();
  const { type } = route.params;
  const { height, width } = Dimensions.get("window");
  const [hasPermission, setHasPermission] = useState(null);
  const [imagePadding, setImagePadding] = useState(0);
  const [ratio, setRatio] = useState("4:3"); // default is 4:3

  const screenRatio = height / width;
  const [isRatioSet, setIsRatioSet] = useState(false);

  // set the camera ratio and padding.
  // this code assumes a portrait mode screen
  const prepareRatio = async () => {
    let desiredRatio = "4:3"; // Start with the system default
    // This issue only affects Android
    if (Platform.OS === "android") {
      const ratios = await Camera.getSupportedRatiosAsync();

      // Calculate the width/height of each of the supported camera ratios
      // These width/height are measured in landscape mode
      // find the ratio that is closest to the screen ratio without going over
      let distances = {};
      let realRatios = {};
      let minDistance = null;
      for (const ratio of ratios) {
        const parts = ratio.split(":");
        const realRatio = parseInt(parts[0]) / parseInt(parts[1]);
        realRatios[ratio] = realRatio;
        // ratio can't be taller than screen, so we don't want an abs()
        const distance = screenRatio - realRatio;
        distances[ratio] = realRatio;
        if (minDistance == null) {
          minDistance = ratio;
        } else {
          if (distance >= 0 && distance < distances[minDistance]) {
            minDistance = ratio;
          }
        }
      }
      // set the best match
      desiredRatio = minDistance;
      //  calculate the difference between the camera width and the screen height
      const remainder = Math.floor(
        (height - realRatios[desiredRatio] * width) / 2
      );
      // set the preview padding and preview ratio
      setImagePadding(remainder);
      setRatio(desiredRatio);
      // Set a flag so we don't do this
      // calculation each time the screen refreshes
      setIsRatioSet(true);
    }
  };

  // the camera must be loaded in order to access the supported ratios
  const setCameraReady = async () => {
    if (!isRatioSet) {
      await prepareRatio();
    }
  };
  // Use Reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cameraType } = state;

  const cam = useRef();

  const _takePicture = async () => {
    if (cam.current) {
      const options = { quality: 1, base64: true, skipProcessing: true };
      let photo = await cam.current.takePictureAsync(options);
      const source = photo.uri;
      const base64 = photo.base64;
      if (type === "face") {
        reduxDispatch(
          storeFaceImage({
            source,
            base64,
          })
        );
        navigation.goBack();
      } else if (type === "front") {
        reduxDispatch(
          storeFrontImage({
            source,
            base64,
          })
        );
        navigation.goBack();
      } else if (type === "side") {
        reduxDispatch(
          storeSideImage({
            source,
            base64,
          })
        );
        navigation.goBack();
      } else {
        console.log("error");
      }
    }
  };

  const _handleCameraToggle = () => {
    if (cameraType === "back") {
      dispatch({
        type: "@type/CAMERA_FRONT",
        payload: "front",
      });
    } else {
      dispatch({
        type: "@type/CAMERA_BACK",
        payload: "back",
      });
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  if (hasCameraPermission === null) {
    return (
      <View style={styles.information}>
        <Text>Waiting for camera permissions</Text>
      </View>
    );
  } else if (hasCameraPermission === false) {
    return (
      <View style={styles.information}>
        <Text>No access to camera</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Camera
          style={[
            styles.cameraPreview,
            { marginTop: imagePadding, marginBottom: imagePadding },
          ]}
          onCameraReady={setCameraReady}
          ratio={ratio}
          ref={(ref) => {
            setCamera(ref);
          }}
        >
          <View style={styles.footerContainer}>
            <View style={styles.column}>
              <View style={styles.alignCenter}></View>
              <View style={styles.spaceBetween}>
                <IconButton icon="refresh-cw" onPress={_handleCameraToggle} />
                <IconButton icon="camera" size={50} onPress={_takePicture} />
                <IconButton icon="grid" onPress={() => true} />
              </View>
            </View>
          </View>
        </Camera>
      </View>
    );
  }
};

export default CameraScreen;
