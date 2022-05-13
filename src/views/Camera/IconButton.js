import { Feather as Icon } from "@expo/vector-icons";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";

const IconButton = ({ icon, size, color, onPress }) => {
  return (
    <TouchableWithoutFeedback {...{ onPress }}>
      <Icon name={icon} size={size} color={color} />
    </TouchableWithoutFeedback>
  );
};
IconButton.defaultProps = { size: 26, color: "white" };
export default IconButton;