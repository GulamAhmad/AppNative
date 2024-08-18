import { Link } from "expo-router";
import { View, Text, Image } from "react-native";
import { logo } from "@/constants";
import FormFeild from "@/components/FormFeild";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

const Signup = () => {
  const [phone, setPhone] = useState("");
  return (
    <SafeAreaView>
      <LinearGradient
        colors={["#00C853", "#B9F6CA"]} // Define your gradient colors
        start={[0, 0]} // Top-left corner
        end={[1, 1]} // Bottom-right corner
        className="h-[100vh] justify-between items-center"
      >
        <View className="mt-14">
          <Image
            source={logo}
            className="w-24 h-24"
            style={{ width: 96, height: 96 }}
          />
        </View>
        <View className="w-full p-8 bg-white h-3/4 rounded-tl-[120px] pt-24">
          <Text className="text-2xl font-bold text-center text-green-700">
            Login
          </Text>
          <FormFeild
            title="Phone"
            value={phone}
            handleChangeText={(e) => setPhone(e)}
            otherStyles="mt-7"
            placeholder="Enter you number"
            keyboardType="number"
          />
          <CustomButton buttonStyle="bg-green-300 mt-5 py-3 rounded-2xl">
            <Link href="/verify" className="text-center">
              <Text>Login</Text>
            </Link>
          </CustomButton>
          <Text className="text-gray-500 mt-44 text-center">
            Don't have account ? <Text className="text-blue-400">Sign up.</Text>
          </Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Signup;
