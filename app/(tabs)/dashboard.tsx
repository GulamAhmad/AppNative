import { ScrollView, Text, View } from "react-native";
// import { getFleetTable } from "@/api";
// import { useQuery } from "@tanstack/react-query";
import { tableData } from "@/assets/data";
import NativeMap from "@/components/NativeMap";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import Card from "@/components/Card";
import Chart from "@/components/Chart";
import { FlatList } from "react-native-gesture-handler";
import NavButton from "@/components/NavButton";

const Dashboard = () => {
  // The APIs are not working for the native app for the time being
  // so hardcoded values are being used
  // const { data, error, isLoading } = useQuery({
  //   queryKey: ["getuser"],
  //   queryFn: () => getFleetTable(16),
  //   staleTime: Infinity,
  // });

  const CustomHandle = () => {
    return (
      <View className="w-full h-10 justify-center items-center">
        <View className="w-10 h-1.5 rounded bg-gray-300" />
      </View>
    );
  };

  return (
    <View className="flex-1 relative">
      <View className="p-5 bg-white w-11/12 absolute top-10 z-50 mx-4 rounded-xl">
        <Text className="text-xl font-medium">Welcom Hiper !!</Text>
      </View>
      <NativeMap />
      <BottomSheet
        snapPoints={[130, "70%"]}
        handleComponent={CustomHandle}
        enableContentPanningGesture={false}
      >
        <BottomSheetView style={{ flex: 1 }}>
          <FlatList
            data={tableData}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <View>
                <NavButton link={"/trips"} data={item ?? []} />
              </View>
            )}
            ListHeaderComponent={
              <View className="px-3">
                <Card otherstlyes="mb-3" />
                <Chart style="mb-5 bg-gray-100 p-4" />
                <Text className="px-2 py-1 text-xl font-semibold">
                  Vehicle Details
                </Text>
              </View>
            }
            contentContainerStyle={{ paddingBottom: 20 }} // Adds padding at the bottom
          />
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default Dashboard;
