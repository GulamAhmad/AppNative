import CustomButton from "@/components/CustomButton";
import OTPField from "@/components/OTPField";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const verify = () => {
  return (
    <SafeAreaView className="h-full">
      <ScrollView className="h-full">
        <LinearGradient
          colors={["#43A047", "#26C6DA"]} // Define your gradient colors
          start={[0, 0]} // Top-left corner
          end={[1, 1]} // Bottom-right corner
          className="h-[100vh] w-full justify-center items-center px-2"
        >
          <View className="h-1/2 w-full bg-white rounded-2xl items-center justify-center">
            <View className="mb-3 ">
              <Text className="text-3xl font-bold text-green-700">
                Verfiy OTP
              </Text>
              <Text className="text-green-500">
                Check yoour phone for otp to validate, you can {"\n"}resend
                after 1 minute
              </Text>
            </View>
            <View className="items-center mt-3">
              <OTPField />
              <CustomButton buttonStyle="bg-green-300 mt-2 ">
                <Link href="/trips">Verify</Link>
              </CustomButton>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default verify;
