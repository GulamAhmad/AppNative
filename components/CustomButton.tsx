import React from "react";
import { Text, Pressable } from "react-native";

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  buttonStyle,
  textStyle,
  ...rest
}) => {
  return (
    <Pressable className={`px-4 py-2 rounded ${buttonStyle}`} {...rest}>
      {children}
    </Pressable>
  );
};

export default CustomButton;
