import { Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

const Chart = ({ style }: { style?: string }) => {
  const pieData = [
    { value: 54, color: "red", text: "54%" },
    { value: 40, color: "blue", text: "30%" },
    { value: 20, color: "green", text: "26%" },
  ];

  const dots = (color: string) => {
    return <View className={`w-3 h-3 rounded-full ${color}`} />;
  };

  return (
    <View className={`flex-row w-full flex-wrap justify-around ${style} `}>
      <Text className="w-full pb-4 text-xl font-bold">Fleet Details</Text>
      <PieChart
        donut
        radius={50}
        innerRadius={20}
        data={pieData}
        isAnimated={true}
        showText
        textColor="white"
        textSize={14}
      />
      <View className="h-24">
        <View className=" flex-row items-center gap-1 p-2">
          {dots("bg-red-400")}
          <Text>Vehicles: 3</Text>
        </View>
        <View className=" flex-row items-center gap-1 p-2">
          {dots("bg-blue-400")}
          <Text>Driver: 6</Text>
        </View>
        <View className=" flex-row items-center gap-1 p-2">
          {dots("bg-green-400")}
          <Text>Distance: 32342 Km</Text>
        </View>
      </View>
    </View>
  );
};

export default Chart;
