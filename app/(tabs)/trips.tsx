import { View, Text } from "react-native";

import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import Table from "@/components/Table";
import { tableData, tableHeader } from "@/assets/data";
import { LinearGradient } from "expo-linear-gradient";
import NativeMap from "@/components/NativeMap";
import AntDesign from "@expo/vector-icons/AntDesign";

const trips = () => {
  return (
    <LinearGradient
      colors={["#43A047", "#26C6DA"]} // Example: Green to Light Green
      style={{ flex: 1 }} // Ensures the gradient covers the entire BottomSheetView
      start={[0, 0]} // Top-left corner
      end={[1, 0]}
    >
      <View className="flex-1 justify-center items-center p-1">
        <View
          className=" flex-row mb-2 bg-white w-11/12 mx-auto justify-center rounded-xl"
          style={{ elevation: 2 }}
        >
          <Text className="text-center">TN24AZ2646</Text>
          <AntDesign name="arrowleft" size={24} color="black" />
        </View>
        <View className="h-1/3 p-2 bg-white w-full mt-10 rounded-md">
          <NativeMap />
          <View className="bg-gray-100 p-2">
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              eligendi cumque doloremque assumenda quo! Cumque aspernatur rerum
              a deserunt esse.
            </Text>
          </View>
        </View>
        <BottomSheet
          snapPoints={["10%", "40%"]}
          enableContentPanningGesture={false}
        >
          <BottomSheetView style={{ flex: 1 }}>
            <Table header={tableHeader} data={tableData} />
          </BottomSheetView>
        </BottomSheet>
      </View>
    </LinearGradient>
  );
};

export default trips;
