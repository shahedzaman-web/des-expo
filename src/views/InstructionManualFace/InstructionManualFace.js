import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./styles";
import Screen from "../../component/Screen";
import {Ionicons} from '@expo/vector-icons';

import colors from "../../theme/colors";
const InstructionManualFace = ({ navigation }) => {
  return (
    <Screen>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btn}>
        <Ionicons name="arrow-back-circle" size={30} color={colors.primary} />
        <Text style={styles.btnText}>Face Instruction Manual</Text>
      </TouchableOpacity>

      <ScrollView style={styles.container}
    
      >
        <Text style={styles.header}>How to Take Photo</Text>
        <View style={styles.divider} />
        <Text style={styles.title}>Face</Text>
        <View style={styles.imgContainer}>
          <Image source={require("../../assets/face.png")} style={styles.img} />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textCounterContainer}>
            <Text style={styles.textCounter}>1</Text>
          </View>
          <Text style={styles.text}>
            Faces must have the mouth closed and be in the neutral (relaxed)
            expression.
          </Text>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textCounterContainer}>
            <Text style={styles.textCounter}>2</Text>
          </View>

          <Text style={styles.text}>
            Eyes must be open and looking straight ahead.
          </Text>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textCounterContainer}>
            <Text style={styles.textCounter}>3</Text>
          </View>
          <Text style={styles.text}>The entire face must be in the photo.</Text>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textCounterContainer}>
            <Text style={styles.textCounter}>4</Text>
          </View>
          <Text style={styles.text}>
            Flash lighting must be used, and the face must not be otherwise
            brightly lit.
          </Text>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textCounterContainer}>
            <Text style={styles.textCounter}>5</Text>
          </View>
          <Text style={styles.text}>Images must be in color.</Text>
        </View>
        <Text style={styles.subTitle}>Recommendation & Conditions</Text>

        <View style={styles.padding}>
          <View style={styles.textContainer}>
            <View style={styles.textCounterContainer}>
              <Text style={styles.textCounter}>1</Text>
            </View>
            <Text style={styles.text}>Glasses should be removed.</Text>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textCounterContainer}>
              <Text style={styles.textCounter}>2</Text>
            </View>
            <Text style={styles.text}>
              Hair should not cover the forehead or any part of the face.
            </Text>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textCounterContainer}>
              <Text style={styles.textCounter}>3</Text>
            </View>
            <Text style={styles.text}>
              The camera should be at least 5 feet away from the face.
            </Text>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textCounterContainer}>
              <Text style={styles.textCounter}>4</Text>
            </View>
            <Text style={styles.text}>
              In the frontal shot, your chin should slightly elevated as if
              you're looking just above the camera.
            </Text>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textCounterContainer}>
              <Text style={styles.textCounter}>5</Text>
            </View>
            <Text style={styles.text}>
              Focus your eyes on something just above the camera, rather than
              into the distance, to avoid a spacey look.
            </Text>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textCounterContainer}>
              <Text style={styles.textCounter}>6</Text>
            </View>
            <Text style={styles.text}>
            Facial hair is OK.
            </Text>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textCounterContainer}>
              <Text style={styles.textCounter}>7</Text>
            </View>
            <Text style={styles.text}>
            Flashes on both sides of the camera
can be used.
            </Text>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textCounterContainer}>
              <Text style={styles.textCounter}>8</Text>
            </View>
            <Text style={styles.text}>
            Faces should be about 12 years of age
or older.
            </Text>
          </View>
        </View>

  
       
      </ScrollView>
    </Screen>
  );
};

export default InstructionManualFace;
