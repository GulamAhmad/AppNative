import { useRef, useState } from "react";
import { View, TextInput } from "react-native";

const OTPField = () => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const inputs = useRef<TextInput[]>([]);

  const handleChangeText = (text: string, index: number) => {
    const otpCopy = [...otp];
    otpCopy[index] = text;
    setOtp(otpCopy);

    // Auto-focus next input
    if (text && index < otp.length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        inputs.current[index - 1]?.focus();
      }
    }
  };

  return (
    <View>
      <View className="flex flex-row justify-center">
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(input) => (inputs.current[index] = input!)}
            className="border border-gray-300 p-1 m-1 text-center text-lg w-10 h-10 focus:border-green-300 "
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChangeText(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
          />
        ))}
      </View>
    </View>
  );
};

export default OTPField;
