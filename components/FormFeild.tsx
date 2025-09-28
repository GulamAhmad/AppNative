import React from "react";
import { View, Text, TextInput } from "react-native";

const FormFeild: React.FC<FormFeilds> = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  keyboardType,
  placeholder,
}) => {
  return (
    <View className={`border border-green-300 rounded-xl pt-2 ${otherStyles}`}>
      <Text className="text-base pl-4 text-green-800">{title}</Text>
      <View className="w-full h-14 px-4 rounded-2xl ">
        <TextInput
          className="flex-1 text-base text-green-300"
          placeholder={placeholder}
          value={value}
          onChangeText={handleChangeText}
          inputMode={keyboardType === "number" ? "numeric" : "text"}
        />
      </View>
    </View>
  );
};

export default FormFeild;
