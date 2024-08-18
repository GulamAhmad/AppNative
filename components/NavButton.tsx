import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const NavButton: React.FC<NavButtonProps> = ({ data, link, otherStyles }) => {
  return (
    <Pressable
      className={`${otherStyles} p-4 bg-white m-2 rounded-md flex-row justify-between items-center`}
      style={{ elevation: 3 }}
    >
      <View>
        <View className="flex-row mb-1">
          <Text className="text-xl font-semibold">Vehicle :</Text>
          <Text className="text-xl font-semibold"> {data.vehicle_num}</Text>
        </View>

        <Text className="text-gray-400">
          Distance :{data.total_distance} km
        </Text>
      </View>
      <Link href={link}>
        <AntDesign name="rightcircleo" size={24} color="black" />
      </Link>
    </Pressable>
  );
};

export default NavButton;
