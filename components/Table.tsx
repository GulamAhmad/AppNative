import { View, Text, FlatList, ScrollView } from "react-native";

const Table: React.FC<TableProps> = ({ header, data }) => {
  return (
    <ScrollView horizontal>
      <View className="border border-gray-400">
        <View className="flex-row border-b border-b-gray-300 bg-green-300">
          {header.map((header, index) => (
            <View
              key={index}
              className="border-r border-r-gray-400 w-32 items-center justify-center"
            >
              <Text className="font-bold text-gray-500 p-2">{header.name}</Text>
            </View>
          ))}
        </View>

        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View className=" flex-row border-b border-b-gray-300">
              {header.map((header, index) => (
                <View key={index} className="border-r border-r-gray-400 w-32">
                  <Text className="p-3">{item[header.id] ?? "NA"}</Text>
                </View>
              ))}
            </View>
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </ScrollView>
  );
};

export default Table;
