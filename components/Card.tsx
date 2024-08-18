import { View, Text, Image } from "react-native";
import { profile } from "@/constants";

const Card = ({ otherstlyes }: { otherstlyes?: string }) => {
  return (
    <View
      className={`w-full h-20 bg-gray-100 flex-row justify-between items-center rounded-md ${otherstlyes}`}
    >
      <View className="flex-row items-center">
        <Image
          source={profile}
          resizeMode="contain"
          className="w-12 h-12 m-3"
        />
        <View className="gap-1">
          <Text className=" text-xl font-bold">Hiper Automitve</Text>
          <Text className="">totalt driver : 6</Text>
        </View>
      </View>
      <View className="px-2">
        <Text className="">Total Savings</Text>
        <Text className="font-bold text-xl">$12,782.00</Text>
      </View>
    </View>
  );
};

export default Card;
