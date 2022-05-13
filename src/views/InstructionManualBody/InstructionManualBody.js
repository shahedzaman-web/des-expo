import {Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Screen from '../../component/Screen';
import {Ionicons} from '@expo/vector-icons';

import colors from '../../theme/colors';
const InstructionManualBody = ({navigation}) => {
  return (
    <Screen>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btn}>
        <Ionicons name="arrow-back-circle" size={30} color={colors.primary} />
        <Text style={styles.btnText}>Body Instruction Manual</Text>
      </TouchableOpacity>

      <ScrollView style={styles.container}>
        <Text style={styles.header}>How to Take Photo</Text>
        <View style={styles.divider} />
        <View style={styles.textContainer}>
          <View style={styles.textCounterContainer}>
            <Text style={styles.textCounter}>1</Text>
          </View>
          <Text style={styles.text}>Ask a friend to take a photo of you.</Text>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textCounterContainer}>
            <Text style={styles.textCounter}>2</Text>
          </View>

          <Text style={styles.text}>
            Keep the device at 90° angle at the waistline.
          </Text>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textCounterContainer}>
            <Text style={styles.textCounter}>3</Text>
          </View>
          <Text style={styles.text}>Put your hair up.</Text>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textCounterContainer}>
            <Text style={styles.textCounter}>4</Text>
          </View>
          <Text style={styles.text}>
            Make sure you wear tight clothes: tank top and leggings will do just
            fine.
          </Text>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textCounterContainer}>
            <Text style={styles.textCounter}>5</Text>
          </View>
          <Text style={styles.text}>
            Background should be in plain solid color.
          </Text>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textCounterContainer}>
            <Text style={styles.textCounter}>6</Text>
          </View>
          <Text style={styles.text}>
            Make sure your costume color and background color are different.
          </Text>
        </View>
        <Text style={styles.title}>Front View</Text>
        <View style={styles.imgContainer}>
          <Image
            source={require('../../assets/Front_01-removebg-preview.png')}
            style={styles.img}
          />
        </View>
        <View style={styles.padding}>
          <View style={styles.textContainer}>
            <View style={styles.textCounterContainer}>
              <Text style={styles.textCounter}>1</Text>
            </View>
            <Text style={styles.text}>Head looking straight ahead.</Text>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textCounterContainer}>
              <Text style={styles.textCounter}>2</Text>
            </View>
            <Text style={styles.text}>Keep the posture straight.</Text>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textCounterContainer}>
              <Text style={styles.textCounter}>3</Text>
            </View>
            <Text style={styles.text}>
              Straight arms are 4-5 inches (12 cm) apart.
            </Text>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textCounterContainer}>
              <Text style={styles.textCounter}>4</Text>
            </View>
            <Text style={styles.text}>Legs are 7 inches (18 cm) apart.</Text>
          </View>
        </View>
        <Text style={styles.title}>Side View</Text>
        <View style={styles.imgContainer}>
          <Image
            source={require('../../assets/Left_01-removebg-preview.png')}
            style={styles.img}
          />
        </View>
        <View style={styles.padding}>
          <View style={styles.textContainer}>
            <View style={styles.textCounterContainer}>
              <Text style={styles.textCounter}>1</Text>
            </View>
            <Text style={styles.text}>Head looking straight ahead.</Text>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textCounterContainer}>
              <Text style={styles.textCounter}>2</Text>
            </View>
            <Text style={styles.text}>Keep the posture straight.</Text>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textCounterContainer}>
              <Text style={styles.textCounter}>3</Text>
            </View>
            <Text style={styles.text}>
              Arms are rested on the sides of the thighs.
            </Text>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textCounterContainer}>
              <Text style={styles.textCounter}>4</Text>
            </View>
            <Text style={styles.text}>Don’t lean over.</Text>
          </View>
        </View>
        <Text style={styles.titleDanger}>Wrong Posture(Front View)</Text>
        <View style={styles.padding}>
          <View style={styles.textContainer}>
            <View style={styles.textCounterContainerDanger}>
              <Text style={styles.textCounter}>1</Text>
            </View>
            <Text style={styles.text}>
              Arms should not be put on the hips, crossed behind the back, or
              over the head.
            </Text>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textCounterContainerDanger}>
              <Text style={styles.textCounter}>2</Text>
            </View>
            <Text style={styles.text}>
              Legs and arms should not be together
            </Text>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textCounterContainerDanger}>
              <Text style={styles.textCounter}>3</Text>
            </View>
            <Text style={styles.text}>Don’t lean over.</Text>
          </View>
        </View>
        <Text style={styles.titleDanger}>Wrong Posture(Side View)</Text>
        <View style={styles.padding}>
          <View style={styles.textContainer}>
            <View style={styles.textCounterContainerDanger}>
              <Text style={styles.textCounter}>1</Text>
            </View>
            <Text style={styles.text}>Don’t tilt the head head.</Text>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textCounterContainerDanger}>
              <Text style={styles.textCounter}>2</Text>
            </View>
            <Text style={styles.text}>
              Arms should be placed with the line on the pants
            </Text>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textCounterContainerDanger}>
              <Text style={styles.textCounter}>3</Text>
            </View>
            <Text style={styles.text}>Legs and feet should be together</Text>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textCounterContainerDanger}>
              <Text style={styles.textCounter}>4</Text>
            </View>
            <Text style={styles.text}>Don’t slouch</Text>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textCounterContainerDanger}>
              <Text style={styles.textCounter}>5</Text>
            </View>
            <Text style={styles.text}>Don’t stand in half-turn</Text>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default InstructionManualBody;
